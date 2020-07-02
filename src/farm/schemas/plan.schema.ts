import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Plan extends Document {
    @Prop()
    hash: string;

    @Prop()
    baseHash: string;

    @Prop()
    landDid: string;

    @Prop()
    greenhouseHash: string;

    @Prop()
    plantDid: string;

    @Prop()
    workGrowthId: string;

    @Prop()
    workName: string;

    @Prop()
    workDescription: string;

    @Prop()
    productionExpection: string;

    @Prop()
    harvestTime: string;

    @Prop()
    startTime: Date;

    @Prop()
    endTime: Date
}

export const PlanSchema = SchemaFactory.createForClass(Plan);