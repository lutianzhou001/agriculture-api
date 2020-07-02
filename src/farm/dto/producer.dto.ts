import { IsString, IsIn, IsNumber, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProducerDto {

    @ApiPropertyOptional({ example: 'bd39b75e637cd50a21c649a57e730ea406096607' })
    @IsString()
    hash: string

    @ApiProperty({ description: '农民姓名' })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: '农民身份证号码' })
    @IsString()
    readonly identityCard: string;

    @ApiProperty({ description: '农民手机号' })
    @IsString()
    readonly phone: string;

    @ApiProperty({ description: '农民职位' })
    @IsString()
    readonly position: string;

}