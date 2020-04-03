import { ApiProperty } from '@nestjs/swagger';

export class Result {

  @ApiProperty({example:0})
  success: number;

  @ApiProperty({example:404})
  errCode: number;

  @ApiProperty({example:"service not reached"})
  errMessage: string;

  @ApiProperty({example:"googleAuth"})
  authMethod: string;

}
