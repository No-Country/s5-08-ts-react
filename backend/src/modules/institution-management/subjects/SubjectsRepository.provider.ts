import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { Subject } from './entities/Subject.entity';

export const SUBJECT_REPOSITORY_KEY = 'SUBJECT_REPOSITORY';

export const subjectRepositorysProviders = [
  {
    provide: SUBJECT_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Subject),
    inject: [DATA_SOURCE_KEY],
  },
];
