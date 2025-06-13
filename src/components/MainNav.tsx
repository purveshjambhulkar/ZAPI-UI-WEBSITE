
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Code, FileText, Home, Layers } from "lucide-react";

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  return (
    <div className={cn("mr-4 hidden md:flex", className)}>
      <Link
        to="/"
        className="mr-6 flex items-center space-x-2"
      >
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
          <Layers className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="hidden font-bold sm:inline-block">
          UI Library
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          to="/"
          className="transition-colors hover:text-primary flex items-center gap-1"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <Link
          to="/components"
          className="transition-colors hover:text-primary flex items-center gap-1"
        >
          <Code className="h-4 w-4" />
          <span>Components</span>
        </Link>
        <Link
          to="/docs"
          className="transition-colors hover:text-primary flex items-center gap-1"
        >
          <FileText className="h-4 w-4" />
          <span>Documentation</span>
        </Link>
        <a
          href="https://github.com/shadcn/ui"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-primary"
        >
          GitHub
        </a>
      </nav>
    </div>
  );
}
