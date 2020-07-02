import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Device extends Document {
    @Prop()
    hash: string;

    @Prop()
    deviceSN: string;

    @Prop()
    deviceName: string

    @Prop()
    description: string;

    @Prop()
    type: string;

    @Prop()
    deviceType: string;

    @Prop()
    ctime: Date;

    @Prop()
    installTime: Date;

    @Prop()
    installAddress: string;

    @Prop()
    factory: string;

    @Prop()
    baseHash: string;

    @Prop()
    greenhouseHash: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);