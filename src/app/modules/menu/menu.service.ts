import { IMenu } from "./menu.interface";
import { Menu } from "./menu.model";


const createMenu = async (data: IMenu): Promise<IMenu> => {
  const menu = new Menu(data);
  return await menu.save();
};

const getMenuById = async (id: string): Promise<IMenu | null> => {
  return await Menu.findById(id);
};

const getAllMenus = async (): Promise<IMenu[]> => {
  return await Menu.find();
};

const updateMenu = async (id: string, data: Partial<IMenu>): Promise<IMenu | null> => {
  return await Menu.findByIdAndUpdate(id, data, { new: true });
};

const deleteMenu = async (id: string): Promise<IMenu | null> => {
  return await Menu.findByIdAndDelete(id);
};

export const MenuService = {
  createMenu,
  getMenuById,
  getAllMenus,
  updateMenu,
  deleteMenu,
};
