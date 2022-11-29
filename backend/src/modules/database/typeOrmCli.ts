import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { databaseProviders } from './database.providers';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get('MSQL_HOST'),
  port: configService.get('MSQL_PORT'),
  username: configService.get('MSQL_USER'),
  password: configService.get('MSQL_PASSWORD'),
  database: configService.get('MSQL_DB'),
  entities: ['src/**/*.entity.ts'],
  logging: true,
  synchronize: false,
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
