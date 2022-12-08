import { IsNumber, IsOptional, IsString } from 'class-validator';

export class AddSubjectDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  id?: string;
}
