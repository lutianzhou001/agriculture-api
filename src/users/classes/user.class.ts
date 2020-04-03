import { ApiProperty } from '@nestjs/swagger'

export class User {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  mail: string;

  @ApiProperty()
  tel: string;

  @ApiProperty()
  google: string;

  @ApiProperty()
  isKYC: number;

}
