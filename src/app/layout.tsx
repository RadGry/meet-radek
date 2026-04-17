import type { Metadata } from "next";
import { content } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${content.profile.name} — ${content.profile.headline}`,
  description: content.profile.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
