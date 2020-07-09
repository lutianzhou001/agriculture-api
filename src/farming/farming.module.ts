import { Module } from '@nestjs/common';
import { FarmingService } from './farming.service';
import { FarmingController } from './farming.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Enterprise, EnterpriseSchema } from './schemas/enterprise.schema';
import { Land, LandSchema } from './schemas/land.schema';
import { Plant, PlantSchema } from './schemas/plant.schema';
import { Tool, ToolSchema } from './schemas/tool.schema';
import { Producer, ProducerSchema } from './schemas/producer.schema';
import { Greenhouse, GreenhouseSchema } from './schemas/greenhouse.schema';
import { Field, FieldSchema } from './schemas/field.schema';
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
import { PlantRecord, PlantRecordSchema } from './schemas/plant.record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Enterprise.name, schema: EnterpriseSchema },
      { name: Land.name, schema: LandSchema },
      { name: Plant.name, schema: PlantSchema },
      { name: Tool.name, schema: ToolSchema },
      { name: Producer.name, schema: ProducerSchema },
      { name: Greenhouse.name, schema: GreenhouseSchema },
      { name: Field.name, schema: FieldSchema },
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
      { name: PlantRecord.name, schema: PlantRecordSchema },
    ])
  ],
  providers: [FarmingService],
  controllers: [FarmingController]
})
export class FarmingModule { }
