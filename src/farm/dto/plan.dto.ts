import { IsString, IsIn, IsNumber, IsDate, IsOptional } from 'class-validator';
import { ApiProperty, ApiOperation, ApiPayloadTooLargeResponse, ApiPropertyOptional } from '@nestjs/swagger';

export class PlanDto {

    @ApiProperty()
    @IsString()
    readonly hash: string;

    @ApiProperty()
    @IsString()
    readonly baseHash: string;

    @ApiProperty()
    @IsString()
    readonly landDid: string;

    @ApiProperty()
    @IsString()
    readonly greenhouseHash: string;

    @ApiProperty()
    @IsString()
    readonly plantDid: string;

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

    // 这里苗圃就不做了
}



