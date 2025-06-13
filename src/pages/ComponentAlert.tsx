
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  Alert,
  AlertDescription,
  AlertTitle
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck, Copy, Info, Terminal, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const alertImportCode = `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"`;

const alertBasicCode = `<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`;

const alertDestructiveCode = `<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`;

export default function ComponentAlert() {
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
            <h1 className="text-4xl font-bold mb-2">Alert</h1>
            <p className="text-xl text-muted-foreground">
              Displays a callout for user attention.
            </p>
          </div>
          
          <div className="p-4 bg-muted/40 border rounded-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            <p className="text-sm">
              Alerts are used to communicate a state that affects a system, feature or page.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <Button variant="outline" size="sm" onClick={() => copyToClipboard(alertImportCode)} className="gap-2">
                {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                Copy
              </Button>
            </div>
            <CodeBlock code={alertImportCode} />
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
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(alertBasicCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={alertBasicCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Destructive Variant</h2>
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
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(alertDestructiveCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={alertDestructiveCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
