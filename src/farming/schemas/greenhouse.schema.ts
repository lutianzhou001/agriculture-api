import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Greenhouse extends Document {
    @Prop()
    hash: string;

    @Prop()
    baseHash: string

    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    location: string;

    @Prop()
    centre: string;

    @Prop()
    area: number;

    @Prop()
    ctime: Date
}

export const GreenhouseSchema = SchemaFactory.createForClass(Greenhouse);