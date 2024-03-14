import Match from "../(records)/Match";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json()
        const tableData = body.formData
        await Match.create(matchData)
        return NextResponse.json({message: "Match created"}, {status: 201})
    }
    catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}

export async function GET(req){
    try{
        const matches = await Match.find();
        return NextResponse.json({ matches }, {status: 200})
    }
    catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}