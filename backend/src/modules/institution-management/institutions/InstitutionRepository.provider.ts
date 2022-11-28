import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { Institution } from './Institution.entity';

export const INSTITUTION_REPOSITORY_KEY = 'INSTITUTION_REPOSITORY';

export const InstitutionRepositorysProviders = [
  {
    provide: INSTITUTION_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Institution),
    inject: [DATA_SOURCE_KEY],
  },
];
