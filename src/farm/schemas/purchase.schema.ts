import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Purchase extends Document {
    @Prop()
    hash: string;

    @Prop()
    enterpriseDid: string;

    @Prop()
    toolDid: string;

    @Prop()
    supplierId: string;

    @Prop()
    recordType: string;

    @Prop()
    payType: number;

    @Prop()
    price: number;

    @Prop()
    amount: number;

    @Prop()
    isPaid: string;

    @Prop()
    stored: string;

    @Prop()
    standard: string;

    @Prop()
    supplierName: string;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);