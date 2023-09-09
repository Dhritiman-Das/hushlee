import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'Shared-links' })
export class SharedLinks {
  @Prop({ required: true })
  owner: string;
  @Prop({ required: true, default: () => new Date().toISOString() })
  name: string;
  @Prop({ required: false, default: false })
  verified: boolean;
  @Prop({ required: false, default: 5 })
  msgLimit: number;
}

export const SharedLinksSchema = SchemaFactory.createForClass(SharedLinks);
