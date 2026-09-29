# Casa Negra — Mission Studio

A responsive, dark production workspace for authored and systemic missions. Powered by Next.js App Router, React, Tailwind CSS 4, Convex, Clerk, shadcn-style Radix primitives, and Notion's API.

## What it does
- Mission list, search, production status, starter mission, and delete.
- Narrative brief, objective sequencing, exact completion/failure triggers, checkpoints.
- Cinematic screenplay, branching player decisions and consequences, QA notes.
- Explicit Save to Convex with real-time reactive updates; Markdown download.
- Server-side Notion page creation. The export reads the **saved mission directly from Convex**, rather than trusting a browser-supplied document.
- User-specific access enforced by Convex queries and mutations. Notion routes require Clerk authentication.

## Setup
1. Install Node.js 22+, then `npm install`.
2. Create a Clerk application at https://dashboard.clerk.com. Add a JWT template named **convex** (Clerk JWT template docs). Set the `aud` to `convex` and copy its issuer domain into `CLERK_JWT_ISSUER_DOMAIN`. Add Clerk keys to `.env.local`.
3. Copy `.env.example` to `.env.local`. Run `npx convex dev` to provision a development deployment and generate `convex/_generated`. Copy `NEXT_PUBLIC_CONVEX_URL` / `CONVEX_DEPLOYMENT` into `.env.local` if they were not automatically written.
4. The Convex deployment reads `CLERK_JWT_ISSUER_DOMAIN` **on the Convex side**, not only in Next.js. Run `npx convex env set CLERK_JWT_ISSUER_DOMAIN https://YOUR-CLERK-ISSUER` and rerun `npx convex dev`.
5. For Notion, create an **internal integration** with insert-content capability at https://www.notion.so/profile/integrations. Grant the integration access to one Notion parent page via the page's Connections menu. Set `NOTION_INTEGRATION_TOKEN` and `NOTION_PARENT_PAGE_ID` in `.env.local` (server-only values).
6. `npm run dev`; open http://localhost:3000, sign in, create a mission, Save, then Export to Notion.

## Optional upstream shadcn/ui component expansion
A compatible `components.json` is included. Install additional registry components as needed:

```bash
npx shadcn@latest add button card input textarea badge tabs dialog select separator sheet dropdown-menu sonner tooltip skeleton
```

This starter already ships working shadcn-style button, card, input, textarea, badges, tabs and dialog primitives. Registry additions may replace or coexist with `components/ui/primitives.tsx`.

## Deployment / limitations
- **Notion:** Internal integration to a **single authorized page**, not multi-user OAuth and not bidirectional sync. Every export creates a new Notion page; the most recent page URL is saved on the mission. Configure keys on the hosting platform.
- **Verification:** Dependency installation and a full `next build` cannot be run in the artifact environment (npm registry network unavailable). Pin versions or resolve to the latest compatible releases before production. Next.js 16.3.6 / Convex 1.46.0 were checked against their published package listings on 2026-09-27; companion package ranges have not been live-verified.
- **Security:** Never expose the Notion token via `NEXT_PUBLIC_`. Convex handlers validate ownership and the Notion route re-fetches the mission with the authenticated user's token. Rate-limit the Notion export route before public deployment.
- **Scale:** For >100 Notion blocks add pagination via `PATCH /v1/blocks/{id}/children`; the starter returns a clear error instead of truncating.
- **Development:** `npm run typecheck` requires Convex code generation to be completed first.

## Sources
- https://docs.convex.dev/client/nextjs/app-router/
- https://ui.shadcn.com/docs/changelog/2026-09-cn
- https://developers.notion.com/reference/post-page
