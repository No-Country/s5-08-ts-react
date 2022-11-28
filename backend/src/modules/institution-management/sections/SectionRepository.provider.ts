import { DATA_SOURCE_KEY } from 'src/modules/database/database.providers';
import { DataSource } from 'typeorm';
import { Section } from './entities/Section.entity';

export const SECTION_REPOSITORY_KEY = 'SECTION_REPOSITORY';

export const sectionRepositorysProviders = [
  {
    provide: SECTION_REPOSITORY_KEY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Section),
    inject: [DATA_SOURCE_KEY],
  },
];
