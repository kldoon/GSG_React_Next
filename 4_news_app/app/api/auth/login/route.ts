import { findUserByEmail } from "@/services/auth";
import { comparePassword, generateToken } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
  const { email, password } = await request.json() as { email: string, password: string };

  if (!email || !password) {
    return new NextResponse('Email and Password are required', { status: 400 })
  }

  const user = findUserByEmail(email);
  if (!user) {
    return new NextResponse('Invalid Credentials!', { status: 401 });
  }

  const isValidPassword = comparePassword(password, user.password || '');

  if (!isValidPassword) {
    return new NextResponse('Invalid Credentials!', { status: 401 });
  }

  delete user.password;
  const token = generateToken(user);

  return new NextResponse(token, { status: 200 });
}

export { POST };