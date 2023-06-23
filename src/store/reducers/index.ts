import { combineReducers } from 'redux';
import userReducer from './userReducer';
import restaurantReducer from './restaurantReducer';
import menuItemReducer from './menuItemReducer';

const rootReducer = combineReducers({
  user: userReducer,
  restaurants: restaurantReducer,
  menuItems: menuItemReducer,
});

export default rootReducer;
