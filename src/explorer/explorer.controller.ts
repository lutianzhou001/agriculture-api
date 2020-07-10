import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { IResponse } from 'src/common/interface/response.interface';
import { ApiOperation, ApiBody, ApiParam, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { ResponseSuccess, ResponseError } from '../common/dto/response.dto';
import { ExplorerService } from './explorer.service';


@Controller('explorer')
export class ExplorerController {
    constructor(private readonly explorer: ExplorerService) { }

    @Get('blocks/total')
    @ApiOperation({ description: '获取节点最新块高', summary: '获取节点最新块高' })
    async getBlockNumber(): Promise<IResponse> {
        try {
            var mock = await this.explorer.getBlockNumber();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('blocks/list')
    @ApiParam({ name: 'limit', example: 8 })
    @ApiParam({ name: 'offset', example: 0 })
    @ApiOperation({ description: '获取交易列表', summary: '获取交易列表' })
    async getBlock(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.explorer.getTransaction(params);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('blocks/:blocknumber')
    @ApiOperation({ description: '通过块高获取块信息', summary: '通过块高获取块信息' })
    async getBlockInfoByBlockNumber(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.explorer.getBlockInfoByBlockNumber(params.blocknumber);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('transactions/total')
    @ApiOperation({ description: '获取总交易数', summary: '获取总交易数' })
    async getTransactionTotal(): Promise<IResponse> {
        try {
            var mock = await this.explorer.getTransactionTotal();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('transactions/list')
    @ApiParam({ name: 'limit', example: 5 })
    @ApiParam({ name: 'offset', example: 0 })
    @ApiOperation({ description: '获取交易列表', summary: '获取交易列表' })
    async getTransaction(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.explorer.getTransaction(params);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('nodes/total')
    @ApiOperation({ description: '获取节点总数', summary: '获取节点总数' })
    async getNodes(@Param() params): Promise<IResponse> {
        try {
            //var mock = await this.explorer.getTransaction(params);
            var mock = 4
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }
}

