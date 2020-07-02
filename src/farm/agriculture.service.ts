import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producer } from './schemas/producer.schema';
import { ProducerDto } from './dto/producer.dto';

@Injectable()
export class AgricultureService {
    constructor(@InjectModel(Producer.name) private producerModel: Model<Producer>) { }

    async createProducer(producerDto: ProducerDto) {
        if (producerDto.hash == null) {

            console.log(producerDto.identityCard)
        }
        const createProducer = new this.producerModel(producerDto);
        console.log('testcreate')
        return createProducer.save();
    }

}
