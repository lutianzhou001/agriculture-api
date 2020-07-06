import { IsString, IsDate, IsNumber, IsIn, IsArray, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiOperation } from '@nestjs/swagger';

export class PurchaseDto {

    @ApiPropertyOptional({ example: '8686bfaf5e568099054fdc4dae72e3bade2aa207' })
    @IsString()
    @IsOptional()
    hash: string

    @ApiProperty({ description: '基地hash' })
    @IsString()
    readonly baseHash: string;

    @ApiProperty({ description: '农资ID' })
    @IsString()
    readonly toolDid: string;

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
    @IsBoolean()
    @IsOptional()
    readonly isPaid: boolean;

    @ApiPropertyOptional({ description: '是否确认入库' })
    @IsBoolean()
    @IsOptional()
    readonly stored: boolean;

    @ApiPropertyOptional({ description: '执行标准' })
    @IsOptional()
    @IsString()
    readonly standard: string;

    @ApiPropertyOptional({ description: '农资店名称' })
    @IsOptional()
    @IsString()
    readonly agriculturalStoreName: string;

    @ApiPropertyOptional({ description: '供应商名称' })
    @IsOptional()
    @IsString()
    readonly supplierName: string;

    @ApiPropertyOptional({ description: '采购时间' })
    @IsDate()
    @IsOptional()
    readonly purchaseTime: Date;

    @ApiPropertyOptional({ description: '图片路径' })
    @IsString()
    @IsOptional()
    readonly picUrls: string[];
}


