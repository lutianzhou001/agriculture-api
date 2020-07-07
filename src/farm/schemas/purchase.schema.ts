import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Purchase extends Document {
    @Prop()
    hash: string;

    @Prop()
    baseHash: string;

    @Prop()
    toolDid: string;

    @Prop()
    recordType: string;

    @Prop()
    payType: number;

    @Prop()
    price: number;

    @Prop()
    amount: number;

    @Prop()
    isPaid: boolean;

    @Prop()
    stored: boolean;

    @Prop()
    standard: string;

    @Prop()
    agriculturalStoreName: string;

    @Prop()
    supplierName: string;

    @Prop()
    purchaseTime: Date;

    @Prop()
    picUrls: string[];
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);