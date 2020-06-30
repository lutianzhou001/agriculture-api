import { Module } from '@nestjs/common';
import { AgricultureService } from './agriculture.service';
import { AgricultureController } from './agriculture.controller';

@Module({
  providers: [AgricultureService],
  controllers: [AgricultureController]
})
export class AgricultureModule {}
