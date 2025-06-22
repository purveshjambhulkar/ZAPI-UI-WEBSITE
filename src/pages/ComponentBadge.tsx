import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Badge } from "zapi-ui"; // ✅ Using zapi-ui Badge now

export default function ComponentBadge() {
  const basicBadgeCode = `import { Badge } from "zapi-ui";

export function BadgeDemo() {
  return <Badge>Badge</Badge>;
}`

  const variantsCode = `import { Badge } from "zapi-ui";

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`

  const usageExamplesCode = `import { Badge } from "zapi-ui";

export function BadgeExamples() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
        <Badge className="bg-yellow-500 hover:bg-yellow-600">In Progress</Badge>
        <Badge className="bg-red-500 hover:bg-red-600">Failed</Badge>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <Badge variant="outline">Online</Badge>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <Badge variant="outline">Offline</Badge>
        </div>
      </div>
    </div>
  );
}`

  return (
    <div className="container pb-12 pt-6">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/5">
          <ComponentsSidebar className="hidden md:block" />
        </aside>
        <main className="md:w-4/5 space-y-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Badge</h1>
            <p className="text-muted-foreground text-lg">
              Display a small piece of information or status.
            </p>
          </div>

          <div className="space-y-8">
            {/* Basic Badge */}
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent
                value="preview"
                className="p-8 border rounded-md flex items-center justify-center"
              >
                <Badge>Badge</Badge>
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock code={basicBadgeCode} />
              </TabsContent>
            </Tabs>

            {/* Badge Variants */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Badge Variants</h2>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="preview"
                  className="p-8 border rounded-md flex items-center justify-center"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock code={variantsCode} />
                </TabsContent>
              </Tabs>
            </div>

            {/* Badge Usage Examples */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Badge Usage Examples</h2>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="preview"
                  className="p-8 border rounded-md flex items-center justify-center"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-4 items-center">
                      <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">In Progress</Badge>
                      <Badge className="bg-red-500 hover:bg-red-600">Failed</Badge>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <Badge variant="outline">Online</Badge>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <Badge variant="outline">Offline</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock code={usageExamplesCode} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
