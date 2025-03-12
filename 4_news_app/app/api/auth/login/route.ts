import { login } from "@/services/auth";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
  const body = await request.json() as { email: string, password: string };
  const user = login(body.email, body.password);
  if (!user) {
    return new NextResponse('User not found!', { status: 401 });
  }

  return NextResponse.json(user, { status: 200 });
}

export { POST };