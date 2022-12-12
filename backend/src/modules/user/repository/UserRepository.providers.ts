import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { Admin } from '../entities/Admin.entity';
import { Parent } from '../entities/Parents.entity';
import { Teacher } from '../entities/Teacher.entity';
import { User } from '../entities/User.entity';

export const USER_REPOSITORY_KEY = 'USER_REPOSITORY';
export const ADMIN_REPOSITORY_KEY = 'ADMIN_REPOSITORY';
export const TEACHER_REPOSITORY_KEY = 'TEACHER_REPOSITORY';
export const PARENT_REPOSITORY_KEY = 'PARENT_REPOSITORY';

export const userRepositorysProviders = [
  {
    provide: USER_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE_KEY],
  },
  {
    provide: ADMIN_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Admin),
    inject: [DATA_SOURCE_KEY],
  },
  {
    provide: TEACHER_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Teacher),
    inject: [DATA_SOURCE_KEY],
  },

  {
    provide: PARENT_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Parent),
    inject: [DATA_SOURCE_KEY],
  },
];
