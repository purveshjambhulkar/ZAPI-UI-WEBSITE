import { Link } from "react-router-dom";
import { Github, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ZAPI-UI</h3>
            <p className="text-sm text-muted-foreground">
              A customizable and accessible React UI component library built with plain CSS.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/purveshjambhulkar/ZAPI-UI" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://purveshjambhulkar.github.io/ZAPI-UI" target="_blank" rel="noreferrer">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Website</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Resources */}
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
              
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/purveshjambhulkar/ZAPI-UI"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:underline hover:text-primary"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
