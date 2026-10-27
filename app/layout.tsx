import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ChatWidget } from "./components/ChatWidget";

export const metadata: Metadata = {
  title: "FITALENTA: program kerja dan studi ke luar negeri dari Bandung",
  description:
    "Bandingkan program pelatihan kerja ke Jepang, lihat biaya dan cicilan, lalu daftar lewat satu form singkat.",
  icons: { icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#16224f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
