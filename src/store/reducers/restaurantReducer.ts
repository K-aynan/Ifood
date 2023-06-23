import { RestaurantState, RestaurantActionTypes } from '../type';

const initialState: RestaurantState = [
  {
    id: 1,
    name: 'Restaurant 1',
    description: 'This is the first restaurant',
    image: 'restaurant1.jpg',
  },
  {
    id: 2,
    name: 'Restaurant 2',
    description: 'This is the second restaurant',
    image: 'restaurant2.jpg',
  },
  {
    id: 3,
    name: 'Restaurant 2',
    description: 'This is the second restaurant',
    image: 'restaurant2.jpg',
  },
  {
    id: 4,
    name: 'Restaurant 2',
    description: 'This is the second restaurant',
    image: 'restaurant2.jpg',
  },
];

const restaurantReducer = (
  state = initialState,
  action: RestaurantActionTypes
): RestaurantState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default restaurantReducer;
