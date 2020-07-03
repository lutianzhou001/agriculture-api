import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Plant extends Document {
    @Prop()
    did: string;

    @Prop()
    hash: string;

    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    unit: string;

    @Prop()
    ctime: Date;

    @Prop()
    days: number;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);