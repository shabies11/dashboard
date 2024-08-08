import { NextResponse } from "next/server";

import { connectDB } from "@/helpers/db";


connectDB();

export async function POST(req, res, next) {

  return NextResponse.json({
    success: true,
  })
}
