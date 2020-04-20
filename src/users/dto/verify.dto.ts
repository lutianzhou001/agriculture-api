import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyDto {

  @ApiProperty()
  @IsString()
  readonly TOTPAuth: number;

  @ApiProperty()
  @IsString()
  readonly mailAuth: number;

  @ApiProperty()
  @IsString()
  readonly phoneAuth: number;

}

