import { IAd } from "./ad.interface";
import { Ad } from "./ad.models";


const createAd = async (adData: IAd) => {
  const newAd = new Ad(adData);
  return await newAd.save();
};

const findAdById = async (adId: string) => {
  return await Ad.findById(adId);
};

const getAllAds = async (query: Record<string, unknown> = {}) => {
  return await Ad.find(query);
};

const updateAdById = async (adId: string, payload: Partial<IAd>) => {
  return await Ad.findByIdAndUpdate(adId, payload, { new: true });
};

const deleteAdById = async (adId: string) => {
  return await Ad.findByIdAndDelete(adId);
};

export const AdService = {
  createAd,
  findAdById,
  getAllAds,
  updateAdById,
  deleteAdById,
};
