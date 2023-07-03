import { UserState } from "../type";

export const FETCH_USER_DATA = "FETCH_USER_DATA";

export interface UserDataActionTypes {
  type: typeof FETCH_USER_DATA;
  payload: {
    name: string;
    restaurantId: number;
  };
}

const initialState: UserState = {
  name: "",
  restaurantId: 0,
  id: 0,
  email: "",
  avatar: "",
  permissions: [],
  authenticated: false,
};

const userReducer = (state = initialState, action: UserDataActionTypes) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        name: action.payload.name,
        restaurantId: action.payload.restaurantId,
      };
    default:
      return state;
  }
};

export default userReducer;
