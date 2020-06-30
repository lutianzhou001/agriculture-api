

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { GreenhouseFarmingDto } from './dto/greenhousefarming.dto';
import { PurchaseDto } from './dto/puchase.dto';
import { PlanDto } from './dto/plan.dto';
import { LendDto } from './dto/lend.dto';
import { CropFarmingDto } from './dto/cropfarming.dto';
import { BaseDto } from './dto/base.dto';
import { LandDto } from './dto/land.dto';
import { ToolDto } from './dto/tool.dto';
import { EnterpriseDto } from './dto/enterprise.dto'
import { PlantDto } from './dto/plant.dto';

@Controller('agriculture')
export class AgricultureController {

    @Get('enterprises')
    @ApiOperation({ description: '获取所有企业信息' })
    async getEnterprises(): Promise<EnterpriseDto> {
        return new EnterpriseDto;
    }

    @Get('enterprises/:DID')
    @ApiOperation({ description: '获取某个企业信息' })
    async getEnterpriseByDID(@Param() params): Promise<EnterpriseDto> {
        return new EnterpriseDto;
    }

    @Get('lands')
    @ApiOperation({ description: '获取地块信息' })
    async getGreenhouses(): Promise<LandDto> {
        return new LandDto;;
    }

    @Get('lands/:DID')
    @ApiOperation({ description: '获取某个地块信息' })
    async getLandByDID(@Param() params): Promise<LandDto> {
        return new LandDto;
    }

    @Get('bases')
    @ApiOperation({ description: '获取所有基地信息' })
    async getBases(): Promise<BaseDto> {
        return new BaseDto;
    }

    @Get('bases/:DID')
    @ApiOperation({ description: '获取某个基地信息' })
    async getBaseByDID(@Param() params): Promise<BaseDto> {
        return new BaseDto;
    }


    @Get('plants')
    @ApiOperation({ description: '获取所有种植物信息' })
    async getPlants(): Promise<PlanDto> {
        return new PlanDto;
    }

    @Get('plants/:DID')
    @ApiOperation({ description: '获取某个种植物信息' })
    async getPlantByDID(@Param() params): Promise<PlantDto> {
        return new PlantDto;
    }


    @Get('tools')
    @ApiOperation({ description: '获取所有农资信息' })
    async getTools(): Promise<ToolDto> {
        return new ToolDto;
    }

    @Get('tools/:DID')
    @ApiOperation({ description: '获取某个农资信息' })
    async getToolByDID(@Param() params): Promise<ToolDto> {
        return new ToolDto;
    }

    @Post('farming/crop')
    @ApiOperation({ description: '作物农事' })
    async cropfarming(@Body() cropFarming: CropFarmingDto): Promise<any> {
        return 0;
    }

    @Post('farming/greenhouse')
    @ApiOperation({ description: '大棚农事' })
    async greenhousefarming(@Body() greenhouseFarmingDto: GreenhouseFarmingDto): Promise<any> {
        return 0;
    }

    @Post('tools/purchase')
    @ApiOperation({ description: '采购' })
    async purchase(@Body() purchaseDto: PurchaseDto): Promise<any> {
        return 0;
    }

    @Post('tools/lend')
    @ApiOperation({ description: '租赁' })
    async lend(@Body() LendDto: LendDto): Promise<any> {
        return 0;
    }

    @Post('plan')
    @ApiOperation({ description: '计划' })
    async plan(@Body() planDto: PlanDto): Promise<any> {
        return 0;
    }
}





