import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FieldDto {

    @ApiPropertyOptional({ example: 'd8868b2d7c1610ed6fc696a6e01019df2c45686b' })
    @IsString()
    hash: string

    @ApiProperty({ description: '基地hash', example: 'b28605c3d25fb3ccab1f66edbe7469b6ed3dceb7' })
    @IsString()
    baseHash: string

    @ApiProperty({ description: '田的名称', example: '1#田' })
    @IsString()
    readonly name: string;

    @ApiPropertyOptional({ description: '田的型号' })
    @IsString()
    @IsOptional()
    readonly type: string

    @ApiPropertyOptional({ description: '田的空间数据' })
    @IsString()
    @IsOptional()
    readonly location: string

    @ApiPropertyOptional({ description: '田的中心点', example: '121.14854 30.76225' })
    @IsString()
    readonly centre: string;

    @ApiPropertyOptional({ description: '田的面积（亩）', example: 3 })
    @IsNumber()
    @IsOptional()
    readonly area: number;

    @ApiProperty({ description: '插入时间', example: '2019/3/15 14:47' })
    @IsDate()
    readonly ctime: Date

}




