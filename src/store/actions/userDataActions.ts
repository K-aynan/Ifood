import { UserState } from "../type";

export const FETCH_USER_DATA = "FETCH_USER_DATA";

export interface FetchUserDataAction {
  type: typeof FETCH_USER_DATA;
  payload: UserState;
}

export type UserDataActionTypes = FetchUserDataAction;
