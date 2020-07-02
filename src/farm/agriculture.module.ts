import { Module } from '@nestjs/common';
import { AgricultureService } from './agriculture.service';
import { AgricultureController } from './agriculture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Producer, ProducerSchema } from './schemas/producer.schema';
import { Greenhouse, GreenhouseSchema } from './schemas/greenhouse.schema';
import { Base, BaseSchema } from './schemas/base.schema';
import { Crop, CropSchema } from './schemas/crop.schema';
import { Patrol, PatrolSchema } from './schemas/patrol.schema';
import { Purchase, PurchaseSchema } from './schemas/purchase.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Producer.name, schema: ProducerSchema },
      { name: Greenhouse.name, schema: GreenhouseSchema },
      { name: Base.name, schema: BaseSchema },
      { name: Crop.name, schema: CropSchema },
      { name: Patrol.name, schema: PatrolSchema },
      { name: Purchase.name, schema: PurchaseSchema },
    ])
  ],
  providers: [AgricultureService],
  controllers: [AgricultureController]
})
export class AgricultureModule { }
