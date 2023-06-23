import { UserState, UserActionTypes } from '../type';

const initialState: UserState = {
  name: 'John Doe',
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
