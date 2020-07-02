import { Module } from '@nestjs/common';
import { AgricultureService } from './agriculture.service';
import { AgricultureController } from './agriculture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Producer, ProducerSchema } from './schemas/producer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Producer.name, schema: ProducerSchema }])],
  providers: [AgricultureService],
  controllers: [AgricultureController]
})
export class AgricultureModule { }
