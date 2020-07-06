import { IsString, IsDate, IsNumber, IsObject, IsIn, IsHash, IsOptional, ValidateNested } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CropDto {
    @ApiPropertyOptional({ example: 'c8a27edfeaf934b469eb14a8bcc5a9d23f38d0a5' })
    @IsString()
    hash: string

    @ApiProperty({ description: '大棚HASH' })
    @IsString()
    readonly greenhouseHash: string;

    @ApiProperty({ description: '大棚名称' })
    @IsString()
    readonly greenhouseName: string;

    @ApiProperty({ description: '作物名称' })
    @IsString()
    readonly plantName: string;

    @ApiProperty({ description: '作物did' })
    @IsString()
    readonly plantDid: string;

    @ApiProperty({ description: '计划HASH' })
    @IsString()
    readonly planHash: string;

    @ApiProperty({ description: '农民名字' })
    @IsString()
    readonly producerName: string;

    @ApiProperty({ description: '农民HASH' })
    @IsString()
    readonly producerHash: string;

    @ApiProperty({ description: '农民电话' })
    @IsString()
    readonly producerPhone: string;

    @ApiProperty({ description: '农民表现：UNDERESTIMATED未评价， PERFECT优，GOOD良好，FAILED差' })
    @IsString()
    @IsIn(['UNDERESTIMATED', 'PERFECT', 'GOOD', 'FAILED'])
    readonly status: string

    //@ValidateNested({ each: true })
    //@IsNotEmpty()
    @ValidateNested({ each: true })
    @ApiProperty({ description: '农资' })
    readonly tool: Array<ToolsDto>;

    @ApiProperty({ description: '流量' })
    @IsString()
    readonly traffic: string;

    @ApiProperty({ description: '开始灌溉时间' })
    @IsDate()
    readonly startTime: Date;

    @ApiProperty({ description: '结束灌溉时间' })
    @IsDate()
    readonly endTime: Date;

    @ApiProperty({ description: '农事时间' })
    @IsDate()
    readonly cropTime: Date;

    @ApiProperty({ description: '水量' })
    @IsString()
    readonly waterAmount: string;

    @ApiPropertyOptional({ description: '视频路径' })
    @IsString()
    @IsOptional()
    readonly videoUrl: string;

    @ApiPropertyOptional({ description: '图片路径' })
    @IsString()
    @IsOptional()
    readonly picUrl: string;

    @ApiProperty({ description: '备注' })
    @IsString()
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