import { ApiProperty } from '@nestjs/swagger'

export class Pair {

  @ApiProperty()
  name: string;

  @ApiProperty()
  minAmount: number;

  @ApiProperty()
  takerFee: number;

  @ApiProperty()
  makerFee: number;

  @ApiProperty()
  board: string;

}
