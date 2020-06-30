import { IsString, IsDate, IsNumber, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';



export class GreenhouseFarmingGreenhouseDto {

    @ApiProperty()
    @IsString()
    readonly DID: string;

    @ApiProperty()
    @IsString()
    readonly name: string;

}

export class GreenhouseFarmingPlantDto {
    @ApiProperty()
    @IsString()
    readonly DID: string;

    @ApiProperty()
    @IsNumber()
    readonly Id: number
}

export class GreenhouseFarmingDto {

    @ApiProperty()
    @IsString()
    readonly farmer: string;

    @ApiProperty()
    @IsDate()
    readonly ctime: Date;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsObject()
    readonly relation: { greenhouseFarmingGreenhouseDto: GreenhouseFarmingGreenhouseDto[], greenhouseFarmingPlantDto: GreenhouseFarmingPlantDto[] };

}





