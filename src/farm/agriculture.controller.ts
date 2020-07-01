

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {
    ApiOperation,
} from '@nestjs/swagger';
import { PatrolDto } from './dto/patrol.dto';
import { PurchaseDto } from './dto/puchase.dto';
import { PlanDto } from './dto/plan.dto';
import { RentDto } from './dto/rent.dto';
import { CropDto } from './dto/crop.dto';
import { BaseDto } from './dto/base.dto';
import { LandDto } from './dto/land.dto';
import { ToolDto } from './dto/tool.dto';
import { EnterpriseDto } from './dto/enterprise.dto'
import { PlantDto } from './dto/plant.dto';
import { GreenhouseDto } from './dto/greenhouse.dto';
import { ProducerDto } from './dto/producer.dto';
import { DeviceDto } from './dto/device.dto';
import { DeviceFixDto } from './dto/device.fix.dto';
import { DeviceMonitorDto } from './dto/device.monitor.dto';
import { DeviceSwitchDto } from './dto/device.switch.dto';

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

    @Post('greenhouses/create')
    @ApiOperation({ description: '创建一个大棚' })
    async createGreenhouse(@Body() greenhouseDto: GreenhouseDto): Promise<any> {
        return 0;
    }

    @Get('greenhouses/:hash')
    @ApiOperation({ description: '获取一个大棚' })
    async getGreenhouseByHash(@Param() params): Promise<GreenhouseDto> {
        return new GreenhouseDto;
    }

    @Post('producers/create')
    @ApiOperation({ description: '创建一个农民' })
    async createProducer(@Body() producerDto: ProducerDto): Promise<any> {
        return 0;
    }

    @Get('producers/:hash')
    @ApiOperation({ description: '获取一个农民' })
    async getProducerByHash(@Body() producerDto: ProducerDto): Promise<ProducerDto> {
        return new ProducerDto;
    }

    @Get('plants')
    @ApiOperation({ description: '获取所有种植物信息' })
    async getPlants(): Promise<PlantDto> {
        return new PlantDto;
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

    @Post('device/create')
    @ApiOperation({ description: '创建一个设备' })
    async createDevice(@Body() deviceDto: DeviceDto): Promise<any> {
        return 0;
    }

    @Get('device/:hash')
    @ApiOperation({ description: '获取一个设备' })
    async getDeviceByHash(@Param() params): Promise<ProducerDto> {
        return new ProducerDto;
    }

    @Post('device/fix')
    @ApiOperation({ description: '维修一个设备' })
    async fixDevice(@Body() deviceFixDto: DeviceFixDto): Promise<any> {
        return 0;
    }

    @Post('device/monitor')
    @ApiOperation({ description: '添加监控信息' })
    async monitorDevice(@Body() deviceMonitorDto: DeviceMonitorDto): Promise<any> {
        return 0;
    }

    @Post('device/switch')
    @ApiOperation({ description: '添加开关信息' })
    async switchDevice(@Body() deviceSwitchDto: DeviceSwitchDto): Promise<any> {
        return 0
    }
}







