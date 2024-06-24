// src/routes/thinksToDo.routes.ts

import { Router } from 'express';
import { ThinksToDoController } from './thinks.controller';


const router = Router();

router.post('/', ThinksToDoController.createThinksToDo);
router.get('/:id', ThinksToDoController.findThinksToDoById);
router.get('', ThinksToDoController.getAllThinksToDos);
router.put('/:id', ThinksToDoController.updateThinksToDoById);
router.delete('/:id', ThinksToDoController.deleteThinksToDoById);

export const ThinksRoutes = router;
