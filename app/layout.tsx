import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jCLI — Ephemeral File Drop & Sharing Service",
  description:
    "A lightweight, self-hosted ephemeral file drop service built in pure Go standard library. Constant memory streaming, clean curl links, and zero-install Windows GUI.",
  keywords: [
    "jCLI",
    "file sharing",
    "ephemeral file drop",
    "CLI file upload",
    "Go file server",
    "curl file upload",
    "zero install GUI",
    "sysadmin tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
