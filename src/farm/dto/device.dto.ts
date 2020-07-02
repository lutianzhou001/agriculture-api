import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DeviceDto {

    @ApiPropertyOptional({ example: 'c0f48ade959b61f3a0668e641fa5adac6f1b23fb' })
    @IsString()
    hash: string

    @ApiProperty({ description: '设备编号' })
    @IsString()
    readonly deviceSN: string;

    @ApiProperty({ description: '设备名称' })
    @IsString()
    readonly deviceName: string

    @ApiPropertyOptional({ description: '设备描述' })
    @IsString()
    @IsOptional()
    readonly description: string;

    @ApiProperty({ description: '设备类型' })
    @IsNumber()
    readonly type: string;

    @ApiPropertyOptional({ description: '设备型号' })
    @IsString()
    @IsOptional()
    readonly deviceType: string;

    @ApiProperty({ description: '插入时间' })
    @IsDate()
    readonly ctime: Date;

    @ApiPropertyOptional({ description: '安装时间' })
    @IsString()
    @IsOptional()
    readonly installTime: Date;

    @ApiPropertyOptional({ description: '安装地址' })
    @IsString()
    @IsOptional()
    readonly installAddress: string;

    @ApiPropertyOptional({ description: '工厂' })
    @IsString()
    @IsOptional()
    readonly factory: string;

    @ApiPropertyOptional({ description: '基地hash' })
    @IsOptional()
    @IsString()
    readonly baseHash: string;

    @ApiPropertyOptional({ description: '大棚hash' })
    @IsOptional()
    @IsString()
    readonly greenhouseHash: string;

}