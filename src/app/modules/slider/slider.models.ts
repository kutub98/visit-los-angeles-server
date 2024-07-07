// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { ISlider } from './slider.interface';

const sliderSchema: Schema<ISlider> = new mongoose.Schema({
  slider_image: {
    type: String,
    required: true,
  },
});

export const Slider = mongoose.model<ISlider>('slider', sliderSchema);
