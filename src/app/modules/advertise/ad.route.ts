// src/routes/ad.routes.ts

import { Router } from 'express';
import { adController } from './ad.controller';

const router = Router();

router.post('/',adController.createAd);
router.get('/:id', adController.getAdById);
router.get('/', adController.getAllAds);
router.put('/:id', adController.updateAdById);
router.delete('/:id', adController.deleteAdById);

export const AdRouter = router;
