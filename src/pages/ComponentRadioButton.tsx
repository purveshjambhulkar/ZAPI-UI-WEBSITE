
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const radioImportCode = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`;

const radioBasicCode = `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`;

const radioDisabledCode = `<RadioGroup defaultValue="default">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r4" />
    <Label htmlFor="r4">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r5" disabled />
    <Label htmlFor="r5" className="text-muted-foreground">Comfortable (disabled)</Label>
  </div>
</RadioGroup>`;

export default function ComponentRadioButton() {
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
            <h1 className="text-4xl font-bold mb-2">Radio Group</h1>
            <p className="text-xl text-muted-foreground">
              A set of checkable buttons where only one can be checked at a time.
            </p>
          </div>
          
          <div className="p-4 bg-muted/40 border rounded-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            <p className="text-sm">
              Radio groups allow users to select a single option from a list of mutually exclusive choices.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <Button variant="outline" size="sm" onClick={() => copyToClipboard(radioImportCode)} className="gap-2">
                {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                Copy
              </Button>
            </div>
            <CodeBlock code={radioImportCode} />
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
                <RadioGroup defaultValue="comfortable" className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>
                </RadioGroup>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(radioBasicCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={radioBasicCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Disabled</h2>
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
                <RadioGroup defaultValue="default" className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r4" />
                    <Label htmlFor="r4">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r5" disabled />
                    <Label htmlFor="r5" className="text-muted-foreground">Comfortable (disabled)</Label>
                  </div>
                </RadioGroup>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(radioDisabledCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={radioDisabledCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
