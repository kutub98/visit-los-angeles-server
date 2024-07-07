import { ISlider } from "./slider.interface";
import { Slider } from "./slider.models";


const createSlider = async (sliderData: ISlider) => {
  const newSlider = new Slider(sliderData);
  return await newSlider.save();
};

const findSliderById = async (sliderId: string) => {
  return await Slider.findById(sliderId);
};

const getAllSliders = async (query: Record<string, unknown> = {}) => {
  return await Slider.find(query);
};

const updateSliderById = async (sliderId: string, payload: Partial<ISlider>) => {
  return await Slider.findByIdAndUpdate(sliderId, payload, { new: true });
};

const deleteSliderById = async (sliderId: string) => {
  return await Slider.findByIdAndDelete(sliderId);
};

export const SliderService = {
  createSlider,
  findSliderById,
  getAllSliders,
  updateSliderById,
  deleteSliderById,
};
