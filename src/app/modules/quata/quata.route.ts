

import { Router } from 'express';
import { quataController } from './quata.controller';


const router = Router();

router.post('/',quataController.createQuata );
router.get('/:id',quataController.getQuataById);
router.get('/',quataController.getAllQuatas);
router.put('/:id',quataController.updateQuataById);
router.delete('/:id',quataController.deleteQuataById);

export default router;
