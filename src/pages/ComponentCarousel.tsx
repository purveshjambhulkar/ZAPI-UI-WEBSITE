import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck, Copy, Info } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Carousel } from "zapi-ui"; // ✅ Use from zapi-ui
import { Card, CardContent } from "@/components/ui/card";

const carouselImportCode = `import { Carousel } from "zapi-ui"`;

const carouselBasicCode = `<Carousel>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Carousel>`;

const carouselSizeCode = `<Carousel itemsToShow={2}>
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</Carousel>`;

export default function ComponentCarousel() {
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
            <h1 className="text-4xl font-bold mb-2">Carousel</h1>
            <p className="text-xl text-muted-foreground">
              A carousel component for cycling through elements.
            </p>
          </div>

          <div className="p-4 bg-muted/40 border rounded-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            <p className="text-sm">
              This Carousel is built using plain React and CSS — no third-party slider.
            </p>
          </div>

          {/* Installation */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Installation</h2>
              <Button variant="outline" size="sm" onClick={() => copyToClipboard(carouselImportCode)} className="gap-2">
                {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                Copy
              </Button>
            </div>
            <CodeBlock code={carouselImportCode} />
          </div>

          {/* Basic Carousel */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start border-b p-0">
                <TabsTrigger value="preview" className="rounded-none px-4 pb-3 pt-2 font-semibold text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="rounded-none px-4 pb-3 pt-2 font-semibold text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground">
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="border p-6 rounded-md bg-card">
                <Carousel>
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="text-center">
                      <CardContent className="p-6 font-semibold text-xl">{`Item ${item}`}</CardContent>
                    </Card>
                  ))}
                </Carousel>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(carouselBasicCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={carouselBasicCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Multiple Items Carousel */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Multiple Items</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start border-b p-0">
                <TabsTrigger value="preview" className="rounded-none px-4 pb-3 pt-2 font-semibold text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="rounded-none px-4 pb-3 pt-2 font-semibold text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground">
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="border p-6 rounded-md bg-card">
                <Carousel itemsToShow={2}>
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="text-center">
                      <CardContent className="p-6 font-semibold text-xl">{`Item ${item}`}</CardContent>
                    </Card>
                  ))}
                </Carousel>
              </TabsContent>
              <TabsContent value="code">
                <div className="relative">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(carouselSizeCode)} className="absolute top-2 right-2 gap-2">
                    {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                  </Button>
                  <CodeBlock code={carouselSizeCode} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
