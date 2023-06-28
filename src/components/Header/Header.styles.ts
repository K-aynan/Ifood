import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #e53935;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Navigation = styled.nav`
  a {
    color: #fff;
    margin-left: 16px;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
