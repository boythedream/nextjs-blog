import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/blog", "/about", "/contact", "/sign-in", "/sign-up"],
    ignoredRoutes: ["/api/webhook"]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};