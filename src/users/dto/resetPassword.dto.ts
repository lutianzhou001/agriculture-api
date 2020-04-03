import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VerifyDto } from './verify.dto';

export class ResetPasswordDto {

  @ApiProperty()
  @IsString()
  readonly account: string;

  @ApiProperty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsString()
  readonly verify: VerifyDto;

}

