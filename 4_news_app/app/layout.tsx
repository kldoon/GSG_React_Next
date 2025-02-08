import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "GSG News",
  description: "GSG News, get latest news around the world"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
