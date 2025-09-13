"use client";

import { ThemeProvider } from "next-themes";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { ViewportContextProvider } from "@/contexts/ViewportContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <ThemeContextProvider>
        <ViewportContextProvider>
          {children}
        </ViewportContextProvider>
      </ThemeContextProvider>
    </ThemeProvider>
  );
}
