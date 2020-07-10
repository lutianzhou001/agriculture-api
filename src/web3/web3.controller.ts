import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { IResponse } from 'src/common/interface/response.interface';
import { ApiOperation, ApiBody, ApiParam, ApiProduces, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { ResponseSuccess, ResponseError } from '../common/dto/response.dto';
import { Web3Service } from './web3.service';

@Controller('web3')
export class Web3Controller {
    constructor(
        private readonly web3: Web3Service) { }

    /*@Get('realtimetx')
    @ApiOperation({ description: '获取节点最新块高', summary: '获取节点最新块高' })
    async getRealtimeTx(): Promise<IResponse> {
        try {
            var mock = {}
            mock['blocknumber'] = await this.web3.getBlockNumber();
            mock['transactionNumber'] = await this.web3.getTransactionTotal().then((data) => { return data.txSum })
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }*/

    @Get('overview')
    @ApiOperation({ description: 'overview', summary: 'overview' })
    async getOverview(): Promise<IResponse> {
        try {
            var mock = {}
            mock['nodes'] = await this.web3.getConsensusList({}).then((data) => { return data.data });
            mock['transactions'] = await this.web3.getTransactionTotal();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('blockNumber')
    @ApiOperation({ description: '获取节点最新块高', summary: '获取节点最新块高' })
    async getBlockNumber(): Promise<IResponse> {
        try {
            var mock = await this.web3.getBlockNumber();
            var mockjson = { height: mock }
            return await new ResponseSuccess('COMMON.SUCCESS', mockjson);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('consensus/list')
    @ApiQuery({ name: 'groupId', required: false, example: 1 })
    @ApiQuery({ name: 'pageSize', required: false, example: 10 })
    @ApiQuery({ name: 'pageNumber', required: false, example: 1 })
    @ApiOperation({ description: '获取节点的list列表，列表包含节点id，节点共识状态', summary: '获取节点的list列表，列表包含节点id，节点共识状态' })
    async getConsensusList(@Query() query): Promise<IResponse> {
        try {
            var mock = await this.web3.getConsensusList(query);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('blockTransCnt/:blockNumber')
    @ApiParam({ name: 'blockNumber', example: 78 })
    @ApiOperation({ description: '根据块高获取该块中的交易个数', summary: '根据块高获取该块中的交易个数' })
    async getBlockTransCnt(@Param('blockNumber') params): Promise<IResponse> {
        try {
            var mock = await this.web3.getBlockTransCnt(params);
            return await new ResponseSuccess('COMMON.SUCCESS', { cnt: mock });
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('blockByNumber/:blockNumber')
    @ApiParam({ name: 'blockNumber', example: 78 })
    @ApiOperation({ description: '通过块高获取块信息', summary: '通过块高获取块信息' })
    async getBlockByNumber(@Param() params): Promise<IResponse> {
        try {
            var mock = await this.web3.getBlockByNumber(params.blockNumber);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    /*@Get('blockByHash/:blockHash')
    @ApiParam({ name: 'blockHash', example: '0x4b3f7685327306c93dd2ecde8317ef366468d62287f27479f0d6e975a6ce4ea8' })
    @ApiOperation({ description: '通过块hash获取块信息', summary: '通过块hash获取块信息' })
    async getBlockByHash(@Param() params): Promise<IResponse> {
        try {
            var mock = {}
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('blockTransCnt/:blockNumber')
    @ApiParam({ name: 'blockNumber', example: 78 })
    @ApiOperation({ description: '根据块高获取该块中的交易个数', summary: '根据块高获取该块中的交易个数' })
    async getBlockTransCnt(@Param() params): Promise<IResponse> {
        try {
            var mock = {};
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('pbftView')
    @ApiOperation({ description: '通过调用此接口获取PbftView', summary: '通过调用此接口获取PbftView' })
    async getPbftView(@Param() params): Promise<IResponse> {
        try {
            var mock = {

            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('transactionReceipt/:transHash')
    @ApiOperation({ description: '根据交易hash获取交易回执', summary: '根据交易hash获取交易回执' })
    async getTransactionReceipt(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('transaction/:transHash')
    @ApiOperation({ description: '根据交易hash获取交易信息', summary: '根据交易hash获取交易信息' })
    async getTransaction(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('clientVersion')
    @ApiOperation({ description: '获取web3j版本', summary: '获取web3j版本' })
    async getClientVersion(@Param() params): Promise<IResponse> {
        try {
            var mock = {
                "Build Time": "20190318 10:56:37",
                "Build Type": "Linux/g++/RelWithDebInfo",
                "FISCO-BCOS Version": "2.0.0-rc1",
                "Git Branch": "master",
                "Git Commit Hash": "2467ddf73b091bc8e0ee611ccee85db7989ad389"
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('code/:address/:blockNumber')
    @ApiOperation({ description: '获取指定块高区块指定合约地址的二进制代码 https://webasedoc.readthedocs.io/zh_CN/latest/docs/WeBASE-Front/interface.html#id162', summary: '获取指定块高区块指定合约地址的二进制代码' })
    async getCode(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }*/

    @Get('transactions/total')
    @ApiOperation({ description: '获取总交易数', summary: '获取总交易数' })
    async getTransactionTotal(): Promise<IResponse> {
        try {
            var mock = await this.web3.getTransactionTotal();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('search')
    @ApiQuery({ name: 'input', example: 78 })
    @ApiOperation({ description: '如果输入块高就返回区块信息，如果输入交易hash就返回交易信息', summary: '如果输入块高就返回区块信息，如果输入交易hash就返回交易信息' })
    async getSearch(@Query() query): Promise<IResponse> {
        try {
            var mock = await this.web3.getSearch(query.input);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('transactions/list')
    @ApiQuery({ name: 'limit', required: false, example: 10 })
    @ApiQuery({ name: 'offset', required: false, example: 0 })
    @ApiOperation({ description: '交易列表', summary: '交易列表' })
    async getTransactionsList(@Query() query): Promise<IResponse> {
        try {
            var mock = await this.web3.getTransactionsList(query);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('blocks/list')
    @ApiQuery({ name: 'limit', required: false, example: 10 })
    @ApiQuery({ name: 'offset', required: false, example: 0 })
    @ApiOperation({ description: '区块列表', summary: '区块列表' })
    async getBlocksList(@Query() query): Promise<IResponse> {
        try {
            var mock = await this.web3.getBlocksList(query);
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }



    /*@Get('transByBlockHashAndIndex/:blockHash/:transactionIndex')
    @ApiOperation({ description: '根据块hash和交易index获取指定区块指定位置的交易信息', summary: '根据块hash和交易index获取指定区块指定位置的交易信息' })
    async getTransByBlockHashAndIndex(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('transByBlockNumberAndIndex/:blockNumber/:transactionIndex')
    @ApiOperation({ description: '根据块高和交易index获取交易信息', summary: '根据块高和交易index获取交易信息' })
    async getTransByBlockNumberAndIndex(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('consensusStatus')
    @ApiOperation({ description: '返回指定群组内的共识状态信息', summary: '返回指定群组内的共识状态信息' })
    async getConsensusStatus(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('getNodeStatusList')
    @ApiOperation({ description: '返回节点的块高、pbftview及状态。（查看nodeHeartBeat', summary: '返回节点的块高、pbftview及状态' })
    async getNodeStatusList(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('groupList')
    @ApiOperation({ description: '返回群组列表', summary: '返回群组列表' })
    async getGroupList(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('groupPeers')
    @ApiOperation({ description: '返回指定群组内的共识节点和观察节点列表', summary: '返回指定群组内的共识节点和观察节点列表' })
    async getGroupPeers(@Param() params): Promise<IResponse> {
        try {
            var mock = {
            }
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }*/
}
