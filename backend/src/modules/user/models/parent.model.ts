import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class EmergencyContact {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  phone: string;
  @ApiProperty()
  @IsString()
  relationship: string;
}

export class StudentOnCharge {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  relationship: string;
  @ApiProperty()
  @IsNumber()
  degree: number;
  @ApiProperty()
  @IsString()
  section: string;
}
