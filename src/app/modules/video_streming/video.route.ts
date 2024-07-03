
import { Router } from 'express';
import { videoController } from './video.controller';

const router = Router();

router.post('/',videoController.createVideo);
router.get('/:id', videoController.getVideoById);
router.get('/', videoController.getAllVideos);
router.put('/:id', videoController.updateVideoById);
router.delete('/:id', videoController.deleteVideoById);

export const VideoRouter = router;
