import { IsString, IsIn, IsNumber, IsDate, IsOptional, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { read } from 'fs';

export class PlantDto {

    @ApiProperty({ description: '作物did' })
    @IsString()
    readonly did: string;

    @ApiPropertyOptional({ description: '作物名称' })
    @IsString()
    @IsOptional()
    readonly name: string;

    @ApiPropertyOptional({ description: '作物品种' })
    @IsString()
    @IsOptional()
    readonly type: string;

    @ApiPropertyOptional({ description: '作物单位：最后入库应用单位' })
    @IsString()
    @IsOptional()
    readonly unit: string;

    @ApiProperty({ description: '插入时间' })
    @IsDate()
    readonly ctime: Date;

    @ApiPropertyOptional({ description: '作物生长周期天数' })
    @IsNumber()
    @IsOptional()
    readonly days: number;

    @ApiPropertyOptional({ description: '图片路径' })
    @IsArray()
    @IsOptional()
    readonly picUrls: string[];
}



