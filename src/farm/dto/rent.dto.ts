import { IsString, IsIn, IsNumber, IsDate, IsObject, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RentDto {

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly hash: string;

    @ApiPropertyOptional({ description: '领用用户' })
    @IsString()
    @IsOptional()
    readonly user: string;

    @ApiPropertyOptional({ description: '使用时间' })
    @IsDate()
    @IsOptional()
    readonly useTime: Date;

    @ApiPropertyOptional({ description: '备注' })
    @IsOptional()
    @IsString()
    readonly remark: string;

    @ApiPropertyOptional({ description: '说明' })
    @IsOptional()
    readonly spec: string;

}


