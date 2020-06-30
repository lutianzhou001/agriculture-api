import { IsString, IsDate, IsNumber, IsObject, IsIn, IsHash, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';



export class CropFarmingFarmingGreenhouse {

    @ApiProperty()
    @IsString()
    readonly greenhouseId: string;

    @ApiProperty()
    @IsString()
    readonly plantDID: string;

    @ApiProperty()
    @IsString()
    readonly workId: string;

    @ApiProperty()
    @IsString()
    readonly greenhouseName: string;

    @ApiProperty()
    @IsString()
    readonly plantName: string;
}

export class CropFarmingFarmingFarmer {

    @ApiProperty()
    @IsString()
    readonly farmerId: string;

    @ApiProperty()
    @IsString()
    readonly nickname: string;

    @ApiProperty()
    @IsString()
    readonly phone: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([0, 1, 2, 3])
    readonly status: number

}

export class CropFarmingFarmingFile {
    @ApiProperty()
    @IsNumber()
    readonly fileId: number;
}

export class CropFarmingFarming {
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly hash: string

    @ApiProperty()
    @IsString()
    readonly farmingName: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([1, 2])
    readonly status: number;

    @ApiPropertyOptional()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly cropFarmingFarmingGreenhouse: CropFarmingFarmingGreenhouse;

    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly cropFarmingFarmingFarmer: CropFarmingFarmingFarmer;

    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly cropFarmingFarmingFile: CropFarmingFarmingFile;
}



export class CropFarmingOtherGreenhouse {
    @ApiProperty()
    @IsString()
    readonly greenhouseId: string;

    @ApiProperty()
    @IsString()
    readonly plantDID: string;

    @ApiProperty()
    @IsString()
    readonly workId: string;

    @ApiProperty()
    @IsString()
    readonly greenhouseName: string;

    @ApiProperty()
    @IsString()
    readonly plantName: string;


}
export class CropFarmingOtherFile {
    @ApiProperty()
    @IsNumber()
    readonly fileId: number;

}

export class CropFarmingOther {
    @ApiProperty()
    @IsString()
    readonly hash: string;

    @ApiProperty()
    @IsNumber()
    readonly cropFarmingId: number;

    @ApiProperty()
    @IsString()
    readonly content: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([0, 1, 2])
    readonly status: number;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsObject()
    readonly cropFarmingOtherGreenhouse: CropFarmingFarmingGreenhouse;

    @ApiProperty()
    @IsObject()
    readonly cropFarmingOtherFile: CropFarmingOtherFile;

}



export class CropFarmingToolGreenhouse {
    @ApiProperty()
    @IsString()
    readonly greenhouseId: string;

    @ApiProperty()
    @IsString()
    readonly plantDID: string;

    @ApiProperty()
    @IsString()
    readonly workId: string;

    @ApiProperty()
    @IsString()
    readonly greenhouseName: string;

    @ApiProperty()
    @IsString()
    readonly plantName: string;

}
export class CropFarmingToolTool {
    @ApiProperty()
    @IsString()
    readonly toolName: string;

    @ApiProperty()
    @IsString()
    readonly toolAmount: string;

}
export class CropFarmingToolFile {
    @ApiProperty()
    @IsNumber()
    readonly fileId: number;

}

export class CropFarmingTool {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    readonly hash: string;

    @ApiProperty()
    @IsNumber()
    readonly cropFarmingId: number;

    @ApiProperty()
    @IsNumber()
    @IsIn([0, 1, 2])
    readonly status: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    readonly cropFarmingToolGreenhouse: CropFarmingToolGreenhouse;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    readonly cropFarmingToolTool: CropFarmingToolTool;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    readonly cropFarmingToolFile: CropFarmingToolFile;
}



export class CropFarmingWaterGreenhouse {
    @ApiProperty()
    @IsString()
    readonly greenhouseId: string;

    @ApiProperty()
    @IsString()
    readonly plantDID: string;

    @ApiProperty()
    @IsString()
    readonly workId: string;

    @ApiProperty()
    @IsString()
    readonly greenhouseName: string;

    @ApiProperty()
    @IsString()
    readonly plantName: string;

}
export class CropFarmingWaterFile {
    @ApiProperty()
    @IsNumber()
    readonly fileId: number;
}

export class CropFarmingWater {
    @ApiProperty()
    @IsString()
    readonly hash: string;

    @ApiProperty()
    @IsNumber()
    readonly cropFarmingId: number

    @ApiProperty()
    @IsString()
    readonly traffic: string;

    @ApiProperty()
    @IsDate()
    readonly startTime: Date;

    @ApiProperty()
    @IsDate()
    readonly endTime: Date;

    @ApiProperty()
    @IsString()
    readonly waterAmount: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([0, 1, 2])
    readonly status: Number;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsObject()
    readonly cropFarmingWaterGreenhouse: CropFarmingWaterGreenhouse;

    @ApiProperty()
    @IsObject()
    readonly cropFarmingWaterFile: CropFarmingWaterFile;

}



export class CropFarmingDto {
    @ApiProperty()
    @IsString()
    readonly hash: string;

    @ApiProperty()
    @IsObject()
    readonly cropFarmingOther: CropFarmingOther;

    @ApiProperty()
    @IsObject()
    readonly cropFarmingFaming: CropFarmingFarming;

    @ApiProperty()
    @IsObject()
    readonly cropFarmingGreenhouse: CropFarmingFarmingGreenhouse;

    @ApiProperty()
    @IsObject()
    readonly cropFarmingWater: CropFarmingWater;

}
