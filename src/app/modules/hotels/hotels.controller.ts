import { Request, Response } from 'express';
import { HotelService } from './hotels.service';
import { IHotel } from './hotels.interface';

const createHotel = async (req: Request, res: Response) => {
  try {
    const hotelData: IHotel = req.body;
    const newHotel = await HotelService.createHotel(hotelData);
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const findHotelById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const hotel = await HotelService.findHotelById(id);
    if (hotel) {
      res.status(200).json(hotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllHotels = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const hotels = await HotelService.getAllHotels(query);
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateHotelById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const hotelData: Partial<IHotel> = req.body;
    const updatedHotel = await HotelService.updateHotelById(id, hotelData);
    if (updatedHotel) {
      res.status(200).json(updatedHotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteHotelById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedHotel = await HotelService.deleteHotelById(id);
    if (deletedHotel) {
      res.status(200).json(deletedHotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const HotelController = {
  createHotel,
  findHotelById,
  getAllHotels,
  updateHotelById,
  deleteHotelById,
};
