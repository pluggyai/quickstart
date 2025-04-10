import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { dbConfig } from './db.config';

import { User } from './models/user.model';

import { UserController } from './controllers/user.controller';
import { WebhookController } from './controllers/webhook.controller';

import { UserService } from './services/user.service';
import { TokenService } from './services/token.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConnectionService } from './services/connection.service';
import { TransactionService } from './services/transaction.service';
import { PluggyClient } from './clients/pluggy.client';
import { Connection } from './models/connection.model';
import { Transaction } from './models/transaction.model';
import { Account } from './models/account.model';
import { Investment } from './models/investment.model';
import { LoggerModule } from 'nestjs-pino';
import { ConnectionRepository } from './repositories/connection.repository';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: dbConfig,
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([
      User,
      Connection,
      Transaction,
      Account,
      Investment,
    ]),
    EventEmitterModule.forRoot({
      delimiter: '/',
    }),
  ],
  controllers: [WebhookController, UserController],
  providers: [
    ConnectionRepository,
    TokenService,
    UserService,
    ConnectionService,
    TransactionService,
    PluggyClient,
  ],
})
export class AppModule {}
