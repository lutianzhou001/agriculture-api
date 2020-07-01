import { IsString, IsIn, IsNumber, IsDate, IsOptional } from 'class-validator';
import { ApiProperty, ApiOperation, ApiPayloadTooLargeResponse, ApiPropertyOptional } from '@nestjs/swagger';

export class PlanDto {

    @ApiPropertyOptional({ description: '计划HASH' })
    @IsString()
    readonly hash: string;

    @ApiProperty({ description: '基地HASH' })
    @IsString()
    readonly baseHash: string;

    @ApiProperty({ description: '地块did' })
    @IsString()
    readonly landDid: string;

    @ApiProperty({ description: '大棚HASH' })
    @IsString()
    readonly greenhouseHash: string;

    @ApiProperty({ description: '作物did' })
    @IsString()
    readonly plantDid: string;

    @ApiPropertyOptional({ description: '任务周期id' })
    @IsNumber()
    @IsOptional()
    readonly workGrowthId: string;

    @ApiProperty({ description: '任务名称' })
    @IsString()
    readonly workName: string;

    @ApiPropertyOptional({ description: '任务简介' })
    @IsString()
    @IsOptional()
    readonly workDescription: string;

    @ApiPropertyOptional({ description: '预计产量' })
    @IsString()
    @IsOptional()
    readonly productionExpection: string;

    @ApiPropertyOptional({ description: '预计采收时间' })
    @IsString()
    @IsOptional()
    readonly harvestTime: string;

    @ApiProperty({ description: '种植开始时间' })
    @IsDate()
    readonly startTime: Date;

    @ApiProperty({ description: '种植结束时间' })
    @IsDate()
    readonly endTime: Date

    // 这里苗圃就不做了
}



