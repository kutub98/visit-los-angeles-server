// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IVideo } from './video.interface';

const videoSchema: Schema<IVideo> = new mongoose.Schema({
  video_title: {
    type: String,
    required: true,
  },
  video_description: {
    type: String,
    required: true,
  },
  video_link: {
    type: String,
    required: true,
  }
});

export const Video = mongoose.model<IVideo>('video', videoSchema);
