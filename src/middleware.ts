import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const publicRoutes = ["/login", "/signup", "/forgot-password"];
const protectedRoutes = [
  "/tickets",
  "/reported-tickets",
  "/assigned-tickets",
  "create-ticket",
];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const currentRoute = request.nextUrl.pathname;

  const isPublicRoute = publicRoutes.some((route) =>
    currentRoute.startsWith(route)
  );
  const isProtectedRoute = protectedRoutes.some((route) =>
    currentRoute.startsWith(route)
  );

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(
        new URL("/login", request.url)
      ).cookies.delete("token");
    }
  }

  if (currentRoute === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/tickets", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/tickets", request.url));
  }

  return NextResponse.next();
}
