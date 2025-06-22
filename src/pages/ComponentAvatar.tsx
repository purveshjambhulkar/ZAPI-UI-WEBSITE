import { useState } from "react";
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Avatar } from "zapi-ui";

export default function ComponentAvatar() {
  const basicAvatarCode = `import { Avatar } from "zapi-ui"

export function AvatarDemo() {
  return (
    <Avatar src="https://github.com/shadcn.png" fallback="CN" />
  )
}`;

  const sizeVariantsCode = `import { Avatar } from "zapi-ui"

export function AvatarSizes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar src="https://github.com/shadcn.png" fallback="SM" size="sm" />
      <Avatar src="https://github.com/shadcn.png" fallback="MD" size="md" />
      <Avatar src="https://github.com/shadcn.png" fallback="LG" size="lg" />
    </div>
  )
}`;

  const fallbacksCode = `import { Avatar } from "zapi-ui"

export function AvatarFallbacks() {
  return (
    <div className="flex items-center gap-4">
      <Avatar fallback="JD" />
      <Avatar fallback="AB" />
      <Avatar fallback="RB" />
    </div>
  )
}`;

  return (
    <div className="container pb-12 pt-6">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/5">
          <ComponentsSidebar className="hidden md:block" />
        </aside>

        <main className="md:w-4/5 space-y-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Avatar</h1>
            <p className="text-muted-foreground text-lg">
              A circular profile image component with fallback initials.
            </p>
          </div>

          {/* Basic Avatar */}
          <div className="space-y-8">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent
                value="preview"
                className="p-4 border rounded-md flex items-center justify-center"
              >
                <Avatar src="https://github.com/shadcn.png" fallback="CN" />
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock code={basicAvatarCode} />
              </TabsContent>
            </Tabs>

            {/* Size Variants */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Size Variants</h2>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="preview"
                  className="p-8 border rounded-md flex items-center justify-center"
                >
                  <div className="flex gap-4">
                    <Avatar src="https://github.com/shadcn.png" fallback="SM" size="sm" />
                    <Avatar src="https://github.com/shadcn.png" fallback="MD" size="md" />
                    <Avatar src="https://github.com/shadcn.png" fallback="LG" size="lg" />
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock code={sizeVariantsCode} />
                </TabsContent>
              </Tabs>
            </div>

            {/* Fallbacks */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Fallbacks</h2>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="preview"
                  className="p-8 border rounded-md flex items-center justify-center"
                >
                  <div className="flex gap-4">
                    <Avatar fallback="JD" />
                    <Avatar fallback="AB" />
                    <Avatar fallback="RB" />
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock code={fallbacksCode} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
