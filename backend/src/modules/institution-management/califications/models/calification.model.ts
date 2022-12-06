import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class Evaluation {
  @ApiProperty()
  @IsNumber()
  number: number;
  @ApiProperty()
  points: number | string;
}
