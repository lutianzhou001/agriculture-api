import { IsString, IsDate, IsNumber, IsObject } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';



export class PatrolDto {

    @ApiProperty()
    @IsString()
    readonly: string;

    @ApiProperty()
    @IsString()
    readonly producerHash: string;

    @ApiProperty()
    @IsString()
    readonly producerName: string;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsString()
    readonly farmHash: string;

    @ApiProperty()
    @IsString()
    readonly rentHash: string;

    @ApiProperty()
    @IsString()
    readonly planHash: string;

}





