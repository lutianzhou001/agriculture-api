import { IsString, IsIn, IsNumber, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { read } from 'fs';

export class PlantDto {

    @ApiProperty({ description: '作物did' })
    @IsString()
    readonly did: string;

    @ApiPropertyOptional({ description: '基地hash' })
    @IsString()
    readonly hash: string;

    @ApiPropertyOptional({ description: '作物名称' })
    @IsString()
    readonly name: string;

    @ApiPropertyOptional({ description: '作物品种' })
    @IsString()
    readonly type: string;

    @ApiPropertyOptional({ description: '作物单位：最后入库应用单位' })
    @IsString()
    readonly unit: string;

    @ApiProperty({ description: '插入时间' })
    @IsDate()
    readonly ctime: Date;

    @ApiPropertyOptional({ description: '作物生长周期天数' })
    @IsNumber()
    readonly days: number;
}



