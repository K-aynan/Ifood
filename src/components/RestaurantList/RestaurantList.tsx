import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type";
import {
  Container,
  Restaurant,
  RestaurantListContainer,
} from "./RestaurantList.styles";

const RestaurantList: React.FC = () => {
  const restaurants = useSelector((state: RootState) => state.restaurants);

  if (!Array.isArray(restaurants)) {
    return <p>No restaurants found.</p>;
  }

  return (
    <RestaurantListContainer>
      <Container>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
          </Restaurant>
        ))}
      </Container>
      <Container>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
          </Restaurant>
        ))}
      </Container>
    </RestaurantListContainer>
  );
};

export default RestaurantList;
