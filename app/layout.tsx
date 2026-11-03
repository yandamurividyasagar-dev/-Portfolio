import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Vidya Sagar Yandamuri | Full Stack Developer";
const description =
  "Portfolio of Vidya Sagar Yandamuri, a final-year Computer Science student building full-stack AI applications, REST APIs and backend services with React, Node.js and MongoDB.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Vidya Sagar Yandamuri portfolio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.svg"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#07070b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
