import { MenuItem } from "../type";
import { Action } from "redux";

const initialState: MenuItem[] = [
  {
    id: 1,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 2,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 3,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 4,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 5,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 6,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 7,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 8,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 9,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
];

const menuItemReducer = (
  state: MenuItem[] = initialState,
  action: Action
): MenuItem[] => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuItemReducer;
