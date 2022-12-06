import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Evaluation } from '../models/calification.model';

export class CreateCalificationGroupDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  studentId: string;

  @ApiProperty()
  @IsString()
  subjetId: string;

  @ApiProperty()
  @IsEmail()
  lapseNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  evaluations: Evaluation[];
}

export class UpdatetCalificationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  evaluations: Evaluation[];
}
