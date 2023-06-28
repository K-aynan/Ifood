import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type";
import { HeaderContainer, Logo, Navigation } from "./Header.styles";

const Header = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">Food App</Link>
      </Logo>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to={`/restaurant/${user.restaurantId}`}>Restaurant</Link>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
