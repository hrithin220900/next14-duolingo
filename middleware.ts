import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isNotProtectedRoute = createRouteMatcher(["/", "/api/webhooks/stripe"]);

export default clerkMiddleware((auth, req) => {
  if (!isNotProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
