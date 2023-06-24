export interface UserState {
  name: string;
  restaurantId: number;
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

export interface RootState {
  user: UserState;
  restaurants: RestaurantState;
  menuItems: MenuItemState;
}
