
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ComponentAvatar() {
  const basicAvatarCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`;

  const sizeVariantsCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarSizes() {
  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}`;

  const fallbacksCode = `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarFallbacks() {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-secondary text-secondary-foreground">AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-muted">RB</AvatarFallback>
      </Avatar>
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
              An image element with a fallback for representing the user.
            </p>
          </div>

          <div className="space-y-8">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-4 border rounded-md flex items-center justify-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock code={basicAvatarCode} />
              </TabsContent>
            </Tabs>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Size Variants</h2>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="p-8 border rounded-md flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock code={sizeVariantsCode} />
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Fallbacks</h2>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="p-8 border rounded-md flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-secondary text-secondary-foreground">AB</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-muted">RB</AvatarFallback>
                    </Avatar>
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
