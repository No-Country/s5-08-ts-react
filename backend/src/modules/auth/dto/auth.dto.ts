import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { LocationDto } from 'src/modules/user/dtos/users.dto';

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
  dni: string;

  @IsNotEmpty()
  location: LocationDto;

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
