import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BindPhoneDto {

  @ApiProperty()
  @IsString()
  readonly phone: string;

}