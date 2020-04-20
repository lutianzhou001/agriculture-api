import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IsExistedDto {

  @ApiProperty()
  @IsString()
  readonly mail: string;

  @ApiProperty()
  @IsString()
  readonly phone: string;

}
