import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BaseDto {

    @ApiPropertyOptional()
    @IsString()
    readonly hash: string;

    @ApiProperty()
    @IsString()
    readonly enterpriseDid: string;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiPropertyOptional()
    @IsString()
    readonly address: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly location: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly centre: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly area: string;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    readonly altitude: number;

    @ApiProperty()
    @IsString()
    readonly ownerDid: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly ownerName: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly baseAddress: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly contact: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly phone: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly identityCard: string;

}



