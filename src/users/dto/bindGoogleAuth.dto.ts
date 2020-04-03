import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BindGoogleAuthDto {

  @ApiProperty()
  @IsString()
  readonly account: string;

}

