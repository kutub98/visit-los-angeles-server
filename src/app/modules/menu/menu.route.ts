import { Router } from 'express';
import { MenuController } from './menu.controller';

const router = Router();

router.post('/', MenuController.createMenu);
router.get('/:id', MenuController.getMenuById);
router.get('/', MenuController.getAllMenus);
router.put('/:id', MenuController.updateMenu);
router.delete('/:id', MenuController.deleteMenu);


export const MenuRouter = router;
