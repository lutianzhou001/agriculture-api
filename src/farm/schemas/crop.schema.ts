import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Crop extends Document {
    @Prop()
    hash: string

    @Prop()
    greenhouseHash: string;

    @Prop()
    greenhouseName: string;

    @Prop()
    plantName: string;

    @Prop()
    plantDid: string;

    @Prop()
    workHash: string;

    @Prop()
    producerName: string;

    @Prop()
    producerHash: string;

    @Prop()
    producerPhone: string;

    @Prop()
    status: string

    @Prop()
    toolDid: string;

    @Prop()
    toolName: string;

    @Prop()
    toolAmount: number;

    @Prop()
    traffic: string;

    @Prop()
    startTime: Date;

    @Prop()
    endTime: Date;

    @Prop()
    waterAmount: string;

    @Prop()
    waterStatus: string
}

export const CropSchema = SchemaFactory.createForClass(Crop);