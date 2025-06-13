
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import { Outlet } from "react-router-dom";
import { Toaster } from "./ui/toaster";

export function Layout() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
