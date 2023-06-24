import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type";
import { HeaderContainer } from "./Header.styles";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <HeaderContainer>
      <h1>Welcome, {user.name}</h1>
      <p>Restaurant ID: {user.restaurantId}</p>{" "}
    </HeaderContainer>
  );
};

export default Header;
