
import { Link } from "react-router-dom";
import { Github, Globe, Heart, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">UI Library</h3>
            <p className="text-sm text-muted-foreground">
              A collection of beautifully designed components built with Tailwind CSS and shadcn/ui.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/shadcn/ui" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/shadcn" target="_blank" rel="noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Website</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/components" className="text-muted-foreground hover:underline hover:text-primary">
                  Components
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-muted-foreground hover:underline hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="https://github.com/shadcn/ui/blob/main/LICENSE.md" target="_blank" rel="noreferrer" className="text-muted-foreground hover:underline hover:text-primary">
                  License
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/shadcn/ui" target="_blank" rel="noreferrer" className="text-muted-foreground hover:underline hover:text-primary">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com/shadcn" target="_blank" rel="noreferrer" className="text-muted-foreground hover:underline hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.gg/KkbmJ8NPXx" target="_blank" rel="noreferrer" className="text-muted-foreground hover:underline hover:text-primary">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:underline hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:underline hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:underline hover:text-primary">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Built with <Heart className="inline-block h-3 w-3 text-red-500 fill-red-500" /> by lovable. The source code is available on{" "}
            <a
              href="https://github.com/shadcn/ui"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-primary"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
