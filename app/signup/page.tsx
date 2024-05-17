"use client";
import React, { useState } from "react";
import { logIn, logOut } from "@/redux/features/userAuthSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function Siginup() {
	const [userValues, setUserValues] = useState({
		userName: "",
		email: "",
		password: "",
		userType: "",
	});

	const dispatch = useDispatch<AppDispatch>();

	const handleLogin = () => {
		dispatch(logIn(userValues));
	};
	const handleLogout = () => {
		dispatch(logOut());
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setUserValues({ ...userValues, [e.target.name]: e.target.value });
	};

	return (
		<div className="w-full h-screen flex flex-col justify-center items-center">
			<div className="p-4 shadow-xl rounded-xl">
				<h1 className="uppercase py-2 text-center font-bold text-3xl text-orange-600">
					Signup
				</h1>
				<form action="">
					<div className="py-2">
						<label htmlFor="email" className="text-gray-600 font-semibold">
							Email :{" "}
						</label>
						<input
							className="w-full p-2 border-orange-600"
							type="email"
							name="email"
							placeholder="email"
							onChange={handleChange}
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
						/>
					</div>

					<div className="py-2">
						<label htmlFor="userType" className="text-gray-600 font-bold">
							User-Type:
						</label>
						<select
							name="userType"
							id=""
							onChange={handleChange}
							className="border border-stone-700 w-full p-2 text-black">
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
