import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Cars rental",
  description: "Discover and rent the best cars showcase application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
