// src/controllers/thinksToDo.controller.ts

import { Request, Response } from 'express';
import { ThinksToDo } from './thinks.interface';
import { ThinksToDoService } from './thinks.service';


const createThinksToDo = async (req: Request, res: Response) => {
  try {
    const thinksToDoData: ThinksToDo = req.body;
    const newThinksToDo = await ThinksToDoService.createThinksToDo(thinksToDoData);
    res.status(201).json(newThinksToDo);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const findThinksToDoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const thinksToDo = await ThinksToDoService.findThinksToDoById(id);
    if (thinksToDo) {
      res.status(200).json(thinksToDo);
    } else {
      res.status(404).json({ message: 'Thinks to do not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllThinksToDos = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const thinksToDos = await ThinksToDoService.getAllThinksToDos(query);
    res.status(200).json(thinksToDos);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateThinksToDoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const thinksToDoData: Partial<ThinksToDo> = req.body;
    const updatedThinksToDo = await ThinksToDoService.updateThinksToDoById(id, thinksToDoData);
    if (updatedThinksToDo) {
      res.status(200).json(updatedThinksToDo);
    } else {
      res.status(404).json({ message: 'Thinks to do not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteThinksToDoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedThinksToDo = await ThinksToDoService.deleteThinksToDoById(id);
    if (deletedThinksToDo) {
      res.status(200).json(deletedThinksToDo);
    } else {
      res.status(404).json({ message: 'Thinks to do not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const ThinksToDoController = {
  createThinksToDo,
  findThinksToDoById,
  getAllThinksToDos,
  updateThinksToDoById,
  deleteThinksToDoById,
};
