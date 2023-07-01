import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu";
import Cart from "../../components/Cart";
import { RestaurantContainer } from "./Restaurant.styles";

interface Restaurant {
  id: number;
  name: string;
  description: string;
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface CartItem {
  product: MenuItem;
  quantity: number;
}

interface RootState {
  restaurants: Restaurant[];
  menuItems: MenuItem[];
  cart: CartItem[];
}

const Restaurant: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const restaurant = useSelector((state: RootState) =>
    state.restaurants.find((r: Restaurant) => r.id === parseInt(id || ""))
  );

  return (
    <RestaurantContainer>
      <Header />
      <h2>{restaurant?.name}</h2>
      <p>{restaurant?.description}</p>
      <RestaurantMenu />
      <Cart />
    </RestaurantContainer>
  );
};

export default Restaurant;
