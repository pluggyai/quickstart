import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectModel } from '@nestjs/sequelize';

import { WebhookPayloadItem } from '../types/webhook.body';
import { PluggyClient } from '../clients/pluggy.client';

import { Account } from '../models/account.model';
import { Investment } from '../models/investment.model';
import { ConnectionRepository } from '../repositories/connection.repository';

@Injectable()
export class ConnectionService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account,
    @InjectModel(Investment)
    private investmentModel: typeof Investment,
    private pluggyClient: PluggyClient,
    private connectionRepository: ConnectionRepository,
  ) {}

  @OnEvent('item/login_succeeded')
  async onItemInitiated(payload: WebhookPayloadItem) {
    const item = await this.pluggyClient.instance().fetchItem(payload.itemId);

    await this.connectionRepository.create({
      itemId: payload.itemId,
      name: item.connector.name,
      status: item.status,
      userId: item.clientUserId,
    });
  }

  @OnEvent('item/created')
  async onItemReady(payload: WebhookPayloadItem) {
    const connection = await this.connectionRepository.findOne({
      itemId: payload.itemId,
    });

    const { results: accounts } = await this.pluggyClient
      .instance()
      .fetchAccounts(payload.itemId);

    await this.accountModel.bulkCreate(
      accounts.map((account) => ({
        externalId: account.id,
        itemId: payload.itemId,
        type: account.type,
        subtype: account.subtype,
        accuntNumber: account.number,
        name: account.name,
        balance: account.balance,
        userId: connection.user.id,
      })),
      { ignoreDuplicates: true },
    );

    const { results: investments } = await this.pluggyClient
      .instance()
      .fetchInvestments(payload.itemId);

    await this.investmentModel.bulkCreate(
      investments.map((investment) => ({
        externalId: investment.id,
        code: investment.code,
        name: investment.name,
        balance: investment.balance,
        currencyCode: investment.currencyCode,
        type: investment.type,
        subtype: investment.subtype,
        userId: connection.user.id,
      })),
      { ignoreDuplicates: true },
    );
  }
}
