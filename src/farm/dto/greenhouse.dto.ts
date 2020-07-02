import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GreenhouseDto {

    @ApiPropertyOptional({ default: 'ea092f15b204af21b2d950e25bdc601b9641148a' })
    @IsString()
    hash: string

    @ApiProperty({ description: '大棚名称' })
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

    @ApiPropertyOptional({ description: '大棚中心点' })
    @IsString()
    readonly centre: string;

    @ApiPropertyOptional({ description: '大棚面积（亩）' })
    @IsNumber()
    @IsOptional()
    readonly area: number;

    @ApiProperty({ description: '大棚类型，枚举["GREENHOUSE","FIELD"]' })
    @IsString()
    @IsIn(['GREENHOUSE', 'FIELD'])
    readonly type: string;

    @ApiProperty({ description: '插入时间' })
    @IsDate()
    readonly ctime: Date

}




