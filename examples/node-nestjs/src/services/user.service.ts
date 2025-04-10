import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { Transaction } from '../models/transaction.model';
import { Account } from '../models/account.model';
import { ConnectionRepository } from '../repositories/connection.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
    @InjectModel(Account)
    private accountModel: typeof Account,
    private connectionRepository: ConnectionRepository,
  ) {}

  async create(dto: { name: string }) {
    return this.userModel.create(dto);
  }

  async getConnections(userId: string) {
    return this.connectionRepository.findAll({ userId });
  }

  async getTransactions(userId: string) {
    return this.transactionModel.findAll({
      where: { userId },
      order: [['date', 'DESC']],
    });
  }

  async getAccounts(userId: string) {
    return this.accountModel.findAll({
      where: { userId },
      raw: true,
    });
  }
}
