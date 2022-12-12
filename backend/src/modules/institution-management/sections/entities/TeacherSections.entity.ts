import { Teacher } from '../../../user/entities/Teacher.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../../database/Base.entity';
import { Subject } from '../../subjects/entities/Subject.entity';
import { Section } from './Section.entity';

@Entity({ name: 'teachers_sections' })
export class TeacherSection extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.sectionsOnCharge)
  teacher: Teacher;

  @ManyToOne(() => Section, (section) => section.teachers)
  section: Section;

  @ManyToOne(() => Subject, { nullable: true })
  subject: Subject;
}
