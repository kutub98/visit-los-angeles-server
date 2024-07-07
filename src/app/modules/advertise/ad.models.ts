import mongoose, { Schema } from 'mongoose';
import { IAd } from './ad.interface';

const adSchema: Schema<IAd> = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
});

export const Ad = mongoose.model<IAd>('advertise', adSchema);
