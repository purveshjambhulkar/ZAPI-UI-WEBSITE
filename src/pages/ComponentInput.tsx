import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "zapi-ui";
import { cn } from "@/lib/utils";
import { CheckCheck, Copy, Info, Search } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const inputImportCode = `import { Input } from "zapi-ui"`;

const inputBasicCode = `<Input type="text" placeholder="Email" />`;

const inputWithLabelCode = `import { Label } from "@/components/ui/label"

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`;

const inputWithButtonCode = `<Input
  type="email"
  placeholder="Email"
  buttonText="Subscribe"
  onButtonClick={() => alert("Subscribed!")}
/>`;

const inputWithIconCode = `<Input
  type="search"
  placeholder="Search..."
  icon={<Search size={16} className="text-muted-foreground" />}
/>`;

export default function ComponentInput() {
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
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold mb-2">Input</h1>
            <p className="text-xl text-muted-foreground">
              Displays a form input field or a component that looks like an input field.
            </p>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-muted/40 border rounded-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            <p className="text-sm">
              Input fields allow users to enter and edit text content into your application.
            </p>
          </div>

          {/* Installation */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <Button variant="outline" size="sm" onClick={() => copyToClipboard(inputImportCode)} className="gap-2">
                {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                Copy
              </Button>
            </div>
            <CodeBlock code={inputImportCode} />
          </div>

          {/* Basic Usage */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start border-b bg-transparent p-0">
                <TabsTrigger value="preview" className="px-4 pb-3 pt-2 text-muted-foreground">Preview</TabsTrigger>
                <TabsTrigger value="code" className="px-4 pb-3 pt-2 text-muted-foreground">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <Input placeholder="Email" />
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(inputBasicCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={inputBasicCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* With Label */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">With Label</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start border-b bg-transparent p-0">
                <TabsTrigger value="preview" className="px-4 pb-3 pt-2 text-muted-foreground">Preview</TabsTrigger>
                <TabsTrigger value="code" className="px-4 pb-3 pt-2 text-muted-foreground">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email"  placeholder="Email" />
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(inputWithLabelCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={inputWithLabelCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* With Button */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">With Button</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start border-b bg-transparent p-0">
                <TabsTrigger value="preview" className="px-4 pb-3 pt-2 text-muted-foreground">Preview</TabsTrigger>
                <TabsTrigger value="code" className="px-4 pb-3 pt-2 text-muted-foreground">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <Input
                  type="email"
                  placeholder="Email"
                  buttonText="Subscribe"
                  onButtonClick={() => alert("Subscribed!")}
                />
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(inputWithButtonCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={inputWithButtonCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* With Icon */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">With Icon</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start border-b bg-transparent p-0">
                <TabsTrigger value="preview" className="px-4 pb-3 pt-2 text-muted-foreground">Preview</TabsTrigger>
                <TabsTrigger value="code" className="px-4 pb-3 pt-2 text-muted-foreground">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <Input
                  type="search"
                  placeholder="Search..."
                  icon={<Search size={16} className="text-muted-foreground" />}
                />
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(inputWithIconCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={inputWithIconCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
