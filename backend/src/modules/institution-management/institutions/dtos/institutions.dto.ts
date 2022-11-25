import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateInstitutionDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  location: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  logoUrl: string;
}
