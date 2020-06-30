import { IsString, IsDate, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class HashDto {

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly hash: string;
}


