import { Module } from '@nestjs/common';
import { AgricultureService } from './agriculture.service';
import { AgricultureController } from './agriculture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Producer, ProducerSchema } from './schemas/producer.schema';
import { Greenhouse, GreenhouseSchema } from './schemas/greenhouse.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Producer.name, schema: ProducerSchema }, { name: Greenhouse.name, schema: GreenhouseSchema }])
  ],
  providers: [AgricultureService],
  controllers: [AgricultureController]
})
export class AgricultureModule { }
