import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OpenAuthDto {

  @ApiProperty()
  @IsString()
  readonly authMethod: string;

}

