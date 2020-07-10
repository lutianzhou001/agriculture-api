import { Injectable, HttpService } from '@nestjs/common';
import { default as config } from '../config'
import { map } from 'rxjs/operators';

@Injectable()
export class Web3Service {
    constructor(
        private readonly httpService: HttpService,
    ) { }

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
    async getConsensusList(query) {
        if (query.pageSize === undefined) { query.pageSize = 10 }
        if (query.pageNumber === undefined) { query.pageNumber = 1 }
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/precompiled/consensus/list?groupId=1&pageSize=" + query.pageSize + "&pageNumber=" + query.pageNumber
        ).pipe(
            map(response => response.data.data),
        ).toPromise();
    }

    async getTransactionTotal() {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/transaction-total",
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }

    async getSearch(input) {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/search?input=" + input
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }

    async getBlockTransCnt(blockNumber) {
        return this.httpService.get(config.contractAddr + "/WeBASE-Front/1/web3/blockTransCnt/" + blockNumber
        ).pipe(
            map(response => response.data),
        ).toPromise();
    }

    async getTransactionsList(query) {
        let mock = [
            {
                "hash": "0x86e88bce97e578dcf393ae3f0f61b87823b7e2e7164cb25da9d1493a6eaf033c",
                "blockNumber": 78,
                "timestamp": 1594347777331,
            },
            {
                "hash": "0xb4ceb732f4da0a6d970673c13d5e48584fc9c72a74f68667b33d332924f56087",
                "blockNumber": 77,
                "timestamp": 1594200233563,
            },
            {
                "hash": "0xeded05218206aab48dac389bf220a9d1922f936a41d7691e40d48247c748e06c",
                "blockNumber": 76,
                "timestamp": 1594199837859,
            }
        ]
        return mock
    }

    async getBlocksList(query) {
        let mock = [
            {
                "number": 78,
                "hash": "0x4b3f7685327306c93dd2ecde8317ef366468d62287f27479f0d6e975a6ce4ea8",
                "timestamp": 1594347777331,
                "transactions": [
                    {
                        "hash": "0x86e88bce97e578dcf393ae3f0f61b87823b7e2e7164cb25da9d1493a6eaf033c",
                        "nonce": 613913114031765795391175239130465386690463803726860810036042864894087437812,
                        "blockHash": "0x4b3f7685327306c93dd2ecde8317ef366468d62287f27479f0d6e975a6ce4ea8",
                        "blockNumber": 78,
                        "transactionIndex": 0,
                        "from": "0x632f230956bb677d9e929a5281b80b863bc2d847",
                        "to": "0xeb1843a953d3b05ec0e842c5ee77dbcf0c511d64",
                        "value": 0,
                        "gasPrice": 1,
                        "gas": 100000000,
                        "input": "0x6437197700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000003235342c3123e6a39a2c2c3132312e31343836312033302e37363333312c322e38382c2c323031392f322f32362031313a32330000000000000000000000000000",
                        "creates": null,
                        "publicKey": null,
                        "raw": null,
                        "r": null,
                        "s": null,
                        "v": 0,
                        "valueRaw": "0x0",
                        "gasPriceRaw": "0x1",
                        "gasRaw": "0x5f5e100",
                        "transactionIndexRaw": "0x0",
                        "blockNumberRaw": "0x4e",
                        "nonceRaw": "0x15b7666fc4c8ac78db5d95118ca016234779220138ead9d12d260ba5dba9df4"
                    }
                ],
            },
            {
                "number": 77,
                "hash": "0x92e8c3181b487b75040d930ffe7e21312d7c40f2bb0031e0f78b40506964f9a6",
                "timestamp": 1594200233563,
                "transactions": [
                    {
                        "hash": "0xb4ceb732f4da0a6d970673c13d5e48584fc9c72a74f68667b33d332924f56087",
                        "nonce": 591052906555680787463191975967631867978747093239774919067891610028237357473,
                        "blockHash": "0x92e8c3181b487b75040d930ffe7e21312d7c40f2bb0031e0f78b40506964f9a6",
                        "blockNumber": 77,
                        "transactionIndex": 0,
                        "from": "0x9a00429cb0fef0cd20037930842761a6acd41ef1",
                        "to": "0x66dc78211988d9fb9019741944b4a3a3e894814a",
                        "value": 0,
                        "gasPrice": 1,
                        "gas": 100000000,
                        "input": "0xd0def5210000000000000000000000009a00429cb0fef0cd20037930842761a6acd41ef10000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001268747470733a2f2f676f6f676c652e636f6d0000000000000000000000000000",
                        "creates": null,
                        "publicKey": null,
                        "raw": null,
                        "r": null,
                        "s": null,
                        "v": 0,
                        "valueRaw": "0x0",
                        "gasPriceRaw": "0x1",
                        "gasRaw": "0x5f5e100",
                        "transactionIndexRaw": "0x0",
                        "blockNumberRaw": "0x4d",
                        "nonceRaw": "0x14e862ac3871787b13e3d0cc4d40fff989ff64a399a67b33a20a32860cf81a1"
                    }
                ],
            },
            {
                "number": 76,
                "hash": "0x69f247c8aed20fda500e47350bb6bafe7552219031afa500989a91c715bc040f",
                "timestamp": 1594199837859,
                "transactions": [
                    {
                        "hash": "0xeded05218206aab48dac389bf220a9d1922f936a41d7691e40d48247c748e06c",
                        "nonce": 1507113424370043855589032096541476547142297854092007499661440186548274131525,
                        "blockHash": "0x69f247c8aed20fda500e47350bb6bafe7552219031afa500989a91c715bc040f",
                        "blockNumber": 76,
                        "transactionIndex": 0,
                        "from": "0x632f230956bb677d9e929a5281b80b863bc2d847",
                        "to": "0xeb1843a953d3b05ec0e842c5ee77dbcf0c511d64",
                        "value": 0,
                        "gasPrice": 1,
                        "gas": 100000000,
                        "input": "0x6437197700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000003135342c3123e6a39a2c2c3132312e31343836312033302e37363333312c322e38382c323031392f322f32362031313a3233000000000000000000000000000000",
                        "creates": null,
                        "publicKey": null,
                        "raw": null,
                        "r": null,
                        "s": null,
                        "v": 0,
                        "valueRaw": "0x0",
                        "gasPriceRaw": "0x1",
                        "gasRaw": "0x5f5e100",
                        "transactionIndexRaw": "0x0",
                        "blockNumberRaw": "0x4c",
                        "nonceRaw": "0x354fef7d5a658862f6e25fbb745d6c9f42e1c7113fee86b0ad56ab3cadcf245"
                    }
                ],
            }
        ]
        return mock
    }
}

