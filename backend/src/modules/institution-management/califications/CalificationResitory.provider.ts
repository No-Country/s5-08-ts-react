import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { Calification } from './entities/calification.entity';

export const CALIFICATION_REPOSITORY_KEY = 'CALIFICATION_REPOSITORY';

export const calificationRepositorysProviders = [
  {
    provide: CALIFICATION_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Calification),
    inject: [DATA_SOURCE_KEY],
  },
];
