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
export class Connection extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  itemId: string;

  @Column
  name: string;

  @Column
  status: string;

  @BelongsTo(() => User, 'userId')
  user: User;
}
