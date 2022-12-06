import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AddSubjectDto } from './GreadeSubjects.dto';
import { GradeSubjects } from './GradeSubjects.entity';
import { Grade } from './entities/Grade.entity';
import {
  GRADE_REPOSITORY_KEY,
  GRADE_SUBJECT_REPOSITORY_KEY,
} from './gradeRepository.provider';

@Injectable()
export class DegreeService {
  constructor(
    @Inject(GRADE_REPOSITORY_KEY)
    private gradeRepository: Repository<Grade>,
    @Inject(GRADE_SUBJECT_REPOSITORY_KEY)
    private gradeSubjectRepository: Repository<GradeSubjects>,
  ) {}

  async getAll(): Promise<Grade[]> {
    return await this.gradeRepository.find();
  }

  async addSubjet(
    institutionId: string,
    gradeId: string,
    data: AddSubjectDto,
  ): Promise<GradeSubjects> {
    const gradeSubject = this.gradeSubjectRepository.create({
      subject: data,
      grade: { id: gradeId },
      institutionId,
    });
    return await this.gradeSubjectRepository.save(gradeSubject);
  }

  async getSubjectsByGrade(
    gradeId: string,
    institutionId: string,
  ): Promise<GradeSubjects[]> {
    return await this.gradeSubjectRepository.findBy({
      institutionId,
      grade: { id: gradeId },
    });
  }
}
