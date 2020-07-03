

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

    @ApiResponse({
        status: 200,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: [{
                    plants: ['小番茄，生菜，甜瓜，叶用红薯，空心菜，水果玉米'],
                    '_id': '5efdc68138439bcb8b72f640',
                    name: '浙江绿迹农业科技有限公司',
                    creditCode: '91330482MA2BCQ218W',
                    address: '平湖市广陈镇广中南路30号215室',
                    owner: '余魁',
                    ownerIdentity: '342824195806060027',
                    contact: '余魁',
                    phone: '13867457085',
                    baseAddress: '平湖广陈镇',
                    plantingArea: '120',
                    did: '0xb76C665C62f9b3f24d447861175de1794d0e0397'
                }]
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Get('enterprises')
    @ApiOperation({ description: '获取所有企业信息' })
    async getEnterprises(): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findAllEnterprises();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiParam({ name: 'did', required: true, example: '0xb76C665C62f9b3f24d447861175de1794d0e0397' })
    @ApiResponse({
        status: 200,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    plants: ['小番茄，生菜，甜瓜，叶用红薯，空心菜，水果玉米'],
                    '_id': '5efdc68138439bcb8b72f640',
                    name: '浙江绿迹农业科技有限公司',
                    creditCode: '91330482MA2BCQ218W',
                    address: '平湖市广陈镇广中南路30号215室',
                    owner: '余魁',
                    ownerIdentity: '342824195806060027',
                    contact: '余魁',
                    phone: '13867457085',
                    baseAddress: '平湖广陈镇',
                    plantingArea: '120',
                    did: '0xb76C665C62f9b3f24d447861175de1794d0e0397'
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Get('enterprises/:did')
    @ApiOperation({ description: '获取某个企业信息' })
    async getEnterpriseByDID(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findEnterpriseByDID(params.did);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        };
    }

    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('lands')
    @ApiOperation({ description: '获取地块信息' })
    async getLands(): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findAllLands();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        };
    }

    @Get('lands/:did')
    @ApiOperation({ description: '获取某个地块信息' })
    async getLandByDID(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findLandByDID(params.did);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        };
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
            var mock = await this.agriculture.createBase(baseDto);
            return await new ResponseSuccess('COMMON.SUCCESS', { hash: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 200,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: [{
                    '_id': '5efd92964fa5e561154e3367',
                    name: '',
                    location: '',
                    centre: '',
                    area: '',
                    altitude: 0,
                    ownerDid: '',
                    ownerAddress: '',
                    ownerName: '',
                    baseAddress: '',
                    contact: '',
                    phone: '',
                    identityCard: '',
                    hash: '13620d9221eddc951b455a719462a54e3de474d1',
                    '__v': 0
                }, {
                    '_id': '5efdc601f6edba51257d0c25',
                    name: 'stringss',
                    location: 'ssss',
                    centre: 'string',
                    area: 'string',
                    altitude: 0,
                    ownerDid: 'string',
                    ownerAddress: 'string',
                    ownerName: 'string',
                    baseAddress: 'string',
                    contact: 'string',
                    phone: 'string',
                    identityCard: 'string',
                    hash: 'b28605c3d25fb3ccab1f66edbe7469b6ed3dceb7',
                    '__v': 0
                }]
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Get('bases')
    @ApiOperation({ description: '获取所有基地信息' })
    async getBases(): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findAllBases();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({
        status: 200,
        schema: {
            example:
            {
                success: true,
                message: 'COMMON.SUCCESS',
                data: {
                    '_id': '5efd92964fa5e561154e3367',
                    name: '',
                    location: '',
                    centre: '',
                    area: '',
                    altitude: 0,
                    ownerDid: '',
                    ownerAddress: '',
                    ownerName: '',
                    baseAddress: '',
                    contact: '',
                    phone: '',
                    identityCard: '',
                    hash: '13620d9221eddc951b455a719462a54e3de474d1',
                    '__v': 0
                }
            }
        },
    })
    @ApiProduces('application/json; charset=utf-8')
    @Get('bases/:hash')
    @ApiOperation({ description: '获取某个基地信息' })
    async getBaseByHash(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.getBaseByHash(params.hash);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
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
                    hash: '0xc33b2F902E4700CBb53Ad9A86699c704D5CdCe25'
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

    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('greenhouses')
    @ApiOperation({ description: '获取大棚列表' })
    async findallGreenhouses(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findallGreenhouses();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiParam({ name: 'hash', required: true, example: '27e859182df6b49433b57ef4b0c34bdb3affd1e9' })
    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('greenhouses/:hash')
    @ApiOperation({ description: '获取一个大棚' })
    async getGreenhouseByHash(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findGreenhouseByHase(params.hash);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
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

    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('producers')
    @ApiOperation({ description: '获取农民列表' })
    async findallProducers(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findallProducers();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiParam({ name: 'hash', required: true, example: 'bd39b75e637cd50a21c649a57e730ea406096607' })
    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('producers/:hash')
    @ApiOperation({ description: '获取一个农民' })
    async getProducerByHash(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findProducerByHase(params.hash);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('plants')
    @ApiOperation({ description: '获取所有种植物信息' })
    async getPlants(): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findAllPlants();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }


    @ApiParam({ name: 'did', required: true, example: '0xb365C1825D46e280191EFcFD93Ca3ABEcB6cD601' })
    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('plants/:did')
    @ApiOperation({ description: '获取某个种植物信息' })
    async getPlantByDID(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findPlantByDID(params.did);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }


    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('tools')
    @ApiOperation({ description: '获取所有农资信息' })
    async getTools(): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findAllTools();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiParam({ name: 'did', required: true, example: '0x85fB5FbA92f1e147C984cF03ADA0d441870cf5cf' })
    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('tools/:did')
    @ApiOperation({ description: '获取某个农资信息' })
    async getToolByDID(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findToolByDID(params.did);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
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

    @ApiResponse({ status: 200 })
    @ApiProduces('application/json; charset=utf-8')
    @Get('device')
    @ApiOperation({ description: '获取设备列表' })
    async findallDevices(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findallDevices();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @ApiParam({ name: 'hash', required: true, example: 'c0f48ade959b61f3a0668e641fa5adac6f1b23fb' })
    @ApiResponse({ status: 200 })
    @Get('device/:hash')
    @ApiOperation({ description: '获取一个设备' })
    async getDeviceByHash(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.agriculture.findDeviceByHash(params.hash);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
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







