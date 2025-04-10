import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dbConfig = (
  configService: ConfigService,
): SequelizeModuleOptions => {
  return {
    dialect: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_HOST_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    autoLoadModels: true,
    synchronize: true,
  };
};
