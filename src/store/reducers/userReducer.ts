import { UserState, FETCH_USER_DATA, UserDataActionTypes } from "../type";

const initialState: UserState = {
  name: "",
  restaurantId: 0,
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
