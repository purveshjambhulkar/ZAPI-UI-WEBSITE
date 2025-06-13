import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CheckCheck, Copy, Info, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "zapi-ui"; // Custom CSS Button
import 'zapi-ui/dist/index.css'; 
const buttonImportCode = `import { Button } from "zapi-ui"`;

const buttonUsageCode = `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`;

const buttonSizeCode = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

const buttonWithIconCode = `<Button icon={<Copy />}>Copy</Button>
<Button variant="outline" icon={<CheckCheck />}>Check</Button>`;

const buttonLoadingCode = `<Button loading>Loading...</Button>
<Button variant="outline" loading>Submitting</Button>`;

export default function ComponentButton() {
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
            <h1 className="text-4xl font-bold mb-2">Button</h1>
            <p className="text-xl text-muted-foreground">
              A versatile button component that allows users to perform actions.
            </p>
          </div>

          {/* Info Banner */}
          <div className="p-4 bg-muted/40 border rounded-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            <p className="text-sm">
              Buttons are interactive elements that users can click or tap to trigger an action.
            </p>
          </div>

          {/* Installation */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(buttonImportCode)}
                icon={copied ? <CheckCheck size={16} /> : <Copy size={16} />}
              >
                Copy
              </Button>
            </div>
            <CodeBlock code={buttonImportCode} />
          </div>

          {/* Variants */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Variants</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger value="preview" className="custom-tab">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="custom-tab">
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(buttonUsageCode)}
                    className="absolute top-2 right-2"
                    icon={copied ? <CheckCheck size={16} /> : <Copy size={16} />}
                  >
                    Copy
                  </Button>
                  <CodeBlock code={buttonUsageCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sizes */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Sizes</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger value="preview" className="custom-tab">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="custom-tab">
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(buttonSizeCode)}
                    className="absolute top-2 right-2"
                    icon={copied ? <CheckCheck size={16} /> : <Copy size={16} />}
                  >
                    Copy
                  </Button>
                  <CodeBlock code={buttonSizeCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* With Icon */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">With Icon</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger value="preview" className="custom-tab">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="custom-tab">
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <div className="flex flex-wrap gap-4">
                  <Button icon={<Copy size={16} />}>Copy</Button>
                  <Button variant="outline" icon={<CheckCheck size={16} />}>
                    Check
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(buttonWithIconCode)}
                    className="absolute top-2 right-2"
                    icon={copied ? <CheckCheck size={16} /> : <Copy size={16} />}
                  >
                    Copy
                  </Button>
                  <CodeBlock code={buttonWithIconCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Loading */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Loading State</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger value="preview" className="custom-tab">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="custom-tab">
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6 bg-card">
                <div className="flex flex-wrap gap-4">
                  <Button loading>Loading...</Button>
                  <Button variant="outline" loading>
                    Submitting
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(buttonLoadingCode)}
                    className="absolute top-2 right-2"
                    icon={copied ? <CheckCheck size={16} /> : <Copy size={16} />}
                  >
                    Copy
                  </Button>
                  <CodeBlock code={buttonLoadingCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
