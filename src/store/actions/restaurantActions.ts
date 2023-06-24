export const SET_SELECTED_RESTAURANT = 'SET_SELECTED_RESTAURANT';

export interface SetSelectedRestaurantAction {
  type: typeof SET_SELECTED_RESTAURANT;
  payload: number;
}

export type RestaurantActionTypes = SetSelectedRestaurantAction;
