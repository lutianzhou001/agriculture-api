import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PairDto } from './pair.dto';

export class GetAllTradesDto {

  @ApiProperty()
  @IsString()
  readonly board: string;


  @ApiProperty()
  readonly pairs: [PairDto];

}

