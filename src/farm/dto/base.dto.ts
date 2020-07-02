import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BaseDto {

    @ApiPropertyOptional({ example: '13620d9221eddc951b455a719462a54e3de474d1' })
    @IsString()
    hash: string;

    @ApiProperty({ description: '基地名称' })
    @IsString()
    readonly name: string;

    @ApiPropertyOptional({ description: '基地中心数据' })
    @IsString()
    @IsOptional()
    readonly location: string;

    @ApiPropertyOptional({ description: '基地中心点' })
    @IsString()
    @IsOptional()
    readonly centre: string;

    @ApiPropertyOptional({ description: '面积/亩数' })
    @IsString()
    @IsOptional()
    readonly area: string;

    @ApiPropertyOptional({ description: '海拔' })
    @IsNumber()
    @IsOptional()
    readonly altitude: number;

    @ApiPropertyOptional({ description: '主体did' })
    @IsString()
    readonly ownerDid: string;

    @ApiProperty({ description: '主体地址' })
    @IsString()
    readonly ownerAddress: string

    @ApiPropertyOptional({ description: '主体名称' })
    @IsString()
    @IsOptional()
    readonly ownerName: string;

    @ApiPropertyOptional({ description: '基地地址' })
    @IsString()
    @IsOptional()
    readonly baseAddress: string;

    @ApiPropertyOptional({ description: '联系人' })
    @IsString()
    @IsOptional()
    readonly contact: string;

    @ApiPropertyOptional({ description: '联系电话' })
    @IsString()
    @IsOptional()
    readonly phone: string;

    @ApiPropertyOptional({ description: '身份证' })
    @IsString()
    @IsOptional()
    readonly identityCard: string;

}



