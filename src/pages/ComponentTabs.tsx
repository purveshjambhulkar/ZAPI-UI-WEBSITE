
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ComponentTabsPage() {
  const basicTabsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent className="pt-6">
            <p>Account tab content</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent className="pt-6">
            <p>Password tab content</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`;

  const formTabsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AccountForm() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent className="space-y-2 pt-6">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@johndoe" />
            </div>
            <Button className="mt-4">Save changes</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent className="space-y-2 pt-6">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
            <Button className="mt-4">Change password</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
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
            <h1 className="text-3xl font-bold mb-2">Tabs</h1>
            <p className="text-muted-foreground text-lg">
              A set of layered sections of content that display one panel of content at a time.
            </p>
          </div>

          <div className="space-y-8">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-8 border rounded-md flex items-center justify-center">
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Account tab content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Password tab content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock code={basicTabsCode} />
              </TabsContent>
            </Tabs>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Tabs with Form</h2>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="p-8 border rounded-md flex items-center justify-center">
                  <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <Card>
                        <CardContent className="space-y-2 pt-6">
                          <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="John Doe" />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@johndoe" />
                          </div>
                          <Button className="mt-4">Save changes</Button>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="password">
                      <Card>
                        <CardContent className="space-y-2 pt-6">
                          <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                          </div>
                          <Button className="mt-4">Change password</Button>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock code={formTabsCode} />
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Custom Styled Tabs</h2>
              <div className="p-8 border rounded-md flex items-center justify-center">
                <Tabs defaultValue="tab1" className="w-[400px]">
                  <TabsList className="mb-6 bg-transparent border-b w-full flex justify-start gap-4 p-0">
                    <TabsTrigger value="tab1" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-2 pb-2 -mb-px data-[state=active]:shadow-none bg-transparent">
                      Tab 1
                    </TabsTrigger>
                    <TabsTrigger value="tab2" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-2 pb-2 -mb-px data-[state=active]:shadow-none bg-transparent">
                      Tab 2
                    </TabsTrigger>
                    <TabsTrigger value="tab3" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-2 pb-2 -mb-px data-[state=active]:shadow-none bg-transparent">
                      Tab 3
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="p-4 bg-muted/20 rounded-md">
                    <p>Content for tab 1</p>
                  </TabsContent>
                  <TabsContent value="tab2" className="p-4 bg-muted/20 rounded-md">
                    <p>Content for tab 2</p>
                  </TabsContent>
                  <TabsContent value="tab3" className="p-4 bg-muted/20 rounded-md">
                    <p>Content for tab 3</p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
