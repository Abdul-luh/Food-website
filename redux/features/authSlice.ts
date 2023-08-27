import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
	value: AuthState;
};
type AuthState = {
	isAuth: boolean;
	username: string;
	uid: string;
	isModerator: boolean;
};

const initialState = {
	value: {
		isAuth: false,
		username: "",
		uid: "",
		isModerator: false,
	} as AuthState,
} as InitialState;

export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logOut: () => {
			localStorage.clear();
			return initialState;
		},
		logIn: (state, action: PayloadAction<string>) => {
			let user = {
				value: {
					isAuth: true,
					username: action.payload,
					uid: action.payload,
					isModerator: false,
				},
			};
			localStorage.setItem("user", JSON.stringify(user) || "");
			return user;
		},
		toggleModerator: (state) => {
			state.value.isModerator = !state.value.isModerator;
		},
	},
});

export const { logOut, logIn, toggleModerator } = auth.actions;
export default auth.reducer;
