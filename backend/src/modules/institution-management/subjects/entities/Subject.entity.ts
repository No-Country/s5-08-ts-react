import { BaseProperties } from '../../../database/Base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'subjects' })
export class Subject extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
