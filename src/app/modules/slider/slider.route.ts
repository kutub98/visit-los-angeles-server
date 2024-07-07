// src/routes/slider.routes.ts

import { Router } from 'express';
import { sliderController } from './slider.controller';

const router = Router();

router.post('/',sliderController.createSlider);
router.get('/:id',sliderController.getSliderById);
router.get('/', sliderController.getAllSliders);
router.put('/:id', sliderController.updateSliderById);
router.delete('/:id', sliderController.deleteSliderById);

export const SliderRouter = router;
