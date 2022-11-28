import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { InstitutionsController } from './institutions/controllers/institutions.controller';
import { InstitutionRepositorysProviders } from './institutions/InstitutionRepository.provider';
import { InstitutionsService } from './institutions/services/institutions.service';
import { SectionsController } from './sections/controllers/sections.controller';
import { sectionRepositorysProviders } from './sections/SectionRepository.provider';
import { SectionService } from './sections/services/sections.service';
import { StudentsController } from './students/controllers/students.controller';
import { StudentService } from './students/services/services.service';

@Module({
  imports: [JwtModule],
  controllers: [InstitutionsController, StudentsController, SectionsController],
  providers: [
    InstitutionsService,
    ...InstitutionRepositorysProviders,
    StudentService,
    SectionService,
    ...sectionRepositorysProviders,
  ],
})
export class InstitutionManagementModule {}
