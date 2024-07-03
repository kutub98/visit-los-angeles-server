// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IMenu } from './menu.interface';

const menuSchema: Schema<IMenu> = new mongoose.Schema({
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
  image: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
  },
  category: {
    type: String,
    enum: [
      'thinks_to_do',
      'eat_and_drinks',
      'find_event',
      'Itineraries',
      'where_to_stay',
      'celebrate_la_heritage',
      'tourist_information',
      'meetings',
      'about_la_tourism',
    ],
  },
  sub_category: {
    type: String,
  },
  time_hour: {
    type: String,
  },
  metting_space: {
    type: String,
  },
});

export const Menu = mongoose.model<IMenu>('menu', menuSchema);
