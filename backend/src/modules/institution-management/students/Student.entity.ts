import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';

@Entity({ name: 'students' })
export class Student extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  names: string;

  @Column()
  surnames: string;

  @Column({ type: 'uuid' })
  sectionId: string;

  @Column({ type: 'uuid' })
  parentId: string;

  @Column({ type: 'uuid' })
  institutionId: string;
}
