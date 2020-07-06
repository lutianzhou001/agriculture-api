import { IsString, IsIn, IsNumber, IsDate, IsOptional } from 'class-validator';
import { ApiProperty, ApiOperation, ApiPayloadTooLargeResponse, ApiPropertyOptional } from '@nestjs/swagger';

export class PlanDto {

    @ApiPropertyOptional({ example: '2922b6a390b58f3b2266b4a2fb01d490aae1a880' })
    @IsString()
    hash: string;

    @ApiProperty({ description: '基地HASH' })
    @IsString()
    readonly baseHash: string;

    @ApiProperty({ description: '大棚HASH' })
    @IsString()
    readonly greenhouseHash: string;

    @ApiProperty({ description: '作物did' })
    @IsString()
    readonly plantDid: string;

    @ApiProperty({ description: '种植数量' })
    @IsString()
    readonly amount: number;

    @ApiProperty({ description: '种植面积（亩）' })
    @IsString()
    readonly area: number;

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
    @IsDate()
    @IsOptional()
    readonly harvestTime: Date;

    @ApiProperty({ description: '种植周期' })
    readonly plantingCycle: Array<PlantingCycleDto>;

    @ApiProperty({ description: '种植方式：HYDROPONICS水培， AEROPONICS气雾培，SANDCULTURE沙培，FIELD大田' })
    @IsString()
    @IsIn(['HYDROPONICS', 'AEROPONICS', 'SANDCULTURE', 'FIELD'])
    readonly plantingWay: string;

    // 这里苗圃就不做了
}


class PlantingCycleDto {
    @ApiProperty({ description: '种植周期名称' })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: '种植开始时间' })
    @IsDate()
    readonly startTime: Date;

    @ApiProperty({ description: '种植结束时间' })
    @IsDate()
    readonly endTime: Date;
}
