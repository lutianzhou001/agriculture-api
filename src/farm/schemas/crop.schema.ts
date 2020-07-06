import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/*@Schema()
class Tools extends Document {
    @Prop()
    toolDid: string;

    @Prop()
    toolName: string;

    @Prop()
    toolAmount: number;

            toolDid: {
            valid: string,
        },
        toolName: {
            valid: string,
        },
        toolAmount: {
            valid: number,
        }
}


var tool = new Tools*/
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
    toolDid: string;

    @Prop()
    toolName: string;

    @Prop()
    toolAmount: number;

    @Prop()
    tool: {
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
    videoUrl: string;

    @Prop()
    picUrl: string;

    @Prop()
    remark: string;
}

export const CropSchema = SchemaFactory.createForClass(Crop);