import { IsString, IsIn, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { read } from 'fs';

export class PlantDto {

    @ApiProperty()
    @IsString()
    readonly did: string;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsNumber()
    readonly days: number;

    @ApiProperty()
    @IsDate()
    readonly ctime: Date;

}



