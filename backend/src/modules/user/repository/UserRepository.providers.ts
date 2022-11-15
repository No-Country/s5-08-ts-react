import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { User } from '../User.entity';

export const USER_REPOSITORY_KEY = 'USER_REPOSITORY';

export const userRepositorysProviders = [
  {
    provide: USER_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE_KEY],
  },
];
