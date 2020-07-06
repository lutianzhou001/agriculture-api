import { IsString, IsDate, IsNumber, IsObject, IsIn, IsHash, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CropDto {
    @ApiPropertyOptional({ example: 'ffb3aeea8421fbc92a64f116307d5411ca074394' })
    @IsString()
    @IsOptional()
    hash: string

    @ApiProperty({ description: '大棚HASH' })
    @IsString()
    readonly greenhouseHash: string;

    @ApiPropertyOptional({ description: '大棚名称' })
    @IsString()
    @IsOptional()
    readonly greenhouseName: string;

    @ApiPropertyOptional({ description: '作物名称' })
    @IsString()
    @IsOptional()
    readonly plantName: string;

    @ApiProperty({ description: '作物did' })
    @IsString()
    readonly plantDid: string;

    @ApiProperty({ description: '计划HASH' })
    @IsString()
    readonly planHash: string;

    @ApiPropertyOptional({ description: '农民名字' })
    @IsString()
    @IsOptional()
    readonly producerName: string;

    @ApiProperty({ description: '农民HASH' })
    @IsString()
    readonly producerHash: string;

    @ApiPropertyOptional({ description: '农民电话' })
    @IsString()
    @IsOptional()
    readonly producerPhone: string;

    @ApiProperty({ description: '农民表现：UNDERESTIMATED未评价， PERFECT优，GOOD良好，FAILED差' })
    @IsString()
    @IsIn(['UNDERESTIMATED', 'PERFECT', 'GOOD', 'FAILED'])
    readonly status: string

    //@ValidateNested({ each: true })
    //@IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @ApiProperty({
        description: '农资', example: {
            "toolDid": "string2",
            "toolName": "string2",
            "toolAmount": 2
        }
    })
    readonly tools: Array<ToolsDto>;

    @ApiPropertyOptional({ description: '流量' })
    @IsString()
    @IsOptional()
    readonly traffic: string;

    @ApiPropertyOptional({ description: '开始灌溉时间' })
    @IsDate()
    @IsOptional()
    readonly startTime: Date;

    @ApiPropertyOptional({ description: '结束灌溉时间' })
    @IsDate()
    @IsOptional()
    readonly endTime: Date;

    @ApiPropertyOptional({ description: '农事时间' })
    @IsDate()
    @IsOptional()
    readonly cropTime: Date;

    @ApiPropertyOptional({ description: '水量' })
    @IsString()
    readonly waterAmount: string;

    @ApiPropertyOptional({ description: '视频路径' })
    @IsArray()
    @IsOptional()
    readonly videoUrls: string[];

    @ApiPropertyOptional({ description: '图片路径' })
    @IsArray()
    @IsOptional()
    readonly picUrls: string[];

    @ApiPropertyOptional({ description: '备注' })
    @IsString()
    @IsOptional()
    readonly remark: string;
}

export class ToolsDto {
    @ApiProperty({ description: '农资did' })
    @IsString()
    readonly toolDid: string;

    @ApiProperty({ description: '农资名称' })
    @IsString()
    readonly toolName: string;

    @ApiProperty({ description: '农资数量' })
    @IsNumber()
    readonly toolAmount: number;
}