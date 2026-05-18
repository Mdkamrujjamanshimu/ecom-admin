import { Inter } from 'next/font/google';
import { LayoutProvider } from "./context/LayoutContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import ThemeWrapper from "@/Components/ThemeWrapper";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Next js ecommerce admin panel",
  description: "Next js ecommerce admin panel template",
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
