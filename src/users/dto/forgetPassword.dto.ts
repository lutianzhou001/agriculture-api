import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ForgetPasswordDto {

  @ApiProperty()
  @IsString()
  readonly account: string;

}

