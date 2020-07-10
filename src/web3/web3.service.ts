import { Injectable, HttpService } from '@nestjs/common';
import { default as config } from '../config'
import { map } from 'rxjs/operators';

@Injectable()
export class Web3Service {
    constructor(
        private readonly httpService: HttpService) { }

    async getBlockNumber() {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/blockNumber",
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }

    async getBlockByNumber(blocknumber) {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/blockByNumber/" + blocknumber,
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }

    async getTransactionTotal() {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/transaction-total",
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }
}
