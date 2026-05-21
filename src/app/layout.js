import { Inter } from "next/font/google";
import { LayoutProvider } from "./context/LayoutContext";
import { ThemeProvider } from "./context/ThemeContext";
// Suppress TypeScript/Next.js warning for side-effect CSS import when no
// type declarations are present.
// @ts-ignore
import "./globals.css";
import ThemeWrapper from "@/Components/ThemeWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Book Ecommerce Admin Panel",
  description:
    "Admin dashboard for managing book inventory, categories, orders, and sales analytics",
};

export default function RootLayout({ children }) {
  return (
    <LayoutProvider>
      <ThemeProvider>
        <html lang="en" suppressHydrationWarning className={inter.variable}>
          <body>
            <ThemeWrapper>{children}</ThemeWrapper>
          </body>
        </html>
      </ThemeProvider>
    </LayoutProvider>
  );
}
