import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DeviceMonitor extends Document {
    @Prop()
    hash: string;

    @Prop()
    deviceHash: string;

    @Prop()
    greenhouseHash: string;

    @Prop()
    temperture: number;

    @Prop()
    humidity: string;

    @Prop()
    light: string;

    @Prop()
    co2: string;

    @Prop()
    ctime: string;

    @Prop()
    value0: string;

    @Prop()
    value1: string;

    @Prop()
    value2: string;

    @Prop()
    value3: string;

    @Prop()
    value4: string;

    @Prop()
    value5: string;

    @Prop()
    value6: string;

    @Prop()
    value7: string;

    @Prop()
    value8: string;

    @Prop()
    value9: string;
}

export const DeviceMonitorSchema = SchemaFactory.createForClass(DeviceMonitor);