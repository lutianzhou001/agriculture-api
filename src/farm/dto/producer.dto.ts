import { IsString, IsIn, IsNumber, IsDate, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProducerDto {

    @ApiPropertyOptional({ example: 'bd39b75e637cd50a21c649a57e730ea406096607' })
    @IsString()
    @IsOptional()
    hash: string

    @ApiProperty({ description: '农民姓名' })
    @IsString()
    readonly name: string;

    @ApiPropertyOptional({ description: '农民身份证号码' })
    @IsString()
    @IsOptional()
    readonly identityCard: string;

    @ApiPropertyOptional({ description: '农民手机号' })
    @IsString()
    @IsOptional()
    readonly phone: string;

    @ApiPropertyOptional({ description: '农民职位' })
    @IsString()
    @IsOptional()
    readonly position: string;

}
