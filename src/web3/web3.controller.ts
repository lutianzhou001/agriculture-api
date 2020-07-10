import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { IResponse } from 'src/common/interface/response.interface';
import { ApiOperation, ApiBody, ApiParam, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { ResponseSuccess, ResponseError } from '../common/dto/response.dto';
import { Web3Service } from './web3.service';

@Controller('web3')
export class Web3Controller {
    constructor(private readonly web3: Web3Service) { }

    /*@Get('realtimetx')
    @ApiOperation({ description: '获取节点最新块高', summary: '获取节点最新块高' })
    async getRealtimeTx(): Promise<IResponse> {
        try {
            var mock = {}
            mock['blocknumber'] = await this.web3.getBlockNumber();
            mock['']
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }*/

    @Get('blockNumber')
    @ApiOperation({ description: '获取节点最新块高', summary: '获取节点最新块高' })
    async getBlockNumber(): Promise<IResponse> {
        try {
            var mock = await this.web3.getBlockNumber();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    @Get('WeBASE-Front/precompiled/consensus/list')
    @ApiParam({ name: 'groupId', example: 1 })
    @ApiParam({ name: 'pageSize', example: 8 })
    @ApiParam({ name: 'pageNumber', example: 1 })
    @ApiOperation({ description: '获取节点最新块高', summary: '获取节点最新块高' })
    async getConsensusList(@Param() params): Promise<IResponse> {
        try {
            var mock = {
                "code": 0,
                "message": "success",
                "data": [
                    {
                        "nodeId": "13e0f2b94cbce924cc3737385a38587939e809fb786c4fc34a6ba3ea97693bccfa173b352ac41f1dbb97e9e4910ccbec1df38ad4020cef3b2044e833188adad9",
                        "nodeType": "sealer"
                    },
                    {
                        "nodeId": "bce4b2269c25c2cdba30155396bfe90af08c3c08cff205213477683117e4243ebe26588479519e636a5d5d93545cab778435cacacc41993f28f58f60fa5ceb72",
                        "nodeType": "sealer"
                    },
                    {
                        "nodeId": "e815cc5637cb8c3274c83215c680822e4a0110d0a8315fcf03e43e8e3944edd758c8b173c4e0076f599aa1f853fa207d47cc95d201ae8d0206b71ad5aa8c3f59",
                        "nodeType": "sealer"
                    }
                ],
                "totalCount": 3
            }
            //var mock = await this.web3.getBlockNumber();
            return await new ResponseSuccess('COMMON.SUCCESS', mock);
        }
        catch (error) {
            return new ResponseError('COMMON.ERROR', error);
        }
    }

    /*@Get('blockByNumber/:blockNumber')
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

    @Get('blockByHash/:blockHash')
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
