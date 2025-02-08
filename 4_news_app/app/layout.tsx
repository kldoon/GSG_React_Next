import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
