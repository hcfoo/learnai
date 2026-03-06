import "./globals.css";
import type { ReactNode } from "react";
import TopBar from "@/components/TopBar";

export const metadata = {
  title: "Energy Knowledge Map",
  description: "Explore a connected map of energy systems and sustainability."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
