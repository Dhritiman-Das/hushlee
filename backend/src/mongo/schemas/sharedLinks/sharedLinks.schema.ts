import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'Shared-links' })
export class SharedLinks {
  @Prop({ required: true })
  owner: string;
  @Prop({ required: false, default: false })
  verified: boolean;
  @Prop({ required: false, default: 5 })
  msgLimit: string;
}

export const SharedLinksSchema = SchemaFactory.createForClass(SharedLinks);
