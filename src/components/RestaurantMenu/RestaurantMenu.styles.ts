import styled from 'styled-components';

export const RestaurantMenuContainer = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;

  h3 {
    font-size: 18px;
  }

  p {
    color: #777;
  }

  span {
    font-weight: bold;
  }
`;
