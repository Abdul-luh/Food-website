"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineSearch,
	AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { logIn, logOut, toggleModerator } from "@/redux/features/authSlice";
import { AiFillProfile } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function Navbar() {
	const [mobileNav, setMobileNav] = useState(false);

	const handleNav = () => {
		setMobileNav(!mobileNav);
	};

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
		<div className="max-w-[1200px] mx-auto flex justify-between items-center  p-4">
			{/* LEFT SIDE  */}
			<div className="flex items-center ">
				<div onClick={handleNav} className="cursor-pointer text-2xl">
					<AiOutlineMenu />
					{/* &#9776; */}
					{/* &times; */}
				</div>

				<h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
					Best <span className="font-bold">Eats</span>
				</h1>
				<div className="hidden lg:flex items-center bg-gray-200 rounded-full text-sm">
					<p className="bg-black text-white rounded-full p-2">Delivery</p>
					<p className="p-2">Pickup</p>
				</div>
			</div>

			{/* SEARCH INPUT  */}
			<div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
				<AiOutlineSearch size={25} />
				{/* &#9776; */}
				<input
					className="bg-transparent w-full p-2 focus:outline-none"
					type="text"
					placeholder="search meals"
				/>
			</div>

			{/* CART  */}
			<button className="hidden md:flex items-center rounded-full py-2 bg-black text-white">
				<BsFillCartFill size={25} className="mr-2" />
				{/* &#9776; */}
				Cart
			</button>

			{/* MOBILE MENU  */}
			{mobileNav && (
				<div
					onClick={handleNav}
					className="bg-black/70 fixed w-full h-screen z-10 top-0 backdrop-blur-sm left-0 "></div>
			)}

			<div
				className={
					mobileNav
						? "fixed top-0 left-0 bg-gray-200 w-[300px] h-screen z-10 duration-300 px-2 "
						: "fixed top-0 left-[-100%] bg-gray-200 w-[300px] h-screen z-10 duration-300 px-2"
				}>
				<AiOutlineClose
					onClick={handleNav}
					className="text-2xl absolute right-4 top-4 cursor-pointer "
					size={30}
				/>
				{/* <div className="text-2xl absolute right-4 top-4 cursor-pointer ">
					 &times; 
				</div> */}
				<h2 className="text-2xl p-4">
					Best <span className="font-bold">Eats</span>
				</h2>
				<nav>
					<ul className="flex flex-col p-4 text-gray-700">
						{username && (
							<Link href="/login">
								<li className="text-xl py-4 flex items-center">
									<TbTruckDelivery onClick={handleLogout} className="mr-4" />
									Login
								</li>
							</Link>
						)}
						{/* : (
							<Link href={"/signup"}>
								<li className="text-xl py-4 flex items-center">
									<TbTruckDelivery className="mr-4" />
									Signup
								</li>
							</Link>
						// ) */}

						<li className="text-xl py-4 flex items-center capitalize">
							<TbTruckDelivery className="mr-4" />
							Orders
						</li>
						<li className="text-xl py-4 flex items-center capitalize">
							<MdFavorite className="mr-4" />
							Favourites
						</li>
						<li className="text-xl py-4 flex items-center capitalize">
							<FaWallet className="mr-4" />
							Wallet
						</li>
						<li className="text-xl py-4 flex items-center capitalize">
							<MdHelp className="mr-4" />
							Help
						</li>
						{/* <li className="text-xl py-4 flex items-center">
							<AiFillTag className="mr-4" />
							Promotions
						</li> */}
						<li className="text-xl py-4 flex items-center capitalize">
							<BsFillSaveFill className="mr-4" />
							Best One
						</li>
						<li className="text-xl py-4 flex items-center capitalize">
							<AiFillProfile className="mr-4" />
							Login
						</li>

						{username && (
							<>
								<li className="text-xl py-4 flex items-center capitalize">
									<FaUserFriends className="mr-4" />
									Invite Friends
								</li>
								<li className="text-xl py-4 flex items-center capitalize">
									<FaUserFriends className="mr-4" />
									Logout
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</div>
	);
}
