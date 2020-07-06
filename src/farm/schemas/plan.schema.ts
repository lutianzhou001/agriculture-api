import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Plan extends Document {
    @Prop()
    hash: string;

    @Prop()
    baseHash: string;

    @Prop()
    greenhouseHash: string;

    @Prop()
    plantDid: string;

    @Prop()
    amount: number;

    @Prop()
    area: number;

    @Prop()
    workGrowthId: string;

    @Prop()
    workName: string;

    @Prop()
    workDescription: string;

    @Prop()
    productionExpection: string;

    @Prop()
    harvestTime: Date;

    @Prop()
    plantingCycle: {
        name: string;

        startTime: Date;

        endTime: Date;
    }[];
}

export const PlanSchema = SchemaFactory.createForClass(Plan);