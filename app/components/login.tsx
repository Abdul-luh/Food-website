"use client";
import React, { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";

export default function Login() {
	const [userName, setUserName] = useState("");
	const dispatch = useDispatch<AppDispatch>();

	const username = useAppSelector((state) => state.AuthReducer.value.username);
	const isAuth = useAppSelector((state) => state.AuthReducer.value.isAuth);

	const handleLogin = () => {
		dispatch(logIn(userName));
	};
	const handleToggleModerator = () => {
		dispatch(toggleModerator());
	};
	const handleLogout = () => {
		dispatch(logOut());
	};

	return (
		<div className="py-10">
			<input
				className="text-black"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => [
					setUserName(e.target.value),
				]}
				type="text"
			/>
			{isAuth ? (
				""
			) : (
				<button onClick={handleLogin} className="block my-6">
					login
				</button>
			)}
			<button onClick={handleLogout} className="block my-6 text-red-600">
				logout
			</button>
			{isAuth && (
				<button onClick={handleToggleModerator} className="block my-6">
					toggle moderator status
				</button>
			)}
		</div>
	);
}
