import { IsString, IsIn, IsNumber, IsDate, IsOptional } from 'class-validator';
import { ApiProperty, ApiOperation, ApiPayloadTooLargeResponse, ApiPropertyOptional } from '@nestjs/swagger';

export class PlanDto {

    @ApiPropertyOptional({ example: '2b40bc0f62c65fb81a46c2f45b8188cce0cba3f7' })
    @IsString()
    @IsOptional()
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

    @ApiPropertyOptional({ description: '种子数量' })
    @IsNumber()
    @IsOptional()
    readonly seedsNumber: number;

    @ApiProperty({ description: '种植数量' })
    @IsNumber()
    readonly amount: number;

    @ApiProperty({ description: '种植面积（亩）' })
    @IsNumber()
    readonly area: number;

    @ApiProperty({ description: '任务(计划)名称' })
    @IsString()
    readonly name: string;

    @ApiPropertyOptional({ description: '任务(计划)简介' })
    @IsString()
    @IsOptional()
    readonly description: string;

    @ApiPropertyOptional({ description: '预计产量' })
    @IsString()
    @IsOptional()
    readonly productionExpection: string;

    @ApiPropertyOptional({ description: '预计采收时间' })
    @IsDate()
    @IsOptional()
    readonly harvestTime: Date;

    @ApiProperty({
        description: '种植周期', example: {
            "name": "种植周期名称1",
            "startTime": "2020-07-02T07:14:12.236Z",
            "endTime": "2020-07-02T07:14:12.236Z"
        }
    })
    readonly plantingCycles: Array<PlantingCycleDto>;

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
