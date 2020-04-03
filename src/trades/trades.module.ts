import { Module } from '@nestjs/common';
import { TradesController } from './trades.controller'

@Module({
  controllers: [TradesController],
})

export class TradesModule {}


