
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck, Copy, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const progressImportCode = `import { Progress } from "@/components/ui/progress"`;

const progressBasicCode = `<Progress value={33} />`;

const progressAnimatedCode = `import { useState, useEffect } from "react"

function ProgressDemo() {
  const [progress, setProgress] = useState(0)
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66)
    }, 500)
    return () => clearTimeout(timer)
  }, [])
 
  return <Progress value={progress} />
}`;

export default function ComponentProgress() {
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
            <h1 className="text-4xl font-bold mb-2">Progress</h1>
            <p className="text-xl text-muted-foreground">
              Displays an indicator showing the completion progress of a task.
            </p>
          </div>
          
          <div className="p-4 bg-muted/40 border rounded-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            <p className="text-sm">
              Progress bars help users understand the status of ongoing operations, providing feedback about how much of a task has been completed.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <Button variant="outline" size="sm" onClick={() => copyToClipboard(progressImportCode)} className="gap-2">
                {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                Copy
              </Button>
            </div>
            <CodeBlock code={progressImportCode} />
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
                <Progress value={33} className="w-full" />
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(progressBasicCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={progressBasicCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Animated</h2>
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
                <Progress value={progress} className="w-full" />
                <div className="mt-2 text-sm text-muted-foreground">
                  Value: {progress}%
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(progressAnimatedCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={progressAnimatedCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Examples</h2>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium leading-none">10%</label>
                <Progress value={10} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium leading-none">33%</label>
                <Progress value={33} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium leading-none">66%</label>
                <Progress value={66} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium leading-none">100%</label>
                <Progress value={100} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium leading-none">Indeterminate</label>
                <Progress />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
