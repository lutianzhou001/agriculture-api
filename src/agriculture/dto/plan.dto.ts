import { IsString, IsIn, IsNumber, IsDate, IsOptional } from 'class-validator';
import { ApiProperty, ApiOperation, ApiPayloadTooLargeResponse, ApiPropertyOptional } from '@nestjs/swagger';
import { read } from 'fs';
import { NumberTypeAnnotation } from '@babel/types';

export class PlanDto {

    @ApiProperty()
    @IsString()
    readonly hash: string;

    @ApiProperty()
    @IsString()
    readonly baseDID: string;

    @ApiProperty()
    @IsString()
    readonly landDID: string;

    @ApiProperty()
    @IsString()
    readonly greenhouseId: string;

    @ApiProperty()
    @IsString()
    readonly plantDID: string;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    readonly workGrowthId: string;

    @ApiProperty()
    @IsString()
    readonly workName: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly workDescription: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly productionExpection: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly harvestTime: string;

    @ApiProperty()
    @IsDate()
    readonly startTime: Date;

    @ApiProperty()
    @IsDate()
    readonly endTime: Date

    @ApiProperty()
    @IsNumber()
    @IsIn([1, 2])
    readonly workType: number;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    readonly nursery_Id: number;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly supplierName: string;

    @ApiPropertyOptional()
    @IsDate()
    @IsOptional()
    readonly purchaseTime: Date;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly purchaseMan: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly planner: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([1, 2])
    readonly status: number

    @ApiProperty()
    @IsDate()
    readonly plantStartTime: Date;

    @ApiProperty()
    @IsString()
    readonly greenhousesId: string;

    @ApiProperty()
    @IsNumber()
    readonly plantAmount: number;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    readonly workAmount: number;

}



