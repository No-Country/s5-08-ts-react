/*iport { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { Admin } from '../entities/Admin.entitys';

export const ADMIN_REPOSITORY_KEY = 'ADMIN_REPOSITORY';

export const userRepositorysProviders = [
  {
    provide: ADMIN_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Admin),
    inject: [DATA_SOURCE_KEY],
  },
];
*/
