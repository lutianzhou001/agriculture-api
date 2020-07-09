import { IsString, IsIn, IsNumber, IsDate, IsObject } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LandDto {

    @ApiProperty({ description: 'did标志' })
    @IsString()
    readonly did: string;

    @ApiPropertyOptional({ description: '地块名字' })
    @IsString()
    readonly name: string;

    @ApiPropertyOptional({ description: '空间信息' })
    @IsString()
    readonly location: string;

    @ApiPropertyOptional({ description: '警戒水位' })
    @IsString()
    readonly waringWaterLevel: string;

    @ApiPropertyOptional({ description: '面积' })
    @IsString()
    readonly area: string;
}



