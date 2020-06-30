import { IsString, IsDate, IsNumber, IsObject, IsIn, IsHash, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CropDto {
    @ApiPropertyOptional()
    @IsString()
    readonly hash: string

    @ApiProperty()
    @IsString()
    readonly greenhouseHash: string;

    @ApiProperty()
    @IsString()
    readonly greenhouseName: string;

    @ApiProperty()
    @IsString()
    readonly plantName: string;

    @ApiProperty()
    @IsString()
    readonly plantDid: string;

    @ApiProperty()
    @IsString()
    readonly workHash: string;

    @ApiProperty()
    @IsString()
    readonly producerName: string;

    @ApiProperty()
    @IsString()
    readonly producerHash: string;

    @ApiProperty()
    @IsString()
    readonly producerPhone: string;

    @ApiProperty()
    @IsString()
    @IsIn(['UNDERESTIMATED', 'PERFECT', 'GOOD', 'FAILED'])
    readonly status: string

    @ApiProperty()
    @IsString()
    readonly toolDid: string;

    @ApiProperty()
    @IsString()
    readonly toolName: string;

    @ApiProperty()
    @IsNumber()
    readonly toolAmount: number;

    @ApiProperty()
    @IsString()
    readonly traffic: string;

    @ApiProperty()
    @IsDate()
    readonly startTime: Date;

    @ApiProperty()
    @IsDate()
    readonly endTime: Date;

    @ApiProperty()
    @IsString()
    readonly waterAmount: string;

    @ApiProperty()
    @IsString()
    @IsIn(['UNFINISHED', 'COMPLETED'])
    readonly waterStatus: string;

}

