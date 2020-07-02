

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
    async getEnterpriseByDID(@Param() params): Promise<IResponse> {
        var test = new EnterpriseDto;
        return new ResponseSuccess('COMMON.SUCCESS', test);
        //return new EnterpriseDto;
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

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: '13620d9221eddc951b455a719462a54e3de474d1'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('bases/create')
    @ApiOperation({ description: '创建一个基地' })
    async createBase(@Body() baseDto: BaseDto): Promise<any> {
        try {
            var mock = await this.agriculture.createBase(baseDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: '27e859182df6b49433b57ef4b0c34bdb3affd1e9'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('greenhouses/create')
    @ApiOperation({ description: '创建一个大棚' })
    async createGreenhouse(@Body() greenhouseDto: GreenhouseDto): Promise<any> {
        try {
            var mock = await this.agriculture.createGreenhouse(greenhouseDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
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
                data: {
                    hash: 'bd39b75e637cd50a21c649a57e730ea406096607'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('producers/create')
    @ApiOperation({ description: '创建一个农民' })
    async createProducer(@Body() producerDto: ProducerDto): Promise<any> {
        //return await this.agriculture.createProducer(producerDto);
        try {
            var mock = await this.agriculture.createProducer(producerDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('producers/:hash')
    @ApiOperation({ description: '获取一个农民' })
    async getProducerByHash(@Param() params): Promise<ProducerDto> {
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

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: '3ddd5931faeb80cb51e1827c1a470c59694f7768'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('farming/crop')
    @ApiOperation({ description: '作物农事' })
    async cropfarming(@Body() cropDto: CropDto): Promise<any> {
        try {
            var mock = await this.agriculture.createCrop(cropDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: 'b5277dcabbac360a5c0a61974af4181a5001b252'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('farming/patrol')
    @ApiOperation({ description: '大棚农事(巡棚)' })
    async greenhousefarming(@Body() patrolDto: PatrolDto): Promise<any> {
        try {
            var mock = await this.agriculture.createPatrol(patrolDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: 'fa4a75595bbc998543ad2d3a5f22f5f598aca23f'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('tools/purchase')
    @ApiOperation({ description: '农资采购' })
    async purchase(@Body() purchaseDto: PurchaseDto): Promise<any> {
        try {
            var mock = await this.agriculture.createPurchase(purchaseDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: 'f8856048e8e5144b2e723844a711f6941d72cc24'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('tools/use')
    @ApiOperation({ description: '农资使用' })
    async use(@Body() useDto: UseDto): Promise<any> {
        try {
            var mock = await this.agriculture.createUse(useDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: 'b056c51823b25b2b2d098969105ad6442d44b0e6'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('plan')
    @ApiOperation({ description: '计划' })
    async plan(@Body() planDto: PlanDto): Promise<any> {
        try {
            var mock = await this.agriculture.createPlan(planDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return await new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: 'c0f48ade959b61f3a0668e641fa5adac6f1b23fb'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('device/create')
    @ApiOperation({ description: '创建一个设备' })
    async createDevice(@Body() deviceDto: DeviceDto): Promise<any> {
        try {
            var mock = await this.agriculture.createDevice(deviceDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('device/:hash')
    @ApiOperation({ description: '获取一个设备' })
    async getDeviceByHash(@Param() params): Promise<ProducerDto> {
        return new ProducerDto;
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: '83aaa9f118304bc63ef7ba3bc2b48bb732667e17'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('device/fix')
    @ApiOperation({ description: '维修一个设备' })
    async fixDevice(@Body() deviceFixDto: DeviceFixDto): Promise<any> {
        try {
            var mock = await this.agriculture.fixDevice(deviceFixDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: '11c71612a5d5a52b103ce5c0f1f6e666c3f74f89'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('device/monitor')
    @ApiOperation({ description: '添加监控信息' })
    async monitorDevice(@Body() deviceMonitorDto: DeviceMonitorDto): Promise<any> {
        try {
            var mock = await this.agriculture.monitorDevice(deviceMonitorDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    hash: '25a88f5ee29af852345030df9ffc2544e7e2d048'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Post('device/switch')
    @ApiOperation({ description: '添加开关信息' })
    async switchDevice(@Body() deviceSwitchDto: DeviceSwitchDto): Promise<any> {
        try {
            var mock = await this.agriculture.switchDevice(deviceSwitchDto)
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }
}







