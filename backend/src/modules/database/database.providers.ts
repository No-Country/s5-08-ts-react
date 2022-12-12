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
      const { postgres } = configService;
      const dataSource = new DataSource({
        type: 'postgres',
        host: postgres.host,
        port: postgres.port,
        database: postgres.db,
        username: postgres.user,
        password: postgres.password,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
