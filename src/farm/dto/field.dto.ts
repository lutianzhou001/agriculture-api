import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FieldDto {

    @ApiPropertyOptional({ example: 'ee2c846ff06ea05751dfc8eb118953790a871cda' })
    @IsString()
    hash: string

    @ApiProperty({ description: '基地hash', example: '13620d9221eddc951b455a719462a54e3de474d1' })
    @IsString()
    baseHash: string

    @ApiProperty({ description: '田的名称', example: '1#田' })
    @IsString()
    readonly fieldName: string;

    @ApiPropertyOptional({ description: '田的型号' })
    @IsString()
    @IsOptional()
    readonly fieldModel: string

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




