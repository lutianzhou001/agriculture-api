import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Field extends Document {
    @Prop()
    hash: string;

    @Prop()
    baseHash: string

    @Prop()
    fieldName: string;

    @Prop()
    fieldModel: string;

    @Prop()
    location: string;

    @Prop()
    centre: string;

    @Prop()
    area: number;

    @Prop()
    ctime: Date
}

export const FieldSchema = SchemaFactory.createForClass(Field);