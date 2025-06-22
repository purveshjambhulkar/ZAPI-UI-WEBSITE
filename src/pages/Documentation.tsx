import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/CodeBlock";

const installCode = `npm install zapi-ui
# or
yarn add zapi-ui`;

const importCSSCode = `import 'zapi-ui/dist/index.css';`;

const usageCode = `import { Checkbox } from 'zapi-ui';

function App() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label="Accept Terms"
      description="Please accept the terms and conditions"
    />
  );
}`;

export default function Documentation() {
  return (
    <div className="container pb-12 pt-10">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Get started with the zapi-ui component library
          </p>
        </div>

        {/* Overview */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">zapi-ui</h2>
          <p className="text-muted-foreground">
            A customizable and accessible React UI component library built with plain CSS.
          </p>
        </div>

        {/* Installation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">📦 Installation</h2>
          <p className="text-muted-foreground">Install the package using npm or yarn:</p>
          <CodeBlock code={installCode} language="bash" />

          <p className="text-muted-foreground mt-4">Then, import the CSS in your main file:</p>
          <CodeBlock code={importCSSCode} language="js" />
        </div>

        {/* Usage */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">🚀 Usage</h2>
          <p className="text-muted-foreground">
            Import and use any component from the library:
          </p>
          <CodeBlock code={usageCode} language="tsx" />
        </div>

        {/* Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">✨ Features</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Built with plain CSS – no dependency on Tailwind or other frameworks</li>
            <li>Accessible and keyboard-friendly</li>
            <li>Custom styling via <code>className</code></li>
            <li>Supports labels, descriptions, and disabled state</li>
            <li>Lightweight and easy to integrate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
