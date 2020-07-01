import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DeviceMonitorDto {

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly hash: string;

    @ApiProperty({ description: '设备HASH' })
    @IsString()
    readonly deviceHash: string;

    @ApiPropertyOptional({ description: '大棚HASH' })
    @IsString()
    readonly greenhousehash: string;

    @ApiProperty({ description: '温度' })
    @IsNumber()
    readonly temperture: number;

    @ApiProperty({ description: '湿度' })
    @IsNumber()
    readonly humidity: string;

    @ApiProperty({ description: '光照' })
    @IsNumber()
    readonly light: string;

    @ApiProperty({ description: '二氧化碳浓度' })
    @IsNumber()
    readonly co2: string;

    @ApiProperty({ description: '创建时间' })
    @IsDate()
    readonly ctime: string;

    @ApiPropertyOptional({ description: '检测值0' })
    @IsString()
    readonly value0: string;

    @ApiPropertyOptional({ description: '检测值1' })
    @IsString()
    readonly value1: string;

    @ApiPropertyOptional({ description: '检测值2' })
    @IsString()
    readonly value2: string;

    @ApiPropertyOptional({ description: '检测值3' })
    @IsString()
    readonly value3: string;

    @ApiPropertyOptional({ description: '检测值4' })
    @IsString()
    readonly value4: string;

    @ApiPropertyOptional({ description: '检测值5' })
    @IsString()
    readonly value5: string;

    @ApiPropertyOptional({ description: '检测值6' })
    @IsString()
    readonly value6: string;

    @ApiPropertyOptional({ description: '检测值7' })
    @IsString()
    readonly value7: string;

    @ApiPropertyOptional({ description: '检测值8' })
    @IsString()
    readonly value8: string;

    @ApiPropertyOptional({ description: '检测值9' })
    @IsString()
    readonly value9: string;


}