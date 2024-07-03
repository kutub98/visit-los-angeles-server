// src/controllers/ad.controller.ts

import { Request, Response } from 'express';
import { AdService } from './ad.service';
import { isErrorWithMessage } from '../../utils/Error';

 const createAd = async (req: Request, res: Response) => {
  try {
    const ad = await AdService.createAd(req.body);
    res.status(201).json(ad);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getAdById = async (req: Request, res: Response) => {
  try {
    const ad = await AdService.findAdById(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.status(200).json(ad);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getAllAds = async (req: Request, res: Response) => {
  try {
    const ads = await AdService.getAllAds(req.query);
    res.status(200).json(ads);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const updateAdById = async (req: Request, res: Response) => {
  try {
    const ad = await AdService.updateAdById(req.params.id, req.body);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.status(200).json(ad);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const deleteAdById = async (req: Request, res: Response) => {
  try {
    const ad = await AdService.deleteAdById(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
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



export const adController = {
    createAd,
    getAdById,
    getAllAds,
    updateAdById,
    deleteAdById
}