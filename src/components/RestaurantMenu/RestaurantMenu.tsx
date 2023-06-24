import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type";
import { MenuItem, RestaurantMenuContainer } from "./RestaurantMenu.styles";

const RestaurantMenu: React.FC = () => {
  const menuItems = useSelector((state: RootState) => state.menuItems);

  return (
    <RestaurantMenuContainer>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>${item.price}</span>
            <button>Add to Cart</button>
          </MenuItem>
        ))}
      </ul>
    </RestaurantMenuContainer>
  );
};

export default RestaurantMenu;
