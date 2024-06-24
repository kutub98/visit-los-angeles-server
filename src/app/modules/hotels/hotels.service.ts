

import { IHotel } from "./hotels.interface";
import { Hotel } from "./hotels.model";

const createHotel = async (hotel: IHotel) => {
    const newHotel = new Hotel(hotel);
    return await newHotel.save();
};

const findHotelById = async (hotelId: string) => {
    return await Hotel.findById(hotelId).exec();
};

const getAllHotels = async (query: Record<string, unknown>) => {
    return await Hotel.find(query).exec();
};

const updateHotelById = async (hotelId: string, payload: Partial<IHotel>) => {
    return await Hotel.findByIdAndUpdate(hotelId, payload, { new: true }).exec();
};

const deleteHotelById = async (hotelId: string) => {
    return await Hotel.findByIdAndDelete(hotelId).exec();
};

export const HotelService = {
    createHotel,
    findHotelById,
    getAllHotels,
    updateHotelById,
    deleteHotelById,
};
