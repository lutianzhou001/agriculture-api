import { IsString, IsDate, IsIn, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RealtimeTxDto {

    @ApiPropertyOptional({ description: '最新块高', example: 78 })
    @IsNumber()
    blockNumber: number

    @ApiProperty({ description: '总节点数量', example: 4 })
    @IsNumber()
    nodeNumber: number

    @ApiProperty({ description: '正常节点数量', example: 4 })
    @IsNumber()
    normalNode: number;

    @ApiProperty({ description: '异常节点数量' })
    @IsNumber()
    abnormalNode: number

    @ApiProperty({ description: '总交易数量' })
    @IsNumber()
    transactionNumber: number
}




