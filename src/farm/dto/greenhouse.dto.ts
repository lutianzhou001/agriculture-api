import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GreenhouseDto {

    @ApiPropertyOptional({ example: '0xc33b2F902E4700CBb53Ad9A86699c704D5CdCe25' })
    @IsString()
    hash: string;

    @ApiProperty({ description: '基地hash', example: 'b28605c3d25fb3ccab1f66edbe7469b6ed3dceb7' })
    @IsString()
    baseHash: string;

    @ApiProperty({ description: '大棚名称', example: '3#棚' })
    @IsString()
    readonly name: string;

    @ApiPropertyOptional({ description: '大棚型号' })
    @IsString()
    @IsOptional()
    readonly type: string;

    @ApiPropertyOptional({ description: '大棚空间数据' })
    @IsString()
    @IsOptional()
    readonly location: string;

    @ApiPropertyOptional({ description: '大棚中心点', example: '121.14854 30.76225' })
    @IsString()
    readonly centre: string;

    @ApiPropertyOptional({ description: '大棚面积（亩）', example: 3 })
    @IsNumber()
    @IsOptional()
    readonly area: number;

    @ApiProperty({ description: '插入时间', example: '2019/3/15 14:47' })
    @IsDate()
    readonly ctime: Date;

}




