import { IsString, IsDate, IsNumber, IsIn, IsArray, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiOperation } from '@nestjs/swagger';

export class PurchaseDto {

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly hash: string

    @ApiProperty()
    @IsString()
    readonly toolDid: string;

    @ApiProperty()
    @IsString()
    @IsIn(['STORE', 'USE', 'RETURN', 'LOSS', 'PURCHASE'])
    readonly recordType: string;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    @IsIn(['READY', 'MONTHLY', 'OTHER'])
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
    @IsString()
    @IsOptional()
    @IsIn(['PAID', 'UNPAID'])
    readonly isPaid: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    @IsIn(['STORED', 'UNSTORED'])
    readonly stored: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    readonly standard: string;

}


