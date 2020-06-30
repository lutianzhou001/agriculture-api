import { IsString, IsIn, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { read } from 'fs';

export class ToolDto {

    @ApiProperty()
    @IsString()
    readonly DID: string;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly spec: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([1, 2, 3, 4, 5])
    readonly type: number;

    @ApiProperty()
    @IsString()
    readonly standard: string;

    @ApiProperty()
    @IsDate()
    readonly ctime: Date;

}



