import { IsString, IsDate, IsNumber, IsIn, IsArray, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiOperation } from '@nestjs/swagger';

export class PurchaseDto {

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    hash: string

    @ApiProperty({ description: '企业did' })
    @IsString()
    readonly enterpriseDid: string;

    @ApiProperty({ description: '农资ID' })
    @IsString()
    readonly toolDid: string;

    @ApiPropertyOptional({ description: '农资供应商ID' })
    @IsString()
    readonly supplierId: string;

    @ApiProperty({ description: '记录类型  入库STORE 领用USE RETURN归还 LOSS报损 PURCHASE采购' })
    @IsString()
    @IsIn(['STORE', 'USE', 'RETURN', 'LOSS', 'PURCHASE'])
    readonly recordType: string;

    @ApiPropertyOptional({ description: '购买方式 READY现结 MONTHLY月结 OTHER其他' })
    @IsNumber()
    @IsOptional()
    @IsIn(['READY', 'MONTHLY', 'OTHER'])
    readonly payType: number;

    @ApiPropertyOptional({ description: '价格' })
    @IsNumber()
    @IsOptional()
    readonly price: number;

    @ApiPropertyOptional({ description: '数量' })
    @IsNumber()
    @IsOptional()
    readonly amount: number;

    @ApiPropertyOptional({ description: '是否付款' })
    @IsString()
    @IsOptional()
    @IsIn(['PAID', 'UNPAID'])
    readonly isPaid: string;

    @ApiPropertyOptional({ description: '是否确认入库' })
    @IsString()
    @IsOptional()
    @IsIn(['STORED', 'UNSTORED'])
    readonly stored: string;

    @ApiPropertyOptional({ description: '执行标准' })
    @IsOptional()
    @IsString()
    readonly standard: string;

    @ApiPropertyOptional({ description: '供应商名称' })
    @IsOptional()
    @IsString()
    readonly supplierName: string;

}


