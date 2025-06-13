
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/CodeBlock";

const installCode = `npx create-next-app@latest my-app --typescript --eslint
cd my-app
npx shadcn-ui@latest init`;

export default function Documentation() {
  return (
    <div className="container pb-12 pt-10">
      <div className="mx-auto max-w-4xl space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Get started with the UI component library
          </p>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Installation</h2>
          <p className="text-muted-foreground">
            Install the components using the CLI:
          </p>
          <CodeBlock code={installCode} language="bash" />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Framework Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Next.js</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Works with Next.js Pages and App Router
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>React</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Works with Create React App and Vite
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Remix</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Works with Remix React Framework
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gatsby</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Works with Gatsby React Framework
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Astro</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Works with Astro and React integration
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Laravel</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Works with Laravel Inertia.js
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Project Structure</h2>
          <p className="text-muted-foreground">
            The components are organized in the following way:
          </p>
          <CodeBlock
            code={`components/
├── ui/
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   └── ...
└── ...`}
            language="bash"
          />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Customization</h2>
          <p className="text-muted-foreground">
            You can customize the components by editing the CSS variables in your
            globals.css file:
          </p>
          <CodeBlock
            code={`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  
  --radius: 0.5rem;
}`}
            language="css"
          />
        </div>
      </div>
    </div>
  );
}
