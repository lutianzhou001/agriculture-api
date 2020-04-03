import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CloseAuthDto {

  @ApiProperty()
  @IsString()
  readonly authMethod: string;

}

