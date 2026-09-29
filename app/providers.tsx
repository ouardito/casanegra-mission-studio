"use client";
import {ClerkProvider,useAuth} from "@clerk/nextjs";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {ConvexReactClient} from "convex/react";
import {Toaster} from "sonner";
import type {ReactNode} from "react";
const client=new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "https://placeholder.convex.cloud");
export function Providers({children}:{children:ReactNode}) { return <ClerkProvider><ConvexProviderWithClerk client={client} useAuth={useAuth}>{children}<Toaster richColors position="bottom-right" /></ConvexProviderWithClerk></ClerkProvider>; }
