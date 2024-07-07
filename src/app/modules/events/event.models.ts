import mongoose, { Schema, Document } from 'mongoose';
import { IEvents } from './event.interface';



const AdditionalInfoSchema: Schema = new Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
});

const EventsSchema: Schema = new Schema({


    event_title: { type: String, required: true },
    event_description: { type: String, required: true },
    event_link: { type: String, required: true },
    event_image: { type: String, required: true },
    location: { type: String},
    phone_number: { type: Number},
    category: { type: String},
    start_date: { type: String},
    end_date: { type: String},
    start_time: { type: String},
    end_time: { type: String},
    contact_info: { type: String},
    additional_info: { type: [AdditionalInfoSchema] }
});

export const Event = mongoose.model<IEvents & Document>('events', EventsSchema);

