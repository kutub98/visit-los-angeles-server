import express from 'express';
import { HotelController } from './hotels.controller';


const router = express.Router();

router.post('/', HotelController.createHotel);
router.get('/', HotelController.getAllHotels);
router.get('/:id', HotelController.findHotelById);
router.put('/:id', HotelController.updateHotelById);
router.delete('/:id', HotelController.deleteHotelById);

export const HotelsRoutes = router;
