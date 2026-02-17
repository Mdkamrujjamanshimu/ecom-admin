import { LayoutProvider } from "./context/LayoutContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import ThemeWrapper from "@/Components/ThemeWrapper";

export const metadata = {
  title: "Next js ecommerce admin panel",
  description: "Next js ecommerce admin panel template",
};

export default function RootLayout({ children }) {
  return (
    <LayoutProvider>
      <ThemeProvider>
        <html lang="en" suppressHydrationWarning>
          <body>
            <ThemeWrapper>{children}</ThemeWrapper>
          </body>
        </html>
      </ThemeProvider>
    </LayoutProvider>
  );
}
