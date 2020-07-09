import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Patrol extends Document {
    @Prop()
    hash: string;

    @Prop()
    producerHash: string;

    @Prop()
    producerName: string;

    @Prop()
    description: string;

    @Prop()
    farmHash: string;

    @Prop()
    rentHash: string;

    @Prop()
    planHash: string;
}

export const PatrolSchema = SchemaFactory.createForClass(Patrol);