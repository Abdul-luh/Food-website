import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import authorizeUser from "./features/userAuthSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		AuthReducer,
		authorizeUser,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
