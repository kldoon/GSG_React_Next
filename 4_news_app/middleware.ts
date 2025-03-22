import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/auth";
import { cookies } from "next/headers";

const authenticateUser = async (token: string | undefined, request: NextRequest) => {

  // verify there is a token
  if (!token) {
    // else redirect to login page!
    return NextResponse.redirect(new URL(`/user/login?msg=${encodeURIComponent('You must be logged in to access this!')}`, request.url));
  }

  // verify the token is valid
  const user = await verifyToken(token);

  if (!user) {
    // else redirect to login page!
    (await cookies()).delete('auth-token');
    return NextResponse.redirect(new URL(`/user/login?msg=${encodeURIComponent('Your session is expired!')}`, request.url));
  }
  return user;
}

export const middleware = async (request: NextRequest) => {
  // using the middle for logging
  console.log(`A request is made to ${request.nextUrl.pathname}`);
  // read cookies from the request
  const token = request.cookies.get('auth-token')?.value;

  switch (request.nextUrl.pathname) {
    case '/admin':
      const res = await authenticateUser(token, request);
      if (res instanceof (NextResponse)) {
        return res;
      }

      // check the role stored the in token
      if (res.role !== 'admin') {
        // else redirect to home page!
        return NextResponse.redirect(new URL('/', request.url));
      }
      // if role is admin => move to next page (admin page)
      break;
    case '/add-news': {
      const res = await authenticateUser(token, request) as News.IUser;
      if (res instanceof (NextResponse)) {
        return res;
      }

      if (!['editor', 'admin'].includes(res.role)) {
        return NextResponse.redirect(new URL('/', request.url));
      }
      break;
    }

    default:
      break;
  }


  return NextResponse.next();
}

export const config = {
  matcher: ['/news/:path*', '/admin/:path*', '/:path*']
}