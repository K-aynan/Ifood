import { CartState, Product } from "./type";

const initialState: CartState = {
  items: [],
};

interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: Product;
}

interface RemoveFromCartAction {
  type: "REMOVE_FROM_CART";
  payload: number;
}

interface UpdateCartItemQuantityAction {
  type: "UPDATE_CART_ITEM_QUANTITY";
  payload: {
    productId: number;
    quantity: number;
  };
}

type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartItemQuantityAction;

const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newItem = {
        product: action.payload,
        quantity: 1,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };
    case "UPDATE_CART_ITEM_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
