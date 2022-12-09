import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserDTO } from './users.dto';

export class CreateTeacherDto extends CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  chargeOnInstitution: string;

  @IsString()
  @IsNotEmpty()
  schedule: string;

  @IsArray()
  @IsOptional()
  sectionsOnCharge: SectionOnCharge[];
}

class SectionOnCharge {
  @IsString()
  sectionId: string;
  @IsString()
  subjectId: string;
}

export class UpdateTeacherDTO extends PartialType(CreateTeacherDto) {}

export class CreateTeacherResponseDto extends CreateTeacherDto {
  id: string;
  userId: string;
}
