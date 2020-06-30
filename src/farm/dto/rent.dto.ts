import { IsString, IsIn, IsNumber, IsDate, IsObject, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RentDto {

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly hash: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly user: string;

    @ApiPropertyOptional()
    @IsDate()
    @IsOptional()
    readonly userTime: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    readonly supplierName: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    readonly remark: string;

}


