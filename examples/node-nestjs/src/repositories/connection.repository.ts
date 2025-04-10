import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Connection } from '../models/connection.model';
import { WhereOptions } from 'sequelize';

@Injectable()
export class ConnectionRepository {
  constructor(
    @InjectModel(Connection)
    private connectionModel: typeof Connection,
  ) {}

  async create(connection: Partial<any>) {
    return this.connectionModel.create(connection);
  }

  async findOne(where: WhereOptions<Connection>) {
    return this.connectionModel.findOne({
      where,
      include: [{ all: true }],
      raw: true,
      nest: true,
    });
  }

  async findAll(where: WhereOptions<any>) {
    return this.connectionModel.findAll({
      where,
      include: [{ all: true }],
      raw: true,
      nest: true,
    });
  }
}
