
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
import { CheckCheck, Copy, Info } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Toast, 
  ToastAction, 
  ToastDescription, 
  ToastTitle 
} from "@/components/ui/toast";

const toastImportCode = `import { useToast } from "@/hooks/use-toast"`;

const toastBasicCode = `import { useToast } from "@/hooks/use-toast"
 
function ToastDemo() {
  const { toast } = useToast()
 
  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}`;

const toastWithActionCode = `import { useToast } from "@/hooks/use-toast"
 
function ToastDemo() {
  const { toast } = useToast()
 
  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Try again">Try again</ToastAction>
          ),
        })
      }}
    >
      Show Toast
    </Button>
  )
}`;

const toastDestructiveCode = `import { useToast } from "@/hooks/use-toast"
 
function ToastDemo() {
  const { toast } = useToast()
 
  return (
    <Button
      variant="destructive"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong.",
          action: (
            <ToastAction altText="Try again">Try again</ToastAction>
          ),
        })
      }}
    >
      Show Destructive Toast
    </Button>
  )
}`;

export default function ComponentToast() {
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

  const showBasicToast = () => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };

  const showToastWithAction = () => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  const showDestructiveToast = () => {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Something went wrong.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  return (
    <div className="container pb-12 pt-6">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/5">
          <ComponentsSidebar className="hidden md:block" />
        </aside>
        <main className="md:w-4/5 space-y-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold mb-2">Toast</h1>
            <p className="text-xl text-muted-foreground">
              A succinct message that is displayed temporarily.
            </p>
          </div>
          
          <div className="p-4 bg-muted/40 border rounded-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            <p className="text-sm">
              Toasts are used to communicate a state that affects a system, feature or page, providing quick, non-intrusive feedback.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <Button variant="outline" size="sm" onClick={() => copyToClipboard(toastImportCode)} className="gap-2">
                {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                Copy
              </Button>
            </div>
            <CodeBlock code={toastImportCode} />
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
                <Button onClick={showBasicToast}>Show Toast</Button>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(toastBasicCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={toastBasicCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">With Action</h2>
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
                <Button onClick={showToastWithAction}>Show Toast with Action</Button>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(toastWithActionCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={toastWithActionCode} />
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
                <Button variant="destructive" onClick={showDestructiveToast}>
                  Show Destructive Toast
                </Button>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(toastDestructiveCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={toastDestructiveCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
