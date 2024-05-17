"use client";
import React, { useState, ChangeEvent, ChangeEventHandler } from "react";
// import { logIn, logOut, toggleModerator } from "@/redux/features/authSlice";
import { logIn } from "@/redux/features/userAuthSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function Login() {
	const dispatch = useDispatch<AppDispatch>();
	const [user, setUser] = useState({
		userName: "",
		email: "",
		password: "",
		userType: "",
	});

	const handleLogin = () => {
		dispatch(logIn(user));
	};

	return (
		<div className="w-full h-screen flex flex-col justify-center items-center">
			<div className="p-4 shadow-xl rounded-xl">
				<h1 className="uppercase py-2 text-center font-bold text-3xl text-orange-600">
					Login
				</h1>
				<form action="">
					<div className="py-2">
						<label htmlFor="email" className="text-gray-600 font-semibold">
							Email :{" "}
						</label>
						<input
							className="w-full p-2 border-orange-600"
							type="username"
							name="userName"
							placeholder="username"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setUser({ ...user, userName: e.target.value });
							}}
						/>
					</div>
					<div className="py-2">
						<label htmlFor="email" className="text-gray-600 font-semibold">
							Email :{" "}
						</label>
						<input
							className="w-full p-2 border-orange-600"
							type="email"
							name="email"
							placeholder="email"
							onChange={(e: ChangeEvent<HTMLInputElement>) => [
								setUser({ ...user, email: e.target.value }),
							]}
						/>
					</div>

					<div className="py-2">
						<label htmlFor="password" className="text-gray-600 font-bold">
							Password :
						</label>
						<input
							className="w-full p-2 border-orange-600"
							type="password"
							name="password"
							placeholder="password"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setUser({ ...user, password: e.target.value });
							}}
						/>
					</div>

					<div className="py-2">
						<label htmlFor="userType" className="text-gray-600 font-bold">
							User-Type:
						</label>
						<select
							name="userType"
							id=""
							className="border border-stone-700 w-full p-2 text-black"
							onChange={(e: ChangeEvent<HTMLSelectElement>) =>
								setUser({ ...user, userType: e.target.value })
							}>
							User Type
							<option value="">select</option>
							<option value="Student">Student</option>
							<option value="Vendor">Vendor</option>
							<option value="Dispatcher">Dispatcher</option>
						</select>
					</div>

					<div className="flex py-4 justify-center">
						<button
							onClick={handleLogin}
							className="border-orange-600 text-orange-600 hover:bg-orange-600 w-2/3 hover:text-white m-1">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
