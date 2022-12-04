import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { PostStudentDTO, UpdateStudentDto } from '../dtos/student.dto';
import { Student } from '../Student.entity';
import { STUDENT_REPOSITORY_KEY } from '../StudentRepository.provider';

@Injectable()
export class StudentService {
  constructor(
    @Inject(STUDENT_REPOSITORY_KEY)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(institutionId: string, data: PostStudentDTO): Promise<Student> {
    const student = this.studentRepository.create({
      ...data,
      institutionId,
    });

    return await this.studentRepository.save(student);
  }

  async update(
    institutionId: string,
    id: string,
    data: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.findOne(id);
    if (student.institutionId !== institutionId) {
      throw new ForbiddenException();
    }

    this.studentRepository.merge(student, data);
    return await this.studentRepository.save(student);
  }

  async findOne(id: string) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) throw new NotFoundException(`Student not found`);

    return student;
  }

  async findAll(filter: {
    institutionId: string;
    parentId?: string;
  }): Promise<Student[]> {
    const students = await this.studentRepository.findBy({
      institutionId: filter.institutionId,
      parentId: filter.parentId,
    });

    return students;
  }

  async delete(id: string, institutionId: string): Promise<void> {
    const student = await this.findOne(id);
    if (student.institutionId !== institutionId) {
      throw new ForbiddenException();
    }
    await this.studentRepository.delete({ id: student.id });
  }
}
