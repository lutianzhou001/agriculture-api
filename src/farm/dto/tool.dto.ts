import { IsString, IsIn, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ToolDto {

    @ApiProperty()
    @IsString()
    readonly did: string;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly spec: string;

    @ApiProperty()
    @IsString()
    @IsIn(['SEEDS', 'PESTICIDE', 'FERTILIZER', 'OTHER'])
    readonly type: string;

    @ApiProperty()
    @IsString()
    readonly standard: string;

    @ApiProperty()
    @IsDate()
    readonly ctime: Date;

}



