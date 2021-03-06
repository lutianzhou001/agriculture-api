import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Use extends Document {
    @Prop()
    hash: string;

    @Prop()
    toolDid: string;

    @Prop()
    user: string;

    @Prop()
    useTime: Date;

    @Prop()
    remark: string;

    @Prop()
    spec: string;
}

export const UseSchema = SchemaFactory.createForClass(Use);