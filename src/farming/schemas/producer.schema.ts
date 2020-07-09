import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Producer extends Document {
    @Prop()
    hash: string;

    @Prop()
    name: string;

    @Prop()
    identityCard: string;

    @Prop()
    phone: string;

    @Prop()
    position: string;

    @Prop()
    baseHashs: string[];
}

export const ProducerSchema = SchemaFactory.createForClass(Producer);