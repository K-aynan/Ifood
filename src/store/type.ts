export interface Product {
  capa: string | undefined;
  cardapio: [];
  id: string;
  nome: string;
  descricao: string;
  preco: number;
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
}

export interface RootState {
  cart: CartState;
  user: UserState;
}
