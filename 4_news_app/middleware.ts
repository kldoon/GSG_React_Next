import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/auth";
import { cookies } from "next/headers";

export const middleware = async (request: NextRequest) => {
  // using the middle for logging
  console.log(`A request is made to ${request.nextUrl.pathname}`);
  // read cookies from the request
  const token = request.cookies.get('auth-token')?.value;

  switch (request.nextUrl.pathname) {
    case '/admin':
      // verify there is a token
      if (!token) {
        // else redirect to login page!
        return NextResponse.redirect(new URL('/user/login', request.url));
      }

      // verify the token is valid
      const user = await verifyToken(token);

      if (!user) {
        // else redirect to login page!
        (await cookies()).delete('auth-token');
        return NextResponse.redirect(new URL('/user/login', request.url));
      }

      // check the role stored the in token
      if (user.role !== 'admin') {
        // else redirect to home page!
        return NextResponse.redirect(new URL('/', request.url));
      }
      // if role is admin => move to next page (admin page)
      break;

    default:
      break;
  }


  return NextResponse.next();
}

export const config = {
  matcher: ['/news/:path*', '/admin/:path*']
}