import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Enterprise extends Document {
    @Prop()
    hash: string;

    @Prop()
    did: string;

    @Prop()
    name: string;

    @Prop()
    creaditCode: string;

    @Prop()
    address: string;

    @Prop()
    owner: string;

    @Prop()
    ownerId: string;

    @Prop()
    contact: string;

    @Prop()
    phone: string;

    @Prop()
    ctime: Date;

    @Prop()
    baseAddress: string;

    @Prop()
    plantingArea: string;

    @Prop()
    plants: string[];
}

export const EnterpriseSchema = SchemaFactory.createForClass(Enterprise);