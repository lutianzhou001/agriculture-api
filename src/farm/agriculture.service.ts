import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producer } from './schemas/producer.schema';
import { Greenhouse } from './schemas/greenhouse.schema';
import { ProducerDto } from './dto/producer.dto';
import { GreenhouseDto } from './dto/greenhouse.dto';
const hash = require('object-hash');

@Injectable()
export class AgricultureService {
    constructor(@InjectModel(Producer.name) private producerModel: Model<Producer>, @InjectModel(Greenhouse.name) private greenhouseModel: Model<Greenhouse>) { }

    async createProducer(producerDto: ProducerDto) {
        console.log(producerDto)
        if (producerDto.hash == null) {
            var genhash = hash(producerDto)
            producerDto.hash = genhash
            const createProducer = new this.producerModel(producerDto);
            await createProducer.save()
            return createProducer.hash;
        } else {
            var producers = await this.producerModel.find({ hash: producerDto.hash })
            return producers[0].hash
        }
    }

    async createGreenhouse(greenhouseDto: GreenhouseDto) {
        if (greenhouseDto.hash == null) {
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

}
