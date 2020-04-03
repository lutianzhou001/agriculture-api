import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyDto {

  @ApiProperty()
  @IsString()
  readonly googleAuth: number;

  @ApiProperty()
  @IsString()
  readonly mailAuth: number;

  @ApiProperty()
  @IsString()
  readonly smsAuth: number;

}

