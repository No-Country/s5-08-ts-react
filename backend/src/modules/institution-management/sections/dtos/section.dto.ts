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
  @IsNumber()
  @Max(12)
  @IsNotEmpty()
  degree: number;

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
  @IsNumber()
  @Max(12)
  @IsNotEmpty()
  @IsOptional()
  degree?: number;

  @ApiProperty({ enum: EducationLevel })
  @IsEnum(EducationLevel)
  @IsNotEmpty()
  @IsOptional()
  educationLevel?: EducationLevel;
}
