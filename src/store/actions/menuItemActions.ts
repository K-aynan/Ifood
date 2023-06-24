import { MenuItem } from '../type';

let menuItems: MenuItem[] = [];

export const fetchMenuItems = () => {
  return new Promise<MenuItem[]>((resolve) => {
    resolve(menuItems);
  });
};

export const addMenuItem = (menuItem: MenuItem) => {
  return new Promise<MenuItem>((resolve) => {
    const newItem: MenuItem = { ...menuItem, id: generateItemId() };
    menuItems.push(newItem);
    resolve(newItem);
  });
};

export const removeMenuItem = (id: number) => {
  return new Promise<void>((resolve, reject) => {
    const index = menuItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      menuItems.splice(index, 1);
      resolve();
    } else {
      reject(new Error('Item not found'));
    }
  });
};

// Função auxiliar para gerar IDs únicos para os itens do menu
const generateItemId = (): number => {
  const existingIds = menuItems.map((item) => item.id);
  const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
  return maxId + 1;
};
