import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GreenhouseDto {

    @ApiPropertyOptional({ example: '0xc33b2F902E4700CBb53Ad9A86699c704D5CdCe25' })
    @IsString()
    hash: string

    @ApiProperty({ description: '基地hash', example: '54' })
    @IsString()
    baseHash: string

    @ApiProperty({ description: '大棚名称', example: '3#棚' })
    @IsString()
    readonly greenhouseName: string;

    @ApiPropertyOptional({ description: '大棚型号' })
    @IsString()
    @IsOptional()
    readonly greenhouseModel: string

    @ApiPropertyOptional({ description: '大棚空间数据' })
    @IsString()
    @IsOptional()
    readonly location: string

    @ApiPropertyOptional({ description: '大棚中心点', example: '121.14854 30.76225' })
    @IsString()
    readonly centre: string;

    @ApiPropertyOptional({ description: '大棚面积（亩）', example: 3 })
    @IsNumber()
    @IsOptional()
    readonly area: number;

    @ApiProperty({ description: '大棚类型，枚举["GREENHOUSE","FIELD"]' })
    @IsString()
    @IsIn(['GREENHOUSE', 'FIELD'])
    readonly type: string;

    @ApiProperty({ description: '插入时间', example: '3/15/19 14:47' })
    @IsDate()
    readonly ctime: Date

}




