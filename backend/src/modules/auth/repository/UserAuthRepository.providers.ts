import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { UserAuth } from '../UserAuth.entity';

export const AUTH_REPOSITORY_KEY = 'AUTH_REPOSITORY';

export const userAuthRepositorysProviders = [
  {
    provide: AUTH_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserAuth),
    inject: [DATA_SOURCE_KEY],
  },
];
