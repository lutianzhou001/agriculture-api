import { Injectable, HttpService } from '@nestjs/common';
import { default as config } from '../config'
import { map } from 'rxjs/operators';

@Injectable()
export class ContractService {
    constructor(
        private readonly httpService: HttpService) { }

    async getGreenhouseByIndex() {
        return this.httpService.post(config.contractAddr + "/WeBASE-Front/trans/handle", {
            user: '0x632f230956bb677d9e929a5281b80b863bc2d847',
            contractName: 'Evidence',
            contractAddress: '0xeb1843a953d3b05ec0e842c5ee77dbcf0c511d64',
            funcName: 'get',
            contractAbi: [{
                constant: false,
                inputs: [{
                    name: '_index',
                    type: 'uint256'
                }, {
                    name: '_value',
                    type: 'string'
                }],
                name: 'set',
                outputs: [{
                    name: '',
                    type: 'string'
                }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            }, {
                constant: true,
                inputs: [{
                    name: '_index',
                    type: 'uint256'
                }],
                name: 'get',
                outputs: [{
                    name: '',
                    type: 'bool'
                }, {
                    name: '',
                    type: 'string'
                }, {
                    name: '',
                    type: 'bytes32'
                }, {
                    name: '',
                    type: 'string'
                }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            }, {
                inputs: [{
                    name: '_name',
                    type: 'string'
                }, {
                    name: '_schema',
                    type: 'string'
                }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor'
            }, {
                anonymous: false,
                inputs: [{
                    indexed: true,
                    name: 'index',
                    type: 'string'
                }],
                name: 'Evidence',
                type: 'event'
            }],
            funcParam: [3],
            groupId: '1'
        }).pipe(
            map(response => response.data),
        ).toPromise();
    }
}
