import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendVerificationCodeDto {

  @ApiProperty()
  @IsString()
  readonly account: string;

}
