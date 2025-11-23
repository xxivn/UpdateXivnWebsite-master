import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Xivn - Minecraft Plugin & Server Development",
  description: "Hi, I’m Xivn, and I specialize in Minecraft development, focusing on custom item creation, plugin configuration, and server management. I enjoy crafting unique experiences for players and am currently learning Java and Python to broaden my skill set and explore new projects. If you’re looking for help with your Minecraft server or have a project in mind, feel free to reach out—I’d be happy to discuss how we can collaborate.",
  keywords: ["Minecraft", "plugin development", "server management", "custom gameplay", "performance optimization"],
  authors: [{ name: "Xivn" }],
  creator: "Xivn",
  publisher: "Xivn LLC",
  openGraph: {
    title: "Xivn - Minecraft Development",
    description: "Custom Minecraft plugins, server optimization, and unique gameplay experiences.",
    url: "https://xivn.dev/",
    siteName: "Xivn",
    images: [
      {
        url: "https://api.mcheads.org/head/xivnn/250",
        width: 1200,
        height: 630,
        alt: "Xivn - Minecraft Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#4285f4",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://xivn.dev/",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
