import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { read } from 'fs';
import { exportDefaultDeclaration } from '@babel/types';

export class DeviceSwitchDto {

    @ApiProperty({ example: '25a88f5ee29af852345030df9ffc2544e7e2d048' })
    @IsString()
    hash: string;

    @ApiProperty({ description: '设备HASH' })
    @IsString()
    readonly deviceHash: string;

    @ApiPropertyOptional({ description: '大棚HASH' })
    @IsString()
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