import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { email, password, userType } = reqBody;
		console.log("loginUser", reqBody);
		return NextResponse.json(email, userType);
	} catch (error) {
		console.log(error)
		return NextResponse.json({error});
	}
}

export async function GET(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const { smth } = reqBody;
		return NextResponse.json({ smth, msg: "succsess" });
	} catch (error) {
		console.log(error)
		return NextResponse.json({error});
	}
}
