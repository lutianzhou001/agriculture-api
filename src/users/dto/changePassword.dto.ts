import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {

  @ApiProperty()
  @IsString()
  readonly oldPassword: string;

  @ApiProperty()
  @IsString()
  readonly newPassword: string;

}

