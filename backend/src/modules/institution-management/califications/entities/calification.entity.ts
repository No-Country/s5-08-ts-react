import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseProperties } from '../../../database/Base.entity';
import { Subject } from '../../subjects/entities/Subject.entity';
import { Evaluation } from '../models/calification.model';

@Entity({ name: 'califications' })
export class Calification extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  studentId: string;

  @ManyToOne(() => Subject, { eager: true, nullable: true })
  @JoinColumn({ name: 'subjectId' })
  subject: Subject;

  @Column({ type: 'int' })
  lapseNumber: number;

  @Column({ type: 'jsonb' })
  evaluations: Evaluation[];
}
