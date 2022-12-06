import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Grade } from './entities/Grade.entity';
import { Subject } from '../subjects/entities/Subject.entity';

@Entity({ name: 'grade_subjects' })
export class GradeSubjects {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Grade)
  @JoinColumn({ name: 'subjet_id' })
  degree: Grade;

  @ManyToOne(() => Subject, { cascade: ['insert'], eager: true })
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @Column({ type: 'uuid' })
  institutionId: string;
}
