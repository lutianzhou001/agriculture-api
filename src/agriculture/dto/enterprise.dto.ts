import { IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EnterpriseDto {

    @ApiProperty()
    @IsString()
    readonly DID: string;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly creaditCode: string;

    @ApiProperty()
    @IsString()
    readonly address: string;

    @ApiProperty()
    @IsString()
    readonly owner: string;

    @ApiProperty()
    @IsString()
    readonly ownerId: string;

    @ApiProperty()
    @IsString()
    readonly contact: string;

    @ApiProperty()
    @IsString()
    readonly phone: string;

    @ApiProperty()
    @IsDate()
    readonly ctime: Date;
}



