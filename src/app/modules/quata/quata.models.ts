// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IQuata } from './quata.interface';

const quataSchema: Schema<IQuata> = new mongoose.Schema({
  quata: {
    type: String,
    required: true,
  },
  writer_name: {
    type: String,
    required: true,
  },
 
});

export const Quata = mongoose.model<IQuata>('quata', quataSchema);
