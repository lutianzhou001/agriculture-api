import { IsString, IsIn, IsNumber, IsDate, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GreenhouseDto {

    @ApiProperty()
    @IsString()
    readonly id: string

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly model: string

    @ApiProperty()
    @IsString()

    @ApiProperty()
    @IsString()
    readonly centre: string;

    @ApiProperty()
    @IsString()
    readonly area: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([1, 2])
    readonly type: number;
}

export class LandDto {

    @ApiProperty()
    @IsString()
    readonly DID: string;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly location: string;

    @ApiProperty()
    @IsString()
    readonly waringWaterLevel: string;

    @ApiProperty()
    @IsObject()
    readonly greenhouse: GreenhouseDto[];

    @ApiProperty()
    @IsDate()
    readonly ctime: Date;

}



