import { IsString, IsDate, IsNumber, IsObject } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PatrolDto {

    @ApiPropertyOptional()
    @IsString()
    hash: string;

    @ApiProperty({ description: '农民HASH' })
    @IsString()
    readonly producerHash: string;

    @ApiProperty({ description: '农民名字' })
    @IsString()
    readonly producerName: string;

    @ApiProperty({ description: '描述' })
    @IsString()
    readonly description: string;

    @ApiProperty({ description: '农事HASH' })
    @IsString()
    readonly farmHash: string;

    @ApiProperty({ description: '农资HASH' })
    @IsString()
    readonly rentHash: string;

    @ApiProperty({ description: '计划HASH' })
    @IsString()
    readonly planHash: string;

}





