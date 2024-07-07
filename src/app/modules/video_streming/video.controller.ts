// src/controllers/video.controller.ts

import { Request, Response } from 'express';
import { VideoService } from './video.service';
import { isErrorWithMessage } from '../../utils/Error';

 const createVideo = async (req: Request, res: Response) => {
  try {
    const video = await VideoService.createVideo(req.body);
    res.status(201).json(video);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getVideoById = async (req: Request, res: Response) => {
  try {
    const video = await VideoService.findVideoById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getAllVideos = async (req: Request, res: Response) => {
  try {
    const videos = await VideoService.getAllVideos(req.query);
    res.status(200).json(videos);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const updateVideoById = async (req: Request, res: Response) => {
  try {
    const video = await VideoService.updateVideoById(req.params.id, req.body);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const deleteVideoById = async (req: Request, res: Response) => {
  try {
    const video = await VideoService.deleteVideoById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(204).json();
  }catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

export const videoController  = {
    createVideo,
    getAllVideos,
    getVideoById,
    updateVideoById,
    deleteVideoById
}
