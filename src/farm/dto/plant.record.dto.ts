import { IsString, IsIn, IsNumber, IsDate, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiOperation, ApiPayloadTooLargeResponse, ApiPropertyOptional } from '@nestjs/swagger';

export class PlantRecordDto {

    @ApiPropertyOptional({ description: '作物仓库记录HASH', example: 'bcf7cce4c942a172f51f956cbfcdf7a78e8b4831' })
    @IsString()
    @IsOptional()
    hash: string;

    @ApiProperty({ description: '作物did' })
    @IsString()
    readonly plantDid: string;

    @ApiProperty({ description: '基地HASH' })
    @IsString()
    readonly baseHash: string;

    @ApiPropertyOptional({ description: '大棚HASH' })
    @IsString()
    @IsOptional()
    readonly greenhouseHash: string;

    @ApiPropertyOptional({ description: '种植计划HASH' })
    @IsString()
    @IsOptional()
    readonly planHash: string;

    @ApiPropertyOptional({ description: '农民HASH' })
    @IsString()
    @IsOptional()
    readonly producerHash: string;

    @ApiPropertyOptional({ description: '农民名字' })
    @IsString()
    @IsOptional()
    readonly producerName: string;

    @ApiProperty({ description: '记录类型：INSTORAGE入库，OUTBOUND出库，FRMLOSS报损' })
    @IsString()
    @IsIn(['INSTORAGE', 'OUTBOUND', 'FRMLOSS'])
    readonly recordType: string

    @ApiPropertyOptional({ description: '批次' })
    @IsNumber()
    @IsOptional()
    readonly batchNum: number;

    @ApiPropertyOptional({ description: '出库方向' })
    @IsString()
    @IsOptional()
    readonly outDirection: string;

    @ApiPropertyOptional({ description: '配送车辆（运输信息）' })
    @IsString()
    @IsOptional()
    readonly logisticsInfo: string;

    @ApiPropertyOptional({ description: '联系人' })
    @IsString()
    @IsOptional()
    readonly linkPeople: string;

    @ApiPropertyOptional({ description: '联系电话' })
    @IsString()
    @IsOptional()
    readonly linkMobile: string;

    @ApiProperty({ description: '变更后的值' })
    @IsString()
    readonly allNumber: string;

    @ApiProperty({ description: '数量（出库入库报损数量）' })
    @IsString()
    readonly number: string;

    @ApiPropertyOptional({ description: '单价' })
    @IsString()
    @IsOptional()
    readonly price: string;

    @ApiPropertyOptional({ description: '物流单号' })
    @IsString()
    @IsOptional()
    readonly oddNumber: string;

    @ApiPropertyOptional({ description: '包装材料' })
    @IsString()
    @IsOptional()
    readonly wrapper: string;

    @ApiPropertyOptional({ description: '操作人/制单人' })
    @IsString()
    @IsOptional()
    readonly operator: string;

    @ApiPropertyOptional({ description: '报损原因' })
    @IsString()
    @IsOptional()
    readonly reportLoss: string;

    @ApiProperty({ description: '插入时间' })
    @IsDate()
    readonly inputTime: Date;

    @ApiPropertyOptional({ description: '出库地址' })
    @IsString()
    @IsOptional()
    readonly outAddress: string;

    @ApiPropertyOptional({ description: '是否自提' })
    @IsBoolean()
    @IsOptional()
    readonly isZt: boolean;

    @ApiPropertyOptional({ description: '销售人' })
    @IsString()
    @IsOptional()
    readonly sellUser: string;
}