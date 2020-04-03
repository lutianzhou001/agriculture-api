import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {

  @ApiProperty()
  @IsString()
  readonly account: string;

  @ApiProperty()
  @IsString()
  readonly password: string;

}

