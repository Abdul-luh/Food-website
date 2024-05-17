import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserState = {
	value: UserValue;
};

// type userType = {

// }

type UserValue = {
	userName: string;
	email: string;
	password: string;
	userType: string;
	// phoneNo: string;
};

const initialUserState: UserState = {
	value: {
		userName: "",
		email: "",
		password: "",
		userType: "",
		// phoneNo: "",
	} as UserValue,
};

const authorizeUser = createSlice({
	name: "authorize",
	initialState: initialUserState,
	reducers: {
		logIn: (state, action: PayloadAction<UserValue>): UserState => {
			const { userName, email, password, userType } = action.payload;

			const user: UserState = {
				value: {
					userName,
					email,
					password,
					userType,
				},
			};

			// Save user data to localStorage (for demonstration purposes)
			localStorage.setItem("foodieUser", JSON.stringify(user.value));

			// Return updated state with user information
			return user;
		},
		logOut: () => {
			localStorage.clear();
			return initialUserState;
		},
	},
});

export const { logIn, logOut } = authorizeUser.actions;
export default authorizeUser.reducer;
