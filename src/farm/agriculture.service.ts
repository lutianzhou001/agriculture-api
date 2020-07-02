import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producer } from './schemas/producer.schema';
import { Greenhouse } from './schemas/greenhouse.schema';
import { Base } from './schemas/base.schema';
import { Crop } from './schemas/crop.schema';
import { Patrol } from './schemas/patrol.schema';
import { Purchase } from './schemas/purchase.schema';
import { ProducerDto } from './dto/producer.dto';
import { GreenhouseDto } from './dto/greenhouse.dto';
import { BaseDto } from './dto/base.dto';
import { CropDto } from './dto/crop.dto';
import { PatrolDto } from './dto/patrol.dto';
import { PurchaseDto } from './dto/puchase.dto';
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
            return producers[0].hash
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
            return gh[0]
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
            try {
                var bases = await this.baseModel.findOneAndUpdate({ hash: baseDto.hash }, baseDto)
            }
            catch (error) {
                console.log(error)
            }
            console.log(bases)
            return bases[0].hash
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
            return crops[0].hash
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
            return patrols[0].hash
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
            return purchases[0].hash
        }
    }
}
