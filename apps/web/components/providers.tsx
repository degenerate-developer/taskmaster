"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { TooltipProvider } from "@taskmaster/ui/components/tooltip";
import { LOCAL_URL, PROD_URL } from "@/lib/constants";
import { env } from "@/env";

const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <ClerkProvider
        publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        afterSignOutUrl="/"
        allowedRedirectOrigins={[LOCAL_URL, PROD_URL]}
        allowedRedirectProtocols={["http", "https"]}
      >
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <TooltipProvider>{children}</TooltipProvider>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </NextThemesProvider>
  );
}
