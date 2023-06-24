import { UserState } from "../type";
import { UserDataActionTypes, FETCH_USER_DATA } from '../actions/userDataActions';

const initialState: UserState = {
  name: "",
  restaurantId: 0,
};

const userReducer = (state = initialState,action: UserDataActionTypes): UserState => {
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
