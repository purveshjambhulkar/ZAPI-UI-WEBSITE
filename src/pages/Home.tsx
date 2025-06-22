import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const buttonExample = `import { Button } from "zapi-ui"

export function ButtonDemo() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </>
  )
}`;

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px-60px)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Introducing UI Library
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mt-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 drop-shadow-sm">
                Beautiful components
              </span>
              <br className="hidden md:inline" />
              <span className="relative inline-block mt-2 text-foreground">
                for your next project
                <div className="absolute -bottom-2 w-full h-1 bg-primary/30 rounded-full"></div>
              </span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
              A collection of accessible and customizable components that you can copy
              and paste into your apps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/components">Browse Components</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link to="/docs">Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6 space-y-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Start building faster
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Easily integrate this button into your React app
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl">
              Copy and paste the code into your project and customize it as needed.
            </p>
          </div>
          <div className="mx-auto w-full max-w-3xl">
            <div className="overflow-hidden rounded-xl border bg-card shadow-xl">
              <Tabs defaultValue="preview" className="w-full">
                <div className="flex items-center justify-between border-b bg-muted/50 px-4">
                  <TabsList className="w-full justify-start rounded-none border-b-0 bg-transparent p-0">
                    <TabsTrigger
                      value="preview"
                      className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                    >
                      Preview
                    </TabsTrigger>
                    <TabsTrigger
                      value="code"
                      className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                    >
                      Code
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="preview" className="p-0">
                  <div className="flex flex-wrap gap-4 items-center justify-center p-10 bg-background">
                    <Button variant="default">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Danger</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </TabsContent>
                <TabsContent value="code" className="p-0">
                  <CodeBlock code={buttonExample} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
