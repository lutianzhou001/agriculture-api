

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { PatrolDto } from './dto/patrol.dto';
import { PurchaseDto } from './dto/puchase.dto';
import { PlanDto } from './dto/plan.dto';
import { RentDto } from './dto/rent.dto';
import { CropDto } from './dto/crop.dto';
import { BaseDto } from './dto/base.dto';
import { LandDto, GreenhouseDto } from './dto/land.dto';
import { ToolDto } from './dto/tool.dto';
import { EnterpriseDto } from './dto/enterprise.dto'
import { PlantDto } from './dto/plant.dto';
import { greenhouseDto } from './dto/greenhouse.dto';
import { async } from 'rxjs/internal/scheduler/async';
import { ProducerDto } from './dto/producer.dto';

@Controller('farm')
export class AgricultureController {

    @Get('enterprises')
    @ApiOperation({ description: '获取所有企业信息' })
    async getEnterprises(): Promise<EnterpriseDto> {
        return new EnterpriseDto;
    }

    @Get('enterprises/:did')
    @ApiOperation({ description: '获取某个企业信息' })
    async getEnterpriseByDID(@Param() params): Promise<EnterpriseDto> {
        return new EnterpriseDto;
    }

    @Get('lands')
    @ApiOperation({ description: '获取地块信息' })
    async getGreenhouses(): Promise<LandDto> {
        return new LandDto;;
    }

    @Get('lands/:did')
    @ApiOperation({ description: '获取某个地块信息' })
    async getLandByDID(@Param() params): Promise<LandDto> {
        return new LandDto;
    }

    @Get('bases')
    @ApiOperation({ description: '获取所有基地信息' })
    async getBases(): Promise<BaseDto> {
        return new BaseDto;
    }

    @Get('bases/:did')
    @ApiOperation({ description: '获取某个基地信息' })
    async getBaseByDID(@Param() params): Promise<BaseDto> {
        return new BaseDto;
    }

    @Post('bases/create')
    @ApiOperation({ description: '创建一个基地' })
    async createBase(@Body() baseDto: BaseDto): Promise<any> {
        return 0;
    }

    @Post('greenhouse/create')
    @ApiOperation({ description: '创建一个大棚' })
    async createGreenhouse(@Body() greenhouseDto: GreenhouseDto): Promise<any> {
        return 0;
    }

    @Post('producer/create')
    @ApiOperation({ description: '创建一个农民' })
    async createProducer(@Body() producerDto: ProducerDto): Promise<any> {
        return 0;
    }

    @Get('plants')
    @ApiOperation({ description: '获取所有种植物信息' })
    async getPlants(): Promise<PlanDto> {
        return new PlanDto;
    }

    @Get('plants/:did')
    @ApiOperation({ description: '获取某个种植物信息' })
    async getPlantByDID(@Param() params): Promise<PlantDto> {
        return new PlantDto;
    }


    @Get('tools')
    @ApiOperation({ description: '获取所有农资信息' })
    async getTools(): Promise<ToolDto> {
        return new ToolDto;
    }

    @Get('tools/:did')
    @ApiOperation({ description: '获取某个农资信息' })
    async getToolByDID(@Param() params): Promise<ToolDto> {
        return new ToolDto;
    }

    @Post('farming/crop')
    @ApiOperation({ description: '作物农事' })
    async cropfarming(@Body() farmDto: CropDto): Promise<any> {
        return 0;
    }

    @Post('farming/patrol')
    @ApiOperation({ description: '大棚农事(巡棚)' })
    async greenhousefarming(@Body() patrolDto: PatrolDto): Promise<any> {
        return 0;
    }

    @Post('tools/purchase')
    @ApiOperation({ description: '农资采购' })
    async purchase(@Body() purchaseDto: PurchaseDto): Promise<any> {
        return 0;
    }

    @Post('tools/lend')
    @ApiOperation({ description: '农资租赁' })
    async lend(@Body() rentDto: RentDto): Promise<any> {
        return 0;
    }

    @Post('plan')
    @ApiOperation({ description: '计划' })
    async plan(@Body() planDto: PlanDto): Promise<any> {
        return 0;
    }
}





