import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseProperties } from '../../../database/Base.entity';
import { Grade } from '../../degree/entities/Grade.entity';
import { EducationLevel } from './EducationLevel.model';
import { TeacherSection } from './TeacherSections.entity';

@Entity({ name: 'sections' })
export class Section extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Grade)
  @JoinColumn({ name: 'grade_id' })
  grade: Grade;

  @Column({ name: 'letter_identifier' })
  letterIdentifier: string;

  @Column({ name: 'education_level' })
  educationLevel: EducationLevel;

  @OneToMany(() => TeacherSection, (sectionTeacher) => sectionTeacher.section)
  teachers: TeacherSection[];

  @Column({ type: 'uuid' })
  institutionId: string;
}
