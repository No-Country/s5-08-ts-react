import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { Student } from './Student.entity';

export const STUDENT_REPOSITORY_KEY = 'STUDENT_REPOSITORY';

export const studentRepositorysProviders = [
  {
    provide: STUDENT_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Student),
    inject: [DATA_SOURCE_KEY],
  },
];
