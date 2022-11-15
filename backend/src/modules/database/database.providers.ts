import { Provider } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { DataSource } from 'typeorm';

export const DATA_SOURCE_KEY = 'DATA_SOURCE';

export const databaseProviders: Provider[] = [
  {
    provide: DATA_SOURCE_KEY,
    inject: [config.KEY],
    useFactory: async (configService: ConfigType<typeof config>) => {
      const { msql } = configService;
      const dataSource = new DataSource({
        type: 'mysql',
        host: msql.host,
        port: msql.port,
        database: msql.db,
        username: msql.user,
        password: msql.password,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
