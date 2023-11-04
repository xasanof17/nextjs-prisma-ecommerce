// import prisma from "@/utils/prismadb";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;
  const hashedPassword = bcrypt.hash(password, 12);

  try {
    // const user = await prisma.user.create({
    //   data: {
    //     name,
    //     email,
    //     password: String(hashedPassword),
    //   },
    // });
    // return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}
