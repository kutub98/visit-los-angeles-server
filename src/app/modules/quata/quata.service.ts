import { IQuata } from "./quata.interface";
import { Quata } from "./quata.models";


const createQuata = async (quataData: IQuata) => {
  const newQuata = new Quata(quataData);
  return await newQuata.save();
};

const findQuataById = async (quataId: string) => {
  return await Quata.findById(quataId);
};

const getAllQuatas = async (query: Record<string, unknown> = {}) => {
  return await Quata.find(query);
};

const updateQuataById = async (quataId: string, payload: Partial<IQuata>) => {
  return await Quata.findByIdAndUpdate(quataId, payload, { new: true });
};

const deleteQuataById = async (quataId: string) => {
  return await Quata.findByIdAndDelete(quataId);
};

export const QuataService = {
  createQuata,
  findQuataById,
  getAllQuatas,
  updateQuataById,
  deleteQuataById,
};
