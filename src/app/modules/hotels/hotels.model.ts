import mongoose, { Schema, Document } from 'mongoose';
import { IHotel } from './hotels.interface';


const AdditionalInfoSchema: Schema = new Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
});

const HotelSchema: Schema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    phone_number: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    time_hour: { type: String, required: true },
    meeting_space: { type: String, required: true },
    additional_info: { type: [AdditionalInfoSchema] }
});

export const Hotel = mongoose.model<IHotel & Document>('Hotel', HotelSchema);
