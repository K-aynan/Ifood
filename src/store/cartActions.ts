import { Product } from "./type";

export const addToCart = (product: Product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (productId: number) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const updateCartItemQuantity = (productId: number, quantity: number) => {
  return {
    type: "UPDATE_CART_ITEM_QUANTITY",
    payload: { productId, quantity },
  };
};
