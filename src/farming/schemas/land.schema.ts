import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Land extends Document {
    @Prop()
    did: string;

    @Prop()
    name: string;

    @Prop()
    location: string;

    @Prop()
    waringWaterLevel: string;

    @Prop()
    area: string;
}

export const LandSchema = SchemaFactory.createForClass(Land);