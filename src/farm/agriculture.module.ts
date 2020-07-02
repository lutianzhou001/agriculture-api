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
import { Use, UseSchema } from './schemas/use.schema';
import { Plan, PlanSchema } from './schemas/plan.schema';
import { Device, DeviceSchema } from './schemas/device.schema';
import { DeviceFix, DeviceFixSchema } from './schemas/device.fix.schema';
import { DeviceMonitor, DeviceMonitorSchema } from './schemas/device.monitor.schema';
import { DeviceSwitch, DeviceSwitchSchema } from './schemas/device.switch.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Producer.name, schema: ProducerSchema },
      { name: Greenhouse.name, schema: GreenhouseSchema },
      { name: Base.name, schema: BaseSchema },
      { name: Crop.name, schema: CropSchema },
      { name: Patrol.name, schema: PatrolSchema },
      { name: Purchase.name, schema: PurchaseSchema },
      { name: Use.name, schema: UseSchema },
      { name: Plan.name, schema: PlanSchema },
      { name: Device.name, schema: DeviceSchema },
      { name: DeviceFix.name, schema: DeviceFixSchema },
      { name: DeviceMonitor.name, schema: DeviceMonitorSchema },
      { name: DeviceSwitch.name, schema: DeviceSwitchSchema },
    ])
  ],
  providers: [AgricultureService],
  controllers: [AgricultureController]
})
export class AgricultureModule { }
