import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'grade' })
export class Grade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  number: number;

  @Column({ length: 20 })
  name: string;
}
