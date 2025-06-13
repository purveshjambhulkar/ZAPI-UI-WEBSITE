
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck, Copy, Info, Menu, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const navbarImportCode = `// No specific import needed for navbar, you can create your own`;

const navbarBasicCode = `<nav className="border-b bg-background">
  <div className="container flex h-16 items-center px-4">
    <a className="flex items-center font-bold" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
      <span className="hidden md:inline-block">Acme Inc</span>
    </a>
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
      <a
        className="text-sm font-medium transition-colors hover:text-primary"
        href="#"
      >
        Home
      </a>
      <a
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        href="#"
      >
        Products
      </a>
      <a
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        href="#"
      >
        About
      </a>
      <a
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        href="#"
      >
        Contact
      </a>
    </nav>
    <div className="ml-auto flex items-center space-x-4">
      <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:hidden">
        <Menu className="h-6 w-6" />
      </button>
      <button className="rounded-full border border-neutral-200 w-8 h-8 flex items-center justify-center">
        <User className="h-4 w-4" />
      </button>
    </div>
  </div>
</nav>`;

const navbarWithDropdownCode = `<nav className="border-b bg-background">
  <div className="container flex h-16 items-center px-4">
    <a className="flex items-center font-bold" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
      <span className="hidden md:inline-block">Acme Inc</span>
    </a>
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
      <a
        className="text-sm font-medium transition-colors hover:text-primary"
        href="#"
      >
        Home
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <a
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer flex items-center gap-1"
            href="#"
          >
            Products
            <ChevronDown className="h-4 w-4" />
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Product 1</DropdownMenuItem>
          <DropdownMenuItem>Product 2</DropdownMenuItem>
          <DropdownMenuItem>Product 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <a
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        href="#"
      >
        About
      </a>
      <a
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        href="#"
      >
        Contact
      </a>
    </nav>
    <div className="ml-auto flex items-center space-x-4">
      <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:hidden">
        <Menu className="h-6 w-6" />
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-full border border-neutral-200 w-8 h-8 flex items-center justify-center">
            <User className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</nav>`;

export default function ComponentNavbar() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container pb-12 pt-6">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/5">
          <ComponentsSidebar className="hidden md:block" />
        </aside>
        <main className="md:w-4/5 space-y-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold mb-2">Navbar</h1>
            <p className="text-xl text-muted-foreground">
              A navigation bar for your application.
            </p>
          </div>
          
          <div className="p-4 bg-muted/40 border rounded-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            <p className="text-sm">
              Navigation bars provide a way to navigate between different sections or pages of your application.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Implementation</h2>
              <Button variant="outline" size="sm" onClick={() => copyToClipboard(navbarImportCode)} className="gap-2">
                {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                Copy
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Unlike some other components, the Navbar doesn't have a specific import as it's typically custom-built for each application. Here are some examples you can use as a starting point.
            </p>
            <CodeBlock code={navbarImportCode} />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="preview"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border bg-card">
                <nav className="border-b bg-background">
                  <div className="container flex h-16 items-center px-4">
                    <a className="flex items-center font-bold" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10 8 16 12 10 16 10 8" />
                      </svg>
                      <span className="hidden md:inline-block">Acme Inc</span>
                    </a>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                      <a
                        className="text-sm font-medium transition-colors hover:text-primary"
                        href="#"
                      >
                        Home
                      </a>
                      <a
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        href="#"
                      >
                        Products
                      </a>
                      <a
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        href="#"
                      >
                        About
                      </a>
                      <a
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        href="#"
                      >
                        Contact
                      </a>
                    </nav>
                    <div className="ml-auto flex items-center space-x-4">
                      <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:hidden">
                        <Menu className="h-6 w-6" />
                      </button>
                      <button className="rounded-full border border-neutral-200 w-8 h-8 flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </nav>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(navbarBasicCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={navbarBasicCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">With DropdownMenu</h2>
            <p className="text-sm text-muted-foreground">
              This example shows how to integrate dropdown menus in your navbar. Note that this requires importing the DropdownMenu component.
            </p>
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="preview"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border bg-card">
                <div className="p-4 text-center">
                  <p>Preview omitted as it requires DropdownMenu components</p>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(navbarWithDropdownCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={navbarWithDropdownCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
