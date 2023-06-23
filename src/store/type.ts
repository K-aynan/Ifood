export interface UserState {
  name: string;
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: string;
}

export type RestaurantState = Restaurant[];

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

export type MenuItemState = MenuItem[];

// Define outras interfaces e tipos relacionados às ações do Redux
// Exemplo: UserActionTypes, RestaurantActionTypes, etc.

export interface RootState {
  user: UserState;
  restaurants: RestaurantState;
  menuItems: MenuItemState;
}
