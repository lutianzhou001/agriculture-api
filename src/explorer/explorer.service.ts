import { Injectable, HttpService } from '@nestjs/common';
import { default as config } from '../config'
import { map } from 'rxjs/operators';
import {
    Item,
    Param,
    Method,
    Coder,
    Erc20
} from 'eth-coder';
import { RealtimeTxDto } from './dto/realtime.tx.dto';

@Injectable()
export class ExplorerService {
    constructor(
        private readonly httpService: HttpService) { }

    async getRealtimeTx() {
        let realtimetx = new RealtimeTxDto()
        realtimetx.abnormalNode = 0
        realtimetx.blockNumber = await this.getBlockNumber()
        realtimetx.nodeNumber = 4
        realtimetx.normalNode = 4
        realtimetx.transactionNumber = await this.getTransactionTotal().then((data) => { return data.txSum })
        return realtimetx
    }
    async getBlockNumber() {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/blockNumber",
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }

    async getBlockList(params) {
        //let blockNumber = await this.getBlockNumber();
        return await this.getBlockNumber().then((response) => {
            console.log(response.data)
            return response
        })
    }

    async getBlockInfoByBlockNumber(blocknumber) {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/blockByNumber/" + blocknumber,
        ).pipe(
            map(response => response.data),
        ).toPromise().then((date) => {
            const coder = new Coder(Erc20.abi);
            const data: string = '0xa9059cbb0000000000000000000000008b4ab4667ad81af60e914a33f3aee35865825df60000000000000000000000000000000000000000000000056bc75e2d63100000';

            const method: Method = coder.decodeMethod(data);

            console.log(date.transactions[0].input, "dfdfd", date['transactions'], 'ff', method)

            return date
        });
    }

    async getTransactionTotal() {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/transaction-total",
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }

    async getTransaction(params) {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/transaction-total",
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }
}
