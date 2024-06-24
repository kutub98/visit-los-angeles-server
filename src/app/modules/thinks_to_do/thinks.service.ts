// src/services/thinksToDo.service.ts

import { ThinksToDo } from "./thinks.interface";
import { ThinsToDo } from "./thinks.model";



const createThinksToDo = async (thinksToDo: ThinksToDo) => {
  const newThinksToDo = new ThinsToDo(thinksToDo);
  return await newThinksToDo.save();
};

const findThinksToDoById = async (thinksToDoId: string) => {
  return await ThinsToDo.findById(thinksToDoId);
};

const getAllThinksToDos = async (query: Record<string, unknown>) => {
  return await ThinsToDo.find(query);
};

const updateThinksToDoById = async (thinksToDoId: string, payload: Partial<ThinksToDo>) => {
  return await ThinsToDo.findByIdAndUpdate(thinksToDoId, payload, { new: true });
};

const deleteThinksToDoById = async (thinksToDoId: string) => {
  return await ThinsToDo.findByIdAndDelete(thinksToDoId);
};

export const ThinksToDoService = {
  createThinksToDo,
  findThinksToDoById,
  getAllThinksToDos,
  updateThinksToDoById,
  deleteThinksToDoById,
};
