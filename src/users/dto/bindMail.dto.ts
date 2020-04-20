import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BindMailorSmsDto {

  @ApiProperty()
  @IsString()
  readonly account: string;

}

