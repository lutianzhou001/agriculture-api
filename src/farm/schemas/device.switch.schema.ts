import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DeviceSwitch extends Document {
    @Prop()
    hash: string;

    @Prop()
    deviceHash: string;

    @Prop()
    greenhousehash: string;

    @Prop()
    startTime: number;

    @Prop()
    endTime: number;

    @Prop()
    duration: number
}

export const DeviceSwitchSchema = SchemaFactory.createForClass(DeviceSwitch);