import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from '../dtos/subject.dto';
import { Subject } from '../entities/Subject.entity';
import { SUBJECT_REPOSITORY_KEY } from '../SubjectsRepository.provider';

@Injectable()
export class SubjectService {
  constructor(
    @Inject(SUBJECT_REPOSITORY_KEY)
    private subjectRepository: Repository<Subject>,
  ) {}

  async create(newSubject: CreateSubjectDto) {
    const subjectExist = await this.subjectRepository.findOneBy({
      name: newSubject.name,
    });
    if (subjectExist) {
      throw new ConflictException('Subject already exists');
    }

    const subject = this.subjectRepository.create(newSubject);
    return await this.subjectRepository.save(subject);
  }

  async findAll(): Promise<Subject[]> {
    return await this.subjectRepository.find();
  }
}
