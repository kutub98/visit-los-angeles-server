// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IMenu } from './menu.interface';

const AdditionalInfoSchema: Schema = new Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
});
const menuSchema: Schema<IMenu> = new mongoose.Schema({
  hadline: {
    type: String,
    required: true,
  },
  hadline_image: {
    type: String,
  },
  short_headline: {
    type: String,
  },
  category: {
    type: String,
  },
  sub_category: {
    type: String,
  },
  category_description: {
    type: String,
  },
  category_image: {
    type: String,
  },
  sub_category_image: {
    type: String,
  },
  category_type: {
    type: String,
  },
  date_and_time: {
    type: String,
  },
  location: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  metting_space: {
    type: String,
  },
  additional_info: { type: [AdditionalInfoSchema] },
});

export const Menu = mongoose.model<IMenu>('menu', menuSchema);
