import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '../models/Roles.model';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class LocationDto {
  @IsString()
  cyty: string;
  @IsString()
  locality: string;
  @IsString()
  street: string;
  @IsString()
  houseNumber: string;
  @IsString()
  department: string;
}

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  phone: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  location: LocationDto;

  @ApiProperty({ enum: Role })
  @IsEnum(Role)
  @IsNotEmpty()
  role: string;
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}

export type CreateUserParams = CreateUserDTO & {
  institutionId: string;
};
