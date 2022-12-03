import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTeacherDto, UpdateTeacherDTO } from '../dtos/teacher.dto';
import { Teacher } from '../entities/Teacher.entity';
import { Role } from '../models/Roles.model';
import { TEACHER_REPOSITORY_KEY } from '../repository/UserRepository.providers';
import { UserService } from '../user.service';

@Injectable()
export class TeacherService {
  constructor(
    private readonly userServices: UserService,
    @Inject(TEACHER_REPOSITORY_KEY)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

  async createTeacher(
    institutionId: string,
    data: CreateTeacherDto,
  ): Promise<Teacher> {
    const { chargeOnInstitution, schedule, sectionsOnCharge, ...userData } =
      data;
    const user = await this.userServices.create({
      ...userData,
      role: Role.TEACHER,
      institutionId,
    });

    let sectionsOnChargeTransformed = null;
    if (sectionsOnCharge) {
      sectionsOnChargeTransformed = sectionsOnCharge.map((sectionOnCharge) => {
        return {
          subject: { id: sectionOnCharge.subjectId },
          section: { id: sectionOnCharge.sectionId },
        };
      });
    }

    const teacher = this.teacherRepository.create({
      schedule,
      chargeOnInstitution,
      user: { id: user.id },
      sectionsOnCharge: sectionsOnChargeTransformed,
    });

    await this.teacherRepository.save(teacher);

    return { ...teacher, user };
  }

  async update(
    institutionId: string,
    id: string,
    data: UpdateTeacherDTO,
  ): Promise<Teacher> {
    const { chargeOnInstitution, schedule, sectionsOnCharge, ...userData } =
      data;

    let sectionsOnChargeTransformed = null;
    if (sectionsOnCharge) {
      sectionsOnChargeTransformed = sectionsOnCharge.map((sectionOnCharge) => {
        return {
          subject: { id: sectionOnCharge.subjectId },
          section: { id: sectionOnCharge.sectionId },
        };
      });
    }
    const teacher = await this.findOne({ id });

    if (teacher.user.institutionId !== institutionId) {
      throw new ForbiddenException();
    }

    this.teacherRepository.merge(teacher, {
      user: userData,
      chargeOnInstitution,
      schedule,
      sectionsOnCharge: sectionsOnChargeTransformed,
    });

    await this.teacherRepository.save(teacher);

    return teacher;
  }

  async findOne(filter: { id?: string; userId?: string }): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOneBy({
      user: { id: filter.userId },
      id: filter.id,
    });
    if (!teacher) throw new NotFoundException(`Teacher not found`);

    return teacher;
  }

  async findAll(institutionId: string): Promise<Teacher[]> {
    const teacher = await this.teacherRepository.findBy({
      user: { institutionId },
    });

    return teacher;
  }

  async delete(id: string, institutionId: string): Promise<void> {
    const teacher = await this.findOne({ id });
    if (teacher.user.institutionId !== institutionId) {
      throw new ForbiddenException();
    }
    await this.teacherRepository.delete({ id: teacher.id });
  }
}
