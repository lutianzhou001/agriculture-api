import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PairDto {

  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNumber()
  readonly price: number;

  @ApiProperty()
  @IsNumber()
  readonly priceBefore24h: number;

  @ApiProperty()
  @IsNumber()
  readonly volumn: number;

}

