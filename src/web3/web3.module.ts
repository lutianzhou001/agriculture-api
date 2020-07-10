import { Module, HttpModule } from '@nestjs/common';
import { Web3Controller } from './web3.controller';
import { Web3Service } from './web3.service';

@Module({
  imports: [HttpModule],
  controllers: [Web3Controller],
  providers: [Web3Service]
})
export class Web3Module { }
