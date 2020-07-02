import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producer } from './schemas/producer.schema';
import { Greenhouse } from './schemas/greenhouse.schema';
import { Base } from './schemas/base.schema';
import { Crop } from './schemas/crop.schema';
import { Patrol } from './schemas/patrol.schema';
import { Purchase } from './schemas/purchase.schema';
import { Use } from './schemas/use.schema';
import { Plan } from './schemas/plan.schema';
import { Device } from './schemas/device.schema';
import { DeviceFix } from './schemas/device.fix.schema';
import { DeviceMonitor } from './schemas/device.monitor.schema';
import { DeviceSwitch } from './schemas/device.switch.schema';
import { ProducerDto } from './dto/producer.dto';
import { GreenhouseDto } from './dto/greenhouse.dto';
import { BaseDto } from './dto/base.dto';
import { CropDto } from './dto/crop.dto';
import { PatrolDto } from './dto/patrol.dto';
import { PurchaseDto } from './dto/puchase.dto';
import { UseDto } from './dto/use.dto';
import { PlanDto } from './dto/plan.dto';
import { DeviceDto } from './dto/device.dto';
import { DeviceFixDto } from './dto/device.fix.dto';
import { DeviceMonitorDto } from './dto/device.monitor.dto';
import { DeviceSwitchDto } from './dto/device.switch.dto';
const hash = require('object-hash');

@Injectable()
export class AgricultureService {
    constructor(
        @InjectModel(Producer.name) private producerModel: Model<Producer>,
        @InjectModel(Greenhouse.name) private greenhouseModel: Model<Greenhouse>,
        @InjectModel(Base.name) private baseModel: Model<Base>,
        @InjectModel(Crop.name) private cropModel: Model<Crop>,
        @InjectModel(Patrol.name) private patrolModel: Model<Patrol>,
        @InjectModel(Purchase.name) private purchaseModel: Model<Purchase>,
        @InjectModel(Use.name) private useModel: Model<Use>,
        @InjectModel(Plan.name) private planModel: Model<Plan>,
        @InjectModel(Device.name) private deviceModel: Model<Device>,
        @InjectModel(DeviceFix.name) private deviceFixModel: Model<DeviceFix>,
        @InjectModel(DeviceMonitor.name) private deviceMonitorModel: Model<DeviceMonitor>,
        @InjectModel(DeviceSwitch.name) private deviceSwitchModel: Model<DeviceSwitch>,
    ) { }

    async createProducer(producerDto: ProducerDto) {
        console.log(producerDto)
        if (producerDto.hash == null) {
            producerDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(producerDto)
            producerDto.hash = genhash
            const createProducer = new this.producerModel(producerDto);
            await createProducer.save()
            return createProducer.hash;
        } else {
            var producers = await this.producerModel.findOneAndUpdate({ hash: producerDto.hash }, producerDto)
            return producers.hash
        }
    }

    async createGreenhouse(greenhouseDto: GreenhouseDto) {
        if (greenhouseDto.hash == null) {
            greenhouseDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(greenhouseDto)
            greenhouseDto.hash = genhash
            const createGreenhouse = new this.greenhouseModel(greenhouseDto);
            await createGreenhouse.save()
            return createGreenhouse.hash
        } else {
            var gh = await this.greenhouseModel.findOneAndUpdate({ hash: greenhouseDto.hash }, greenhouseDto)
            //var gh = await this.greenhouseModel.find({ hash: greenhouseDto.hash })
            return gh.hash
        }
    }

    async createBase(baseDto: BaseDto) {
        if (baseDto.hash == null) {
            baseDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(baseDto)
            baseDto.hash = genhash
            const createBase = new this.baseModel(baseDto);
            await createBase.save()
            return createBase.hash;
        } else {
            var bases = await this.baseModel.findOneAndUpdate({ hash: baseDto.hash }, baseDto)
            return bases.hash
        }
    }

    async createCrop(cropDto: CropDto) {
        console.log(cropDto)
        if (cropDto.hash == null) {
            cropDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(cropDto)
            cropDto.hash = genhash
            const createCrop = new this.cropModel(cropDto);
            await createCrop.save()
            return createCrop.hash;
        } else {
            var crops = await this.cropModel.findOneAndUpdate({ hash: cropDto.hash }, cropDto)
            return crops.hash
        }
    }


