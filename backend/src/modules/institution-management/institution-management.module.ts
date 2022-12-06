import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { calificationRepositorysProviders } from './califications/CalificationResitory.provider';
import { CalificationController } from './califications/controllers/calification.controller';
import { CalificationService } from './califications/services/calification.service';
import { DegreeController } from './degree/grade.controllers';
import { DegreeService } from './degree/grade.service';
import { gradeRepositorysProviders } from './degree/gradeRepository.provider';
import { InstitutionsController } from './institutions/controllers/institutions.controller';
import { InstitutionRepositorysProviders } from './institutions/InstitutionRepository.provider';
import { InstitutionsService } from './institutions/services/institutions.service';
import { SectionsController } from './sections/controllers/sections.controller';
import { sectionRepositorysProviders } from './sections/SectionRepository.provider';
import { SectionService } from './sections/services/sections.service';
import { StudentController } from './students/controllers/students.controller';
import { StudentService } from './students/services/student.service';
import { studentRepositorysProviders } from './students/StudentRepository.provider';
import { SubjectsController } from './subjects/controllers/subject.controller';
import { SubjectService } from './subjects/services/subject.service';
import { subjectRepositorysProviders } from './subjects/SubjectsRepository.provider';

@Module({
  imports: [JwtModule],
  controllers: [
    InstitutionsController,
    StudentController,
    SectionsController,
    SubjectsController,
    CalificationController,
    DegreeController,
  ],
  providers: [
    InstitutionsService,
    ...InstitutionRepositorysProviders,
    StudentService,
    SectionService,
    SubjectService,
    StudentService,
    CalificationService,
    DegreeService,
    ...calificationRepositorysProviders,
    ...sectionRepositorysProviders,
    ...subjectRepositorysProviders,
    ...studentRepositorysProviders,
    ...gradeRepositorysProviders,
  ],
})
export class InstitutionManagementModule {}
