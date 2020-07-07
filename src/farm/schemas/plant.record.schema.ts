import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PlantRecord extends Document {
    @Prop()
    hash: string;

    @Prop()
    plantDid: string;

    @Prop()
    baseHash: string;

    @Prop()
    greenhouseHash: string;

    @Prop()
    planHash: string;

    @Prop()
    producerHash: string;

    @Prop()
    producerName: string;

    @Prop()
    recordType: string;

    @Prop()
    batchNum: number;

    @Prop()
    outDirection: string;

    @Prop()
    logisticsInfo: string;

    @Prop()
    linkPeople: string;

    @Prop()
    linkMobile: string;

    @Prop()
    allNumber: string;

    @Prop()
    number: string;

    @Prop()
    price: string;

    @Prop()
    oddNumber: string;

    @Prop()
    wrapper: string;

    @Prop()
    operator: string;

    @Prop()
    reportLoss: string;

    @Prop()
    inputTime: Date;

    @Prop()
    outAddress: string;

    @Prop()
    isZt: boolean;

    @Prop()
    sellUser: string;
}

export const PlantRecordSchema = SchemaFactory.createForClass(PlantRecord);