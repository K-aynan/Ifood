import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, CartItem } from "../store/type";
import { removeFromCart, updateCartItemQuantity } from "../store/cartActions";

interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
}

const Cart: React.FC = () => {
  const cartItems = useSelector<RootState, CartItem[]>(
    (state) => state.cart.items
  );
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(updateCartItemQuantity(productId, quantity));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total: number, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              <span>{item.product.name}</span>
              <span>${item.product.price}</span>
              <button onClick={() => handleRemoveFromCart(item.product.id)}>
                Remove
              </button>
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.product.id, Number(e.target.value))
                }
              />
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
