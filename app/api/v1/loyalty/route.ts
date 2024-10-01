import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { auth } from "@/auth"

// Hello World API
export async function GET(req: Request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}