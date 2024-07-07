import { IEvents } from './event.interface';
import { Event } from './event.models';

const createEvent = async (event: IEvents) => {
    const newEvent = new Event(event);
    return await newEvent.save();
};

const findEventById = async (eventId: string) => {
    return await Event.findById(eventId).exec();
};

const getAllEvents = async (query: Record<string, unknown>) => {
    return await Event.find(query).exec();
};

const updateEventById = async (eventId: string, payload: Partial<IEvents>) => {
    return await Event.findByIdAndUpdate(eventId, payload, { new: true }).exec();
};

const deleteEventById = async (eventId: string) => {
    return await Event.findByIdAndDelete(eventId).exec();
};

export const EventService = {
    createEvent,
    findEventById,
    getAllEvents,
    updateEventById,
    deleteEventById,
};
