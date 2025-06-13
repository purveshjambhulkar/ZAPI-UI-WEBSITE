
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AlertCircle, ArrowRight, Check, ChevronsUpDown, Keyboard, LayoutGrid, TextCursor, Joystick, CheckSquare, CircleDot, FileText, Menu, Bell, BarChart3, MessageSquare, PanelsTopLeft } from "lucide-react";

const components = [
  {
    category: "Inputs",
    icon: <Keyboard className="h-5 w-5" />,
    items: [
      { name: "Button", href: "/components/button", icon: <Joystick className="h-4 w-4" /> },
      { name: "Input", href: "/components/input", icon: <TextCursor className="h-4 w-4" /> },
      { name: "Checkbox", href: "/components/checkbox", icon: <CheckSquare className="h-4 w-4" /> },
      { name: "Radio Group", href: "/components/radio-group", icon: <CircleDot className="h-4 w-4" /> },
      { name: "Textarea", href: "/components/textarea", icon: <FileText className="h-4 w-4" /> },
      { name: "Select", href: "/components/select", icon: <ChevronsUpDown className="h-4 w-4" /> },
    ],
  },
  {
    category: "Data Display",
    icon: <LayoutGrid className="h-5 w-5" />,
    items: [
      { name: "Avatar", href: "/components/avatar", icon: <PanelsTopLeft className="h-4 w-4" /> },
      { name: "Badge", href: "/components/badge", icon: <Check className="h-4 w-4" /> },
      { name: "Card", href: "/components/card", icon: <FileText className="h-4 w-4" /> },
      { name: "Table", href: "/components/table", icon: <LayoutGrid className="h-4 w-4" /> },
      { name: "Carousel", href: "/components/carousel", icon: <PanelsTopLeft className="h-4 w-4" /> },
    ],
  },
  {
    category: "Navigation",
    icon: <Menu className="h-5 w-5" />,
    items: [
      { name: "Navbar", href: "/components/navbar", icon: <Menu className="h-4 w-4" /> },
      { name: "Tabs", href: "/components/tabs", icon: <PanelsTopLeft className="h-4 w-4" /> },
      { name: "Navigation Menu", href: "/components/navigation-menu", icon: <Menu className="h-4 w-4" /> },
    ],
  },
  {
    category: "Feedback",
    icon: <Bell className="h-5 w-5" />,
    items: [
      { name: "Alert", href: "/components/alert", icon: <AlertCircle className="h-4 w-4" /> },
      { name: "Progress", href: "/components/progress", icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Toast", href: "/components/toast", icon: <MessageSquare className="h-4 w-4" /> },
    ],
  },
];

export default function Components() {
  return (
    <div className="container pb-12 pt-6">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/5">
          <ComponentsSidebar className="hidden md:block" />
        </aside>
        <main className="md:w-4/5 space-y-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold mb-2">Components</h1>
            <p className="text-muted-foreground text-lg">
              A collection of pre-built components ready to use in your projects.
            </p>
          </div>

          <div className="space-y-12">
            {components.map((section) => (
              <div key={section.category} className="space-y-6">
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h2 className="text-2xl font-semibold">{section.category}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "group cursor-pointer",
                      )}
                    >
                      <Card className="h-full transition-all hover:shadow-md hover:border-primary/40 overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                          <CardTitle className="text-lg font-medium">
                            <div className="flex items-center gap-2">
                              {item.icon}
                              {item.name}
                            </div>
                          </CardTitle>
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            View the {item.name} component
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
