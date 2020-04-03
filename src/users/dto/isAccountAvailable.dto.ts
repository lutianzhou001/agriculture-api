import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IsAccountAvailableDto {

  @ApiProperty()
  @IsString()
  readonly account: string;

}
