// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { ThinksToDo } from './thinks.interface';
// import { IUser } from './user.interface';

const userSchema: Schema<ThinksToDo> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sub_description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
  },
  category: {
    type: String,
  },
  time_hour: {
    type: String,
  },
  metting_space: {
    type: String,
  },
});

export const ThinsToDo = mongoose.model<ThinksToDo>('Thinks_to_do', userSchema);
