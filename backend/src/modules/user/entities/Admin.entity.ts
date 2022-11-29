//admin
// cargo en el plantel
// horario

//teacher
// cargo en el plantel
// horario laboral
// asignaturas y secciones

// parents/ Representante
// contacto de emergencia {name, parentezco, phone}
// alumnos al que representa : { alumno, parentezco }
// grados y secciones

// alumnos
// contactos de emerencia { name, parentezco, phone}
// grado , seccion

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';

@Entity({ name: 'admins' })
export class Admin extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  chargeOnInstitution: string;

  @Column({ length: 50 })
  schedule: string;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;
}
