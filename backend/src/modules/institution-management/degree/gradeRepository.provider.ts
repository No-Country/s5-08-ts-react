import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { Grade } from './entities/Grade.entity';
import { GradeSubjects } from './GradeSubjects.entity';

export const GRADE_REPOSITORY_KEY = 'GRADE_REPOSITORY';
export const GRADE_SUBJECT_REPOSITORY_KEY = 'GRADE_SUBJECT_REPOSITORY';

export const gradeRepositorysProviders = [
  {
    provide: GRADE_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Grade),
    inject: [DATA_SOURCE_KEY],
  },
  {
    provide: GRADE_SUBJECT_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(GradeSubjects),
    inject: [DATA_SOURCE_KEY],
  },
];
