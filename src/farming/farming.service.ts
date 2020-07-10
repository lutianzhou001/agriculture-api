import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enterprise } from './schemas/enterprise.schema';
import { Land } from './schemas/land.schema';
import { Plant } from './schemas/plant.schema';
import { Tool } from './schemas/tool.schema';
import { Producer } from './schemas/producer.schema';
import { Greenhouse } from './schemas/greenhouse.schema';
import { Field } from './schemas/field.schema';
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
import { PlantRecord } from './schemas/plant.record.schema';
import { ProducerDto } from './dto/producer.dto';
import { GreenhouseDto } from './dto/greenhouse.dto';
import { FieldDto } from './dto/field.dto';
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
import { PlantRecordDto } from './dto/plant.record.dto';
const hash = require('object-hash');

@Injectable()
export class FarmingService {
    constructor(
        @InjectModel(Enterprise.name) private enterpriseModel: Model<Producer>,
        @InjectModel(Land.name) private landModel: Model<Land>,
        @InjectModel(Plant.name) private plantModel: Model<Plant>,
        @InjectModel(Tool.name) private toolModel: Model<Tool>,
        @InjectModel(Producer.name) private producerModel: Model<Producer>,
        @InjectModel(Greenhouse.name) private greenhouseModel: Model<Greenhouse>,
        @InjectModel(Field.name) private fieldModel: Model<Field>,
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
        @InjectModel(PlantRecord.name) private plantRecordModel: Model<PlantRecord>,
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

    async createField(fieldDto: FieldDto) {
        if (fieldDto.hash == null) {
            fieldDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(fieldDto)
            fieldDto.hash = genhash
            const createGreenhouse = new this.fieldModel(fieldDto);
            await createGreenhouse.save()
            return createGreenhouse.hash
        } else {
            var field = await this.fieldModel.findOneAndUpdate({ hash: fieldDto.hash }, fieldDto)
            return field.hash
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

    async getBaseByHash(hash) {
        return await this.baseModel.findOne({ hash: hash })
    }

    async findAllBases(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.baseModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec();
    }

    async findAllEnterprises(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.enterpriseModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec();
    }

    async findEnterpriseByDID(did) {
        return await this.enterpriseModel.findOne({ did: did })
    }

    async findAllLands(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.landModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findLandByDID(did) {
        return await this.landModel.findOne({ did: did })
    }

    async findAllGreenhouses(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.greenhouseModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findGreenhouseByHash(hash) {
        return await this.greenhouseModel.findOne({ hash: hash })
    }

    async findAllFields(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.fieldModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findFieldByHash(hash) {
        return await this.fieldModel.findOne({ hash: hash })
    }

    async findAllProducers(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.producerModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findProducerByHash(hash) {
        return await this.producerModel.findOne({ hash: hash })
    }

    async findAllPlants(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.plantModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findPlantByDID(did) {
        return await this.plantModel.findOne({ did: did })
    }

    async findAllTools(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.toolModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findToolByDID(did) {
        return await this.toolModel.findOne({ did: did })
    }

    async findAllCrops(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.cropModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findAllPlans(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.planModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findAllDevices(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.deviceModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findDeviceByHash(hash) {
        return await this.deviceModel.findOne({ hash: hash })
    }

    async createPlantRecord(plantRecordDto: PlantRecordDto) {
        if (plantRecordDto.hash == null) {
            plantRecordDto.hash = String(Math.floor((Math.random() * 10000000) + 1))
            var genhash = hash(plantRecordDto)
            plantRecordDto.hash = genhash
            const createPlantRecord = new this.plantRecordModel(plantRecordDto);
            await createPlantRecord.save()
            return createPlantRecord.hash;
        } else {
            var plantRecords = await this.plantRecordModel.findOneAndUpdate({ hash: plantRecordDto.hash }, plantRecordDto)
            return plantRecords.hash
        }
    }

    async findAllPlantRecords(query) {
        if (query.offset === null) { query.offset = 0 }
        if (query.limit === null) { query.limit = 20 }
        return await this.plantRecordModel.find().skip(Number(query.offset)).limit(Number(query.limit)).exec()
    }

    async findPlantRecordByHash(hash) {
        return await this.plantRecordModel.findOne({ hash: hash })
    }

    async getEvidencesList(query) {
        if (query.type === 'enterprises') {
            return await this.findAllEnterprises(query);
        } else if (query.type === 'greenhouses') {
            return await this.findAllGreenhouses(query);
        } else if (query.type === 'fields') {
            return await this.findAllFields(query);
        } else if (query.type === 'bases') {
            return await this.findAllBases(query);
        } else if (query.type === 'plants') {
            return await this.findAllPlants(query);
        } else if (query.type === 'plans') {
            return await this.findAllPlans(query);
        } else if (query.type === 'tools') {
            return await this.findAllTools(query);
        } else if (query.type === 'crops') {
            return await this.findAllCrops(query);
        } else if (query.type === 'devices') {
            return await this.findAllDevices(query);
        }
    }
}
