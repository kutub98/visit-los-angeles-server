import { IVideo } from "./video.interface";
import { Video } from "./video.models";


const createVideo = async (videoData: IVideo) => {
  const newVideo = new Video(videoData);
  return await newVideo.save();
};

const findVideoById = async (videoId: string) => {
  return await Video.findById(videoId);
};

const getAllVideos = async (query: Record<string, unknown> = {}) => {
  return await Video.find(query);
};

const updateVideoById = async (videoId: string, payload: Partial<IVideo>) => {
  return await Video.findByIdAndUpdate(videoId, payload, { new: true });
};

const deleteVideoById = async (videoId: string) => {
  return await Video.findByIdAndDelete(videoId);
};

export const VideoService = {
  createVideo,
  findVideoById,
  getAllVideos,
  updateVideoById,
  deleteVideoById,
};
