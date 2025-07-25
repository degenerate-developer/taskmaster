import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)", "/test(.*)"]);
const isApplicantRoute = createRouteMatcher(["/interview(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();
  const { userId, sessionId } = session;
  const isSignedIn = userId !== null && sessionId !== null;

  if ((isApplicantRoute(req) || isAdminRoute(req)) && !isSignedIn) {
    const returnUrl = new URL("/login", req.url);
    returnUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(returnUrl);
  }

  if (isApplicantRoute(req)) {
    const userRole = session.sessionClaims?.metadata?.role;
    return userRole === "applicant"
      ? NextResponse.next()
      : userRole === "admin"
        ? NextResponse.redirect(new URL("/admin", req.url))
        : NextResponse.redirect(new URL("/", req.url));
  }

  if (isAdminRoute(req)) {
    const userRole = session.sessionClaims?.metadata?.role;
    return userRole === "admin"
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
