import express from 'express';
import {
  createEvent,
  getEventById,
  getAllEvents,
  updateEventById,
  deleteEventById,
} from './event.controller';

const router = express.Router();

router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:eventId', getEventById);
router.put('/:eventId', updateEventById);
router.delete('/:eventId', deleteEventById);

export const EventRouter = router;
