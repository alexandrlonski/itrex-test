import axios from "axios";
import { Dispatch } from "redux";
import { USER } from "../../model/user";
import { UserAction, UserActionTypes } from "../../types/user";

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USERS });
			const response = await axios.get<USER[]>(
				"https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"
			);
			setTimeout(() => {
				dispatch({
					type: UserActionTypes.FETCH_USERS_SUCCESS,
					payload: response.data,
				});
			}, 1000);
		} catch (error) {
			dispatch({
				type: UserActionTypes.FETCH_USERS_ERROR,
				payload: "Error users data onload",
			});
		}
	};
};
