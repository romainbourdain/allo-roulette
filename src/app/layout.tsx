import Footer from "@/components/foot/Footer";
import Navbar from "@/components/nav/Navbar";
import ThemeProvider from "@/components/theme/ThemeProvider";
import clsx from "clsx";
import "./globals.css";

export const metadata = {
  title: "Allo Roulette",
  description:
    "Outil révolutionnaire permettant d'appeler aléatoirement un 1A (il y a des pizza aussi)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className={clsx("bg-app-gray h-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex-1 m-auto px-12 py-20 w-full max-w-6xl flex flex-col gap-36">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
