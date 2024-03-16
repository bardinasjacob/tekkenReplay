import Match from "../(records)/Match";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const body = await req.json()
        const matchData = body.formData
        await Match.create(matchData)
        return NextResponse.json({message: "Match created"}, {status: 201})
    }
    catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}

export async function GET(req: Request){

    try{
        const url = new URL(req.url)
        const params = new URLSearchParams(url.searchParams)
        const matches = await Match.find();
        console.log(params.get('p1Char'))
        return NextResponse.json({ matches }, {status: 200})
    }
    catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}