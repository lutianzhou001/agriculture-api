import { ApiProperty } from '@nestjs/swagger';

export class Asset {
  @ApiProperty()
  name: string;

  @ApiProperty()
  discription: string;

  @ApiProperty()
  isERC20: number;

}
