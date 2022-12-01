import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../../database/Base.entity';
import { EducationLevel } from './EducationLevel.model';
import { TeacherSection } from './TeacherSections.entity';

@Entity({ name: 'sections' })
export class Section extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  degree: number;

  @Column({ name: 'letter_identifier' })
  letterIdentifier: string;

  @Column({ name: 'education_level' })
  educationLevel: EducationLevel;

  @OneToMany(() => TeacherSection, (sectionTeacher) => sectionTeacher.section)
  teachers: TeacherSection[];

  @Column({ type: 'uuid' })
  institutionId: string;
}
