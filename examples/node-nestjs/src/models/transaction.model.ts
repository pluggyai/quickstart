import {
  BelongsTo,
  Column,
  DataType,
  Default,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { User } from './user.model';

@Table
export class Transaction extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  declare id: string;

  @Column({ unique: true })
  externalId: string;

  @Column
  itemId: string;

  @Column
  status: string;

  @Column
  type: string;

  @Column
  description: string;

  @Column({ type: DataType.DECIMAL })
  amount: number;

  @Column
  currencyCode: string;

  @Column
  date: Date;

  @Column
  categoryId: string;

  @Column
  category: string;

  @Column
  accountId: string;

  @BelongsTo(() => User, 'userId')
  user: User;
}
