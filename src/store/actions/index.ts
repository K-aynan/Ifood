import { Dispatch } from 'redux';
import { RootState } from '../type';

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_SELECTED_RESTAURANT = 'SET_SELECTED_RESTAURANT';

interface SetUserNameAction {
  type: typeof SET_USER_NAME;
  payload: string;
}

interface SetSelectedRestaurantAction {
  type: typeof SET_SELECTED_RESTAURANT;
  payload: number;
}

export const setUserName = (name: string): SetUserNameAction => ({
  type: SET_USER_NAME,
  payload: name,
});

export const setSelectedRestaurant = (id: number): SetSelectedRestaurantAction => ({
  type: SET_SELECTED_RESTAURANT,
  payload: id,
});

export const fetchUserData = () => async (dispatch: Dispatch, getState: () => RootState) => {
  const response = await fetch('https://api.example.com/user');
  const data = await response.json();

  dispatch(setUserName(data.name));
};

export type ActionTypes = SetUserNameAction | SetSelectedRestaurantAction;

export {
  setUserName,
  setSelectedRestaurant,
  fetchUserData,
};
