// src/controllers/quata.controller.ts

import { Request, Response } from 'express';
import { QuataService } from './quata.service';
import { isErrorWithMessage } from '../../utils/Error';

 const createQuata = async (req: Request, res: Response) => {
  try {
    const quata = await QuataService.createQuata(req.body);
    res.status(201).json(quata);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getQuataById = async (req: Request, res: Response) => {
  try {
    const quata = await QuataService.findQuataById(req.params.id);
    if (!quata) {
      return res.status(404).json({ message: 'Quata not found' });
    }
    res.status(200).json(quata);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getAllQuatas = async (req: Request, res: Response) => {
  try {
    const quatas = await QuataService.getAllQuatas(req.query);
    res.status(200).json(quatas);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const updateQuataById = async (req: Request, res: Response) => {
  try {
    const quata = await QuataService.updateQuataById(req.params.id, req.body);
    if (!quata) {
      return res.status(404).json({ message: 'Quata not found' });
    }
    res.status(200).json(quata);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const deleteQuataById = async (req: Request, res: Response) => {
  try {
    const quata = await QuataService.deleteQuataById(req.params.id);
    if (!quata) {
      return res.status(404).json({ message: 'Quata not found' });
    }
    res.status(204).json();
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

export const quataController  = {
    createQuata,
    getQuataById,
    getAllQuatas,
    updateQuataById,
    deleteQuataById
}