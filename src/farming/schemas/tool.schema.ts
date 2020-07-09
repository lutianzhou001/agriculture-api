import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tool extends Document {
    @Prop()
    did: string;

    @Prop()
    name: string;

    @Prop()
    spec: string;

    @Prop()
    unit: string;

    @Prop()
    type: string;

    @Prop()
    standard: string;

    @Prop()
    ctime: Date;
}

export const ToolSchema = SchemaFactory.createForClass(Tool);