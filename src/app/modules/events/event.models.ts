import mongoose, { Schema, Document } from 'mongoose';
import { IEvents } from './event.interface';



const AdditionalInfoSchema: Schema = new Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
});

const EventsSchema: Schema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    phone_number: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    contact_info: { type: String, required: true },
    additional_info: { type: [AdditionalInfoSchema] }
});

export const Event = mongoose.model<IEvents & Document>('events', EventsSchema);
