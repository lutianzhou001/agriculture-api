import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { IResponse } from 'src/common/interface/response.interface';
import { ApiOperation, ApiBody, ApiParam, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { ResponseSuccess, ResponseError } from '../common/dto/response.dto';
import { ContractService } from './contract.service';


@Controller('contract')
export class ContractController {
    constructor(private readonly contract: ContractService) { }

    @Get('greenhouses')
    @ApiOperation({ description: '通过索引获取大棚信息', summary: '通过索引获取大棚信息' })
    async getGreenhouseByIndex(): Promise<IResponse> {
        try {
            var mock = await this.contract.getGreenhouseByIndex();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }
}
