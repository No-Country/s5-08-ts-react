import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EmergencyContact, StudentOnCharge } from '../models/parent.model';
import { CreateUserDTO } from './users.dto';

export class CreateParentDto extends CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  schedule: string;

  @IsNotEmpty()
  emergencyContact: EmergencyContact;

  @IsArray()
  @IsOptional()
  studentsOnCharge: StudentOnCharge[];
}

export class UpdateParentDTO extends PartialType(CreateParentDto) {}
