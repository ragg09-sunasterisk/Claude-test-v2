import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import { Navbar } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Next.js with MUI",
  description: "A Next.js app with Material-UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar
            onLogoClick={() => console.log("Logo clicked")}
            onSearch={(query) => console.log("Search:", query)}
            navLinks={[
              { label: "Home", href: "/", active: true },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
