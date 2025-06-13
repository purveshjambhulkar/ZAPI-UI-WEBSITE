import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";

const buttonExample = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <Button variant="outline">Button</Button>
  )
}`;

export default function Home() {
  const { toast } = useToast();
  
  const showToast = () => {
    toast({
      title: "Welcome to UI Library",
      description: "Beautifully designed components built with Tailwind CSS & shadcn/ui",
    });
  };

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
              and paste into your apps. Free. Open Source.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/components">Browse Components</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/docs">Documentation</Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={showToast} className="hidden sm:flex">
                Try Toast Notification <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mt-4">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">5,000+ Stars on GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 space-y-10">
          <div className="mx-auto text-center space-y-2 max-w-[50rem]">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Features</h2>
            <p className="text-muted-foreground md:text-xl">
              Designed for developer experience and user accessibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="p-2 rounded-full bg-primary/10 w-fit">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All components follow WAI-ARIA guidelines and are keyboard accessible.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="p-2 rounded-full bg-primary/10 w-fit">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Customizable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Components are built with Tailwind CSS and are easily customizable to match your design.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="p-2 rounded-full bg-primary/10 w-fit">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Headless</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built on top of Radix UI primitives, giving you full control over styling.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="p-2 rounded-full bg-primary/10 w-fit">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The entire project is open source on GitHub and free to use in any project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6 space-y-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Copy and paste components
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Start building faster
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl">
              Get the code you need and integrate it into your project.
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
                  <div className="flex items-center justify-center p-10 bg-background">
                    <Button variant="outline">Button</Button>
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

      {/* Testimonials Carousel Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 space-y-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              From the community
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl">
              Feedback from developers who've used our components
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">SL</span>
                        </div>
                        <div>
                          <CardTitle className="text-base">Sarah L.</CardTitle>
                          <CardDescription>@sarahdev</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      "These components have saved me hours of time. The attention to detail is impressive."
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">JT</span>
                        </div>
                        <div>
                          <CardTitle className="text-base">Jason T.</CardTitle>
                          <CardDescription>@jasondesigner</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      "Perfect combination of flexibility and structure. I can customize everything but don't have to."
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">MR</span>
                        </div>
                        <div>
                          <CardTitle className="text-base">Michael R.</CardTitle>
                          <CardDescription>@michaelcodes</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      "The documentation is incredible. Every component is well explained with practical examples."
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">EJ</span>
                        </div>
                        <div>
                          <CardTitle className="text-base">Emma J.</CardTitle>
                          <CardDescription>@emmajs</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      "I love how accessible these components are. It makes my job as a developer so much easier."
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
