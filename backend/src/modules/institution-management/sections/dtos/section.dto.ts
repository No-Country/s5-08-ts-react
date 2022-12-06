import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';
import { EducationLevel } from '../entities/EducationLevel.model';

export class CreateSectionDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gradeId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  letterIdentifier: string;

  @ApiProperty({ enum: EducationLevel })
  @IsEnum(EducationLevel)
  @IsNotEmpty()
  educationLevel: EducationLevel;
}

export class UpdateSectionDTO extends PartialType(CreateSectionDTO) {}

export type CreateSectionParams = CreateSectionDTO & {
  institutionId: string;
};

export class SectionsFiltersDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  gradeId?: string;

  @ApiProperty({ enum: EducationLevel })
  @IsEnum(EducationLevel)
  @IsNotEmpty()
  @IsOptional()
  educationLevel?: EducationLevel;
}
