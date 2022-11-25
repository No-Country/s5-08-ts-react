import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  institutionId: string;
}

export class LoginDTO {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class ActivateUserDTO {
  @IsString()
  @IsNotEmpty()
  password: string;
}
