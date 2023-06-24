import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type";
import Header from "../../components/Header/Header";
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu";
import { RestaurantContainer } from "./Restaurant.styles";

const Restaurant: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const restaurant = useSelector((state: RootState) =>
    state.restaurants.find((r) => r.id === parseInt(id || ""))
  );

  return (
    <RestaurantContainer>
      <Header />
      <h2>{restaurant?.name}</h2>
      <p>{restaurant?.description}</p>
      <RestaurantMenu />
    </RestaurantContainer>
  );
};

export default Restaurant;
