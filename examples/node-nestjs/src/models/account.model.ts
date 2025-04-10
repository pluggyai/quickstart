import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

import { User } from './user.model';

@Table
export class Account extends Model {
  @Column({ unique: true })
  externalId: string;

  @Column
  itemId: string;

  @Column
  type: string;

  @Column
  subtype: string;

  @Column
  accuntNumber: string;

  @Column
  name: string;

  @Column({ type: DataType.DECIMAL })
  balance: number;

  @BelongsTo(() => User, 'userId')
  user: User;
}
