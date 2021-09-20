import { USER } from "../model/user";

export interface UserState {
	users: USER[];
	loading: boolean;
	error: null | string;
}

export enum UserActionTypes {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
	type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS;
	payload: USER[];
}

interface FetchUsersErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string;
}

export type UserAction =
	| FetchUsersAction
	| FetchUsersSuccessAction
	| FetchUsersErrorAction;
