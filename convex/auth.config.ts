// Clerk JWT template 'convex' must use this issuer URL.
export default { providers: [{ domain: process.env.CLERK_JWT_ISSUER_DOMAIN!, applicationID: "convex" }] };
