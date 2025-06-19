import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damon Thomas - Full Stack Developer",
  description:
    "Portfolio of Damon Thomas, a full stack developer specializing in React, Next.js, and modern web technologies.",
  icons: {
    icon: [
      { url: "/favicon-for-app/favicon.ico" },
      { url: "/favicon-for-app/icon1.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon-for-app/apple-icon.png", sizes: "180x180" },
  },
  manifest: "/favicon-for-app/manifest.json",
  other: {
    "msapplication-TileColor": "#da532c",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="mask-icon"
          href="/favicon-for-app/icon0.svg"
          color="#5bbad5"
        />
        <meta name="apple-mobile-web-app-title" content="Damon" />
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center`}
      >
        <div className="main w-screen h-screen bg-background">{children}</div>
      </body>
    </html>
  );
}
