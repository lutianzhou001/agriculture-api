import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { read } from 'fs';
import { exportDefaultDeclaration } from '@babel/types';

export class DeviceSwitchDto {

    @ApiProperty()
    @IsString()
    readonly hash: string;

    @ApiProperty({ description: '设备HASH' })
    @IsString()
    readonly deviceHash: string;

    @ApiPropertyOptional({ description: '大棚HASH' })
    @IsString() i
    readonly greenhousehash: string;

    @ApiProperty({ description: '开启时间' })
    @IsNumber()
    readonly startTime: number;

    @ApiPropertyOptional({ description: '结束时间' })
    @IsNumber()
    readonly endTime: number;

    @ApiPropertyOptional({ description: '开启时长' })
    @IsNumber()
    @IsOptional()
    readonly duration: number

}