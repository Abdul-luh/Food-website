"use client";
// import { useEffect, useState } from "react";
import Login from "../components/login";
import { useAppSelector } from "@/redux/store";

export default function Home() {
	// const [user, setUser] = useState("")

	const username = useAppSelector((state) => state.AuthReducer.value.username);
	const isModerator = useAppSelector(
		(state) => state.AuthReducer.value.isModerator
	);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Login />

			{username && <h1>Username : {username}</h1>}
			{isModerator && <h2>This user is a moderator</h2>}
		</main>
	);
}
