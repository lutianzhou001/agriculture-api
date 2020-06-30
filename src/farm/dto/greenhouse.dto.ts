import { IsString, IsDate, IsIn, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class greenhouseDto {

    @ApiProperty()
    @IsString()
    readonly hash: string

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly model: string

    @ApiProperty()
    @IsString()
    readonly location: string

    @ApiProperty()
    @IsString()
    readonly centre: string;

    @ApiProperty()
    @IsNumber()
    readonly area: number;

    @ApiProperty()
    @IsString()
    @IsIn(['GREENHOUSE', 'FIELD'])
    readonly type: string;

}




