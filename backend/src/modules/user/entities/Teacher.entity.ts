import { TeacherSection } from '../../institution-management/sections/entities/TeacherSections.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';

@Entity({ name: 'teachers' })
export class Teacher extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  chargeOnInstitution: string;

  @Column({ length: 50 })
  schedule: string;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @OneToMany(() => TeacherSection, (sectionTeacher) => sectionTeacher.teacher)
  sectionsOnCharge: TeacherSection[];
}
