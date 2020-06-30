import { IsString, IsDate, IsNumber, IsIn, IsArray, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiOperation } from '@nestjs/swagger';

export class PurchaseDto {

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly hash: string

    @ApiProperty()
    @IsString()
    readonly baseDID: string;

    @ApiProperty()
    @IsString()
    readonly toolDID: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([1, 2, 3, 4, 5])
    readonly recordType: number;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    @IsIn([1, 2, 3])
    readonly payType: number;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    readonly price: number;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    readonly amount: number;

    @ApiPropertyOptional()
    @IsNumber()
    @IsIn([0, 1])
    @IsOptional()
    readonly isPaid: number;

    @ApiPropertyOptional()
    @IsNumber()
    @IsIn([0, 1])
    @IsOptional()
    readonly isIn: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    readonly standard: string;

}


