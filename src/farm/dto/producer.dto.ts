import { IsString, IsIn, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProducerDto {

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly identityCard: string;

    @ApiProperty()
    @IsString()
    readonly position: string;

}
