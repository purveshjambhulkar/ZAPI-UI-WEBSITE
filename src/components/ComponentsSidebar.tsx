
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { AlertCircle, BarChart3, CheckSquare, CircleDot, FileText, Joystick, Keyboard, LayoutGrid, Menu, MessageSquare, PanelsTopLeft, TextCursor } from "lucide-react";

interface ComponentsSidebarProps {
  className?: string;
}

const components = [
  {
    label: "Inputs",
    icon: <Keyboard className="h-4 w-4" />,
    links: [
      { label: "Button", href: "/components/button", icon: <Joystick className="h-4 w-4" /> },
      { label: "Input", href: "/components/input", icon: <TextCursor className="h-4 w-4" /> },
      { label: "Checkbox", href: "/components/checkbox", icon: <CheckSquare className="h-4 w-4" /> },
      { label: "Radio Group", href: "/components/radio-group", icon: <CircleDot className="h-4 w-4" /> },
      { label: "Textarea", href: "/components/textarea", icon: <FileText className="h-4 w-4" /> },
      { label: "Select", href: "/components/select", icon: <PanelsTopLeft className="h-4 w-4" /> },
    ],
  },
  {
    label: "Data Display",
    icon: <LayoutGrid className="h-4 w-4" />,
    links: [
      { label: "Avatar", href: "/components/avatar", icon: <PanelsTopLeft className="h-4 w-4" /> },
      { label: "Badge", href: "/components/badge", icon: <PanelsTopLeft className="h-4 w-4" /> },
      { label: "Card", href: "/components/card", icon: <FileText className="h-4 w-4" /> },
      { label: "Table", href: "/components/table", icon: <LayoutGrid className="h-4 w-4" /> },
      { label: "Carousel", href: "/components/carousel", icon: <PanelsTopLeft className="h-4 w-4" /> },
    ],
  },
  {
    label: "Navigation",
    icon: <Menu className="h-4 w-4" />,
    links: [
      { label: "Navbar", href: "/components/navbar", icon: <Menu className="h-4 w-4" /> },
      { label: "Tabs", href: "/components/tabs", icon: <PanelsTopLeft className="h-4 w-4" /> },
      { label: "Navigation Menu", href: "/components/navigation-menu", icon: <Menu className="h-4 w-4" /> },
    ],
  },
  {
    label: "Feedback",
    icon: <AlertCircle className="h-4 w-4" />,
    links: [
      { label: "Alert", href: "/components/alert", icon: <AlertCircle className="h-4 w-4" /> },
      { label: "Progress", href: "/components/progress", icon: <BarChart3 className="h-4 w-4" /> },
      { label: "Toast", href: "/components/toast", icon: <MessageSquare className="h-4 w-4" /> },
    ],
  },
];

export function ComponentsSidebar({ className }: ComponentsSidebarProps) {
  const location = useLocation();

  return (
    <div className={cn("pb-12 bg-muted/40 rounded-lg border", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Components
          </h2>
          <div className="space-y-1">
            <Button
              variant={location.pathname === "/components" ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="/components">
                <LayoutGrid className="h-4 w-4" />
                Overview
              </Link>
            </Button>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          {components.map((section) => (
            <div key={section.label} className="px-4 py-2">
              <h2 className="mb-2 px-2 text-sm font-semibold tracking-tight flex items-center gap-2">
                {section.icon}
                {section.label}
              </h2>
              <div className="space-y-1">
                {section.links.map((link) => (
                  <Button
                    key={link.href}
                    variant={location.pathname === link.href ? "secondary" : "ghost"}
                    className="w-full justify-start text-sm gap-2"
                    asChild
                  >
                    <Link to={link.href}>
                      {link.icon}
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
