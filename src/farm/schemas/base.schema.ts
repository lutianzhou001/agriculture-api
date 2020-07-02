import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Base extends Document {
    @Prop()
    hash: string;

    @Prop()
    name: string;

    @Prop()
    location: string;

    @Prop()
    centre: string;

    @Prop()
    area: string;

    @Prop()
    altitude: number;

    @Prop()
    ownerDid: string;

    @Prop()
    ownerAddress: string

    @Prop()
    ownerName: string;

    @Prop()
    baseAddress: string;

    @Prop()
    contact: string;

    @Prop()
    phone: string;

    @Prop()
    identityCard: string;
}

export const BaseSchema = SchemaFactory.createForClass(Base);