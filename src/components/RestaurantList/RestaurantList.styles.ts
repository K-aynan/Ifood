import styled from "styled-components";

export const RestaurantListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Restaurant = styled.div`
  width: 300px;
  margin: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    color: #777;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 40px;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;
