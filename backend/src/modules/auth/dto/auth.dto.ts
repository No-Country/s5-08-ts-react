import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAdminDto } from 'src/modules/user/dtos/users.dto';

export class RegisterDTO extends CreateAdminDto {
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
