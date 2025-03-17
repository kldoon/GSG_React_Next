import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  // using the middle for logging
  console.log(`A request is made to ${request.nextUrl.pathname}`);

  // read cookies from the request
  // verify the token is valid
  // check the role stored the in token
  // if role is admin => move to next page (admin page)
  // else redirect to login page!
  return NextResponse.next();
}

export const config = {
  matcher: '/news/:path*'
}