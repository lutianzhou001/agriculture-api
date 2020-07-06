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
    planHash: string;

    @Prop()
    producerName: string;

    @Prop()
    producerHash: string;

    @Prop()
    producerPhone: string;

    @Prop()
    status: string

    @Prop()
    tools: {
        toolDid: string;

        toolName: string;

        toolAmount: number;
    }[];

    @Prop()
    traffic: string;

    @Prop()
    startTime: Date;

    @Prop()
    endTime: Date;

    @Prop()
    cropTime: Date;

    @Prop()
    waterAmount: string;

    @Prop()
    videoUrls: string[];

    @Prop()
    picUrls: string[];

    @Prop()
    remark: string;
}

export const CropSchema = SchemaFactory.createForClass(Crop);