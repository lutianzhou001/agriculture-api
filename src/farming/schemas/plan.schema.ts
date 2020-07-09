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
    seedsNumber: number;

    @Prop()
    amount: number;

    @Prop()
    area: number;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    productionExpection: string;

    @Prop()
    harvestTime: Date;

    @Prop()
    plantingCycles: {
        name: string;

        startTime: Date;

        endTime: Date;
    }[];
}

export const PlanSchema = SchemaFactory.createForClass(Plan);