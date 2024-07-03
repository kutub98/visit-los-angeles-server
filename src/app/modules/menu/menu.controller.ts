import { Request, Response } from 'express';
import { MenuService } from './menu.service';

const createMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await MenuService.createMenu(req.body);
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Error creating menu', error });
  }
};

const getMenuById = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await MenuService.getMenuById(req.params.id);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting menu', error });
  }
};

const getAllMenus = async (req: Request, res: Response): Promise<void> => {
  try {
    const menus = await MenuService.getAllMenus();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: 'Error getting menus', error });
  }
};

const updateMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await MenuService.updateMenu(req.params.id, req.body);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating menu', error });
  }
};

const deleteMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await MenuService.deleteMenu(req.params.id);
    if (menu) {
      res.status(200).json({ message: 'Menu deleted successfully' });
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting menu', error });
  }
};

export const MenuController = {
  createMenu,
  getMenuById,
  getAllMenus,
  updateMenu,
  deleteMenu,
};
