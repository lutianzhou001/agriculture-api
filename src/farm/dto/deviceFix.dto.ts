import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DeviceFixDto {

    @ApiPropertyOptional({ description: '维修HASH' })
    @IsString()
    readonly hash: string

    @ApiProperty({ description: '设备HASH' })
    @IsString()
    readonly deviceHash: string;

    @ApiProperty({ description: '维修单位' })
    @IsString()
    readonly fixCompany: string

    @ApiPropertyOptional({ description: '维修人' })
    @IsString()
    @IsOptional()
    readonly fixName: string;

    @ApiPropertyOptional({ description: '联系方式' })
    @IsString()
    @IsOptional()
    readonly fixMobile: string;

    @ApiPropertyOptional({ description: '维修时间' })
    @IsDate()
    @IsOptional()
    readonly fixTime: Date;

}