import {
  Column,
  DataType,
  Default,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Connection } from './connection.model';

@Table
export class User extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => Connection, 'userId')
  connections: Connection[];
}
