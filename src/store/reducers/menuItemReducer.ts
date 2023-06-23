import { MenuItemState, MenuItemActionTypes } from '../types';

const initialState: MenuItemState = [
  {
    id: 1,
    name: 'Item 1',
    description: 'This is the first item',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'This is the second item',
    price: 15.99,
  },
  // ...
];

const menuItemReducer = (
  state = initialState,
  action: MenuItemActionTypes
): MenuItemState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuItemReducer;
