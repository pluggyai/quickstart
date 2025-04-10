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
export class Investment extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  declare id: string;

  @Column({ unique: true })
  externalId: string;

  @Column
  code: string;

  @Column
  name: string;

  @Column({ type: DataType.DECIMAL })
  balance: number;

  @Column
  currencyCode: string;

  @Column
  type: string;

  @Column
  subtype: string;

  @BelongsTo(() => User, 'userId')
  user: User;
}
