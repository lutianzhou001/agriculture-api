

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiParam, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { ResponseSuccess, ResponseError } from '../common/dto/response.dto';
import { PatrolDto } from './dto/patrol.dto';
import { PurchaseDto } from './dto/puchase.dto';
import { PlanDto } from './dto/plan.dto';
import { UseDto } from './dto/use.dto';
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
import { IResponse } from 'src/common/interface/response.interface';
import { AgricultureService } from './agriculture.service';

@Controller('farm')
export class AgricultureController {
    constructor(private readonly agriculture: AgricultureService) { }

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
        try {
            var mock = await this.agriculture.createBase(baseDto)
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
        //return 0;
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: 'ea092f15b204af21b2d950e25bdc601b9641148a'
            },
        },
    })
    @Post('greenhouses/create')
    @ApiOperation({ description: '创建一个大棚' })
    async createGreenhouse(@Body() greenhouseDto: GreenhouseDto): Promise<any> {
        try {
            var mock = await this.agriculture.createGreenhouse(greenhouseDto)
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('greenhouses/:hash')
    @ApiOperation({ description: '获取一个大棚' })
    async getGreenhouseByHash(@Param() params): Promise<GreenhouseDto> {
        return new GreenhouseDto;
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: '0510458669b1db53f505c7ada0d6840012c5a6c2'
            },
        },
    })
    @Post('producers/create')
    @ApiOperation({ description: '创建一个农民' })
    async createProducer(@Body() producerDto: ProducerDto): Promise<any> {
        //return await this.agriculture.createProducer(producerDto);
        try {
            var mock = await this.agriculture.createProducer(producerDto)
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
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
    async cropfarming(@Body() cropDto: CropDto): Promise<any> {
        try {
            var mock = await this.agriculture.createCrop(cropDto)
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Post('farming/patrol')
    @ApiOperation({ description: '大棚农事(巡棚)' })
    async greenhousefarming(@Body() patrolDto: PatrolDto): Promise<any> {
        try {
            var mock = await this.agriculture.createPatrol(patrolDto)
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Post('tools/purchase')
    @ApiOperation({ description: '农资采购' })
    async purchase(@Body() purchaseDto: PurchaseDto): Promise<any> {
        try {
            var mock = await this.agriculture.createPurchase(purchaseDto)
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Post('tools/use')
    @ApiOperation({ description: '农资使用' })
    async use(@Body() useDto: UseDto): Promise<any> {
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







