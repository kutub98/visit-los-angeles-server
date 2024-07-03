import { Request, Response } from 'express';
import { EventService } from './event.service';

export const createEvent = async (req: Request, res: Response) => {
    try {
        const event = await EventService.createEvent(req.body);
        res.status(201).json({ success: true, message: 'Event created successfully', event });
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ success: false, message: err.message });
        } else {
            res.status(400).json({ success: false, message: 'An unknown error occurred' });
        }
    }
};

export const getEventById = async (req: Request, res: Response) => {
    try {
        const event = await EventService.findEventById(req.params.eventId);
        if (event) {
            res.status(200).json({ success: true, message: 'Event retrieved successfully', event });
        } else {
            res.status(404).json({ success: false, message: 'Event not found' });
        }
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ success: false, message: err.message });
        } else {
            res.status(400).json({ success: false, message: 'An unknown error occurred' });
        }
    }
};

export const getAllEvents = async (req: Request, res: Response) => {
    try {
        const events = await EventService.getAllEvents(req.query);
        res.status(200).json({ success: true, message: 'Events retrieved successfully', events });
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ success: false, message: err.message });
        } else {
            res.status(400).json({ success: false, message: 'An unknown error occurred' });
        }
    }
};

export const updateEventById = async (req: Request, res: Response) => {
    try {
        const event = await EventService.updateEventById(req.params.eventId, req.body);
        if (event) {
            res.status(200).json({ success: true, message: 'Event updated successfully', event });
        } else {
            res.status(404).json({ success: false, message: 'Event not found' });
        }
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ success: false, message: err.message });
        } else {
            res.status(400).json({ success: false, message: 'An unknown error occurred' });
        }
    }
};

export const deleteEventById = async (req: Request, res: Response) => {
    try {
        const event = await EventService.deleteEventById(req.params.eventId);
        if (event) {
            res.status(200).json({ success: true, message: 'Event deleted successfully', event });
        } else {
            res.status(404).json({ success: false, message: 'Event not found' });
        }
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ success: false, message: err.message });
        } else {
            res.status(400).json({ success: false, message: 'An unknown error occurred' });
        }
    }
};
