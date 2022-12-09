import { TeacherSection } from '../../institution-management/sections/entities/TeacherSections.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';
import { User } from './User.entity';

@Entity({ name: 'teachers' })
export class Teacher extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  chargeOnInstitution: string;

  @Column({ length: 50 })
  schedule: string;

  @OneToOne(() => User, { eager: true, cascade: true })
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => TeacherSection, (sectionTeacher) => sectionTeacher.teacher, {
    cascade: true,
  })
  sectionsOnCharge: TeacherSection[];
}
