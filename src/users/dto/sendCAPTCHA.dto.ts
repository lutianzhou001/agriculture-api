import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendCAPTCHA {

  @ApiProperty()
  @IsString()
  readonly mail: string;

  @ApiProperty()
  @IsString()
  readonly phone: string;

  @ApiProperty()
  @IsString()
  readonly usage: string;

}
