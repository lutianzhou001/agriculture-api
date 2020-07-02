import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Greenhouse extends Document {
    @Prop()
    hash: string;

    @Prop()
    greenhouseName: string;

    @Prop()
    greenhouseModel: string;

    @Prop()
    location: string;

    @Prop()
    centre: string;

    @Prop()
    area: number;

    @Prop()
    type: string;

    @Prop()
    ctime: Date
}

export const GreenhouseSchema = SchemaFactory.createForClass(Greenhouse);