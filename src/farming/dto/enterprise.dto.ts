import { IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PlantDto } from './plant.dto';

export class EnterpriseDto {

    @ApiProperty({ description: '企业did' })
    @IsString()
    readonly did: string;

    @ApiProperty({ description: '企业名称' })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: '企业信用代码' })
    @IsString()
    readonly creaditCode: string;

    @ApiProperty({ description: '企业地址' })
    @IsString()
    readonly address: string;

    @ApiProperty({ description: '法人' })
    @IsString()
    readonly owner: string;

    @ApiProperty({ description: '法人身份证号' })
    @IsString()
    readonly ownerId: string;

    @ApiProperty({ description: '联系人' })
    @IsString()
    readonly contact: string;

    @ApiProperty({ description: '联系电话' })
    @IsString()
    readonly phone: string;

    @ApiProperty({ description: '插入时间' })
    @IsDate()
    readonly ctime: Date;

    @ApiProperty({ description: '基地地址' })
    @IsString()
    readonly baseAddress: string;

    @ApiProperty({ description: '种植面积' })
    @IsString()
    readonly plantingArea: string;

    @ApiProperty({ description: '种植作物' })
    @IsString()
    readonly plants: PlantDto[];
}



