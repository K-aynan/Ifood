export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Product {
  capa: string | undefined;
  cardapio: [];
  id: number;
  descricao: string;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface UserState {
  id: number;
  name: string;
  email: string;
  avatar: string;
  permissions: string[];
  authenticated: boolean;
  restaurantId: number;
}

export interface RootState {
  restaurants: Restaurant[];
  menuItems: MenuItem[];
  cart: CartState;
  user: UserState;
}

export type RestaurantState = Restaurant[];
