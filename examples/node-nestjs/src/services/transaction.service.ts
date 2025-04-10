import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction as PluggyTransaction } from 'pluggy-sdk';

import { PluggyClient } from '../clients/pluggy.client';
import { WebhookPayloadTransaction } from '../types/webhook.body';
import { Transaction } from '../models/transaction.model';
import { ConnectionRepository } from '../repositories/connection.repository';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
    private pluggyClient: PluggyClient,
    private connectionRepository: ConnectionRepository,
  ) {}

  @OnEvent('transactions/created')
  async onTransactionsCreated(payload: WebhookPayloadTransaction) {
    const connection = await this.connectionRepository.findOne({
      itemId: payload.itemId,
    });

    const { results: transactions } = await this.pluggyClient
      .instance()
      .fetchTransactions(payload.accountId, {
        createdAtFrom: payload.transactionsCreatedAtFrom,
      });

    await this.saveTransactions(
      payload.itemId,
      connection.user.id,
      transactions,
    );
  }

  @OnEvent('transactions/updated')
  async onTransactionsUpdated(payload: WebhookPayloadTransaction) {
    const connection = await this.connectionRepository.findOne({
      itemId: payload.itemId,
    });

    const { results: transactions } = await this.pluggyClient
      .instance()
      .fetchTransactions(payload.accountId, {
        // @ts-expect-error ids not exists
        ids: payload.transactionIds,
      });

    await this.saveTransactions(
      payload.itemId,
      connection.user.id,
      transactions,
    );
  }

  @OnEvent('transactions/deleted')
  async onTransactionDeleted(payload: WebhookPayloadTransaction) {
    await this.transactionModel.destroy({
      where: { externalId: payload.transactionIds },
    });
  }

  private async saveTransactions(
    itemId: string,
    userId: string,
    transactions: PluggyTransaction[],
  ) {
    await this.transactionModel.bulkCreate(
      transactions.map((transaction) => ({
        externalId: transaction.id,
        itemId,
        accountId: transaction.accountId,
        type: transaction.type,
        status: transaction.status,
        description: transaction.description,
        amount: transaction.amount,
        currencyCode: transaction.currencyCode,
        date: transaction.date,
        categoryId: transaction.categoryId,
        category: transaction.category,
        userId,
      })),
      { ignoreDuplicates: true },
    );
  }
}
