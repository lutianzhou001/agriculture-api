import { IsString, IsIn, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ToolDto {

    @ApiProperty({ description: '农资did' })
    @IsString()
    readonly did: string;

    @ApiProperty({ description: '农资名称' })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: '规格' })
    @IsString()
    readonly spec: string;

    @ApiProperty({ description: '单位' })
    @IsString()
    readonly unit: string;

    @ApiProperty({ description: '农资类型' })
    @IsString()
    @IsIn(['SEEDS', 'PESTICIDE', 'FERTILIZER', 'OTHER'])
    readonly type: string;

    @ApiProperty({ description: '执行标准' })
    @IsString()
    readonly standard: string;

    @ApiProperty({ description: '创建时间' })
    @IsDate()
    readonly ctime: Date;

}



