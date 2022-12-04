import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LocationDto } from 'src/modules/user/dtos/users.dto';
import { EmergencyContact } from 'src/modules/user/models/parent.model';

export class PostStudentDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  names: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  surnames: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dni?: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty()
  emergencyContact: EmergencyContact;

  @ApiProperty()
  @IsNotEmpty()
  location: LocationDto;

  @ApiProperty()
  @IsNotEmpty()
  sectionId: string;

  @ApiProperty()
  @IsNotEmpty()
  parentId: string;
}

export class UpdateStudentDto extends PartialType(PostStudentDTO) {}
