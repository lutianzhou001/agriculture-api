import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DeviceFix extends Document {
    @Prop()
    hash: string;

    @Prop()
    deviceHash: string;

    @Prop()
    fixCompany: string

    @Prop()
    fixName: string;

    @Prop()
    fixMobile: string;

    @Prop()
    fixTime: Date;
}

export const DeviceFixSchema = SchemaFactory.createForClass(DeviceFix);