    async createPatrol(patrolDto: PatrolDto) {
        console.log(patrolDto)
        if (patrolDto.hash == null) {
            patrolDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(patrolDto)
            patrolDto.hash = genhash
            const createPatrol = new this.patrolModel(patrolDto);
            await createPatrol.save()
            return createPatrol.hash;
        } else {
            var patrols = await this.patrolModel.findOneAndUpdate({ hash: patrolDto.hash }, patrolDto)
            return patrols.hash
        }
    }

    async createPurchase(purchaseDto: PurchaseDto) {
        console.log(purchaseDto)
        if (purchaseDto.hash == null) {
            purchaseDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(purchaseDto)
            purchaseDto.hash = genhash
            const createPurchase = new this.purchaseModel(purchaseDto);
            await createPurchase.save()
            return createPurchase.hash;
        } else {
            var purchases = await this.purchaseModel.findOneAndUpdate({ hash: purchaseDto.hash }, purchaseDto)
            return purchases.hash
        }
    }


    async createUse(useDto: UseDto) {
        if (useDto.hash == null) {
            useDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(useDto)
            useDto.hash = genhash
            const createUse = new this.useModel(useDto);
            await createUse.save()
            return createUse.hash;
        } else {
            var uses = await this.useModel.findOneAndUpdate({ hash: useDto.hash }, useDto)
            return uses.hash
        }
    }

    async createPlan(planDto: PlanDto) {
        if (planDto.hash == null) {
            planDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(planDto)
            planDto.hash = genhash
            const createPlan = new this.planModel(planDto);
            await createPlan.save()
            return createPlan.hash;
        } else {
            var plans = await this.planModel.findOneAndUpdate({ hash: planDto.hash }, planDto)
            return plans.hash
        }
    }

    async createDevice(deviceDto: DeviceDto) {
        if (deviceDto.hash == null) {
            deviceDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(deviceDto)
            deviceDto.hash = genhash
            const createDevice = new this.deviceModel(deviceDto);
            await createDevice.save()
            return createDevice.hash;
        } else {
            var devices = await this.deviceModel.findOneAndUpdate({ hash: deviceDto.hash }, deviceDto)
            return devices.hash
        }
    }


    async fixDevice(deviceFixDto: DeviceFixDto) {
        if (deviceFixDto.hash == null) {
            deviceFixDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(deviceFixDto)
            deviceFixDto.hash = genhash
            const createDeviceFix = new this.deviceFixModel(deviceFixDto);
            await createDeviceFix.save()
            return createDeviceFix.hash;
        } else {
            var deviceFixs = await this.deviceFixModel.findOneAndUpdate({ hash: deviceFixDto.hash }, deviceFixDto)
            return deviceFixs.hash
        }
    }

    async monitorDevice(deviceMonitorDto: DeviceMonitorDto) {
        if (deviceMonitorDto.hash == null) {
            deviceMonitorDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(deviceMonitorDto)
            deviceMonitorDto.hash = genhash
            const createDeviceMonitor = new this.deviceMonitorModel(deviceMonitorDto);
            await createDeviceMonitor.save()
            return createDeviceMonitor.hash;
        } else {
            var deviceMonitors = await this.deviceMonitorModel.findOneAndUpdate({ hash: deviceMonitorDto.hash }, deviceMonitorDto)
            return deviceMonitors.hash
        }
    }

    async switchDevice(deviceSwitchDto: DeviceSwitchDto) {
        if (deviceSwitchDto.hash == null) {
            deviceSwitchDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(deviceSwitchDto)
            deviceSwitchDto.hash = genhash
            const createDeviceSwitch = new this.deviceSwitchModel(deviceSwitchDto);
            await createDeviceSwitch.save()
            return createDeviceSwitch.hash;
        } else {
            var deviceSwitchs = await this.deviceSwitchModel.findOneAndUpdate({ hash: deviceSwitchDto.hash }, deviceSwitchDto)
            return deviceSwitchs.hash
        }
    }
}
