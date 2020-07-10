import { Module, HttpModule } from '@nestjs/common';
import { Web3Controller } from './web3.controller';
import { Web3Service } from './web3.service';
import { FarmingService } from './../farming/farming.service';
import { FarmingModule } from './../farming/farming.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Enterprise, EnterpriseSchema } from './../farming/schemas/enterprise.schema';
import { Land, LandSchema } from './../farming/schemas/land.schema';
import { Plant, PlantSchema } from './../farming/schemas/plant.schema';
import { Tool, ToolSchema } from './../farming/schemas/tool.schema';
import { Producer, ProducerSchema } from './../farming/schemas/producer.schema';
import { Greenhouse, GreenhouseSchema } from './../farming/schemas/greenhouse.schema';
import { Field, FieldSchema } from './../farming/schemas/field.schema';
import { Base, BaseSchema } from './../farming/schemas/base.schema';
import { Crop, CropSchema } from './../farming/schemas/crop.schema';
import { Patrol, PatrolSchema } from './../farming/schemas/patrol.schema';
import { Purchase, PurchaseSchema } from './../farming/schemas/purchase.schema';
import { Use, UseSchema } from './../farming/schemas/use.schema';
import { Plan, PlanSchema } from './../farming/schemas/plan.schema';
import { Device, DeviceSchema } from './../farming/schemas/device.schema';
import { DeviceFix, DeviceFixSchema } from './../farming/schemas/device.fix.schema';
import { DeviceMonitor, DeviceMonitorSchema } from './../farming/schemas/device.monitor.schema';
import { DeviceSwitch, DeviceSwitchSchema } from './../farming/schemas/device.switch.schema';
import { PlantRecord, PlantRecordSchema } from './../farming/schemas/plant.record.schema'

@Module({
  imports: [
    HttpModule,
    FarmingModule,
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
  controllers: [Web3Controller],
  providers: [Web3Service, FarmingService]
})
export class Web3Module { }
