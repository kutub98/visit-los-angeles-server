// src/controllers/slider.controller.ts

import { Request, Response } from 'express';
import { SliderService } from './slider.service';
import { isErrorWithMessage } from '../../utils/Error';

 const createSlider = async (req: Request, res: Response) => {
  try {
    const slider = await SliderService.createSlider(req.body);
    res.status(201).json(slider);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getSliderById = async (req: Request, res: Response) => {
  try {
    const slider = await SliderService.findSliderById(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: 'Slider not found' });
    }
    res.status(200).json(slider);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getAllSliders = async (req: Request, res: Response) => {
  try {
    const sliders = await SliderService.getAllSliders(req.query);
    res.status(200).json(sliders);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const updateSliderById = async (req: Request, res: Response) => {
  try {
    const slider = await SliderService.updateSliderById(req.params.id, req.body);
    if (!slider) {
      return res.status(404).json({ message: 'Slider not found' });
    }
    res.status(200).json(slider);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const deleteSliderById = async (req: Request, res: Response) => {
  try {
    const slider = await SliderService.deleteSliderById(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: 'Slider not found' });
    }
    res.status(204).json();
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};


export const sliderController ={
    createSlider,
    getAllSliders,
    getSliderById,
    updateSliderById,
    deleteSliderById
}