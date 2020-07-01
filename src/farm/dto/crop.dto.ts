import { IsString, IsDate, IsNumber, IsObject, IsIn, IsHash, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CropDto {
    @ApiPropertyOptional()
    @IsString()
    readonly hash: string

    @ApiProperty({ description: '大棚HASH' })
    @IsString()
    readonly greenhouseHash: string;

    @ApiProperty({ description: '大棚名称' })
    @IsString()
    readonly greenhouseName: string;

    @ApiProperty({ description: '作物名称' })
    @IsString()
    readonly plantName: string;

    @ApiProperty({ description: '作物did' })
    @IsString()
    readonly plantDid: string;

    @ApiProperty({ description: '工作HASH' })
    @IsString()
    readonly workHash: string;

    @ApiProperty({ description: '农民名字' })
    @IsString()
    readonly producerName: string;

    @ApiProperty({ description: '农民HASH' })
    @IsString()
    readonly producerHash: string;

    @ApiProperty({ description: '农民电话' })
    @IsString()
    readonly producerPhone: string;

    @ApiProperty({ description: '农民表现：UNDERESTIMATED未评价， PERFECT优，GOOD良好，FAILED差' })
    @IsString()
    @IsIn(['UNDERESTIMATED', 'PERFECT', 'GOOD', 'FAILED'])
    readonly status: string

    @ApiProperty({ description: '农资did' })
    @IsString()
    readonly toolDid: string;

    @ApiProperty({ description: '农资名称' })
    @IsString()
    readonly toolName: string;

    @ApiProperty({ description: '农资数量' })
    @IsNumber()
    readonly toolAmount: number;

    @ApiProperty({ description: '流量' })
    @IsString()
    readonly traffic: string;

    @ApiProperty({ description: '开始灌溉时间' })
    @IsDate()
    readonly startTime: Date;

    @ApiProperty({ description: '结束灌溉时间' })
    @IsDate()
    readonly endTime: Date;

    @ApiProperty({ description: '水量' })
    @IsString()
    readonly waterAmount: string;

    @ApiProperty({ description: '水量状态' })
    @IsString()
    @IsIn(['UNFINISHED', 'COMPLETED'])
    readonly waterStatus: string;

}

