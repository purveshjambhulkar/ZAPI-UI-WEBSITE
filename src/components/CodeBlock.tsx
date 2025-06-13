
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative code-block group", className)}>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-4 top-4 h-6 w-6 opacity-50 hover:opacity-100"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        <span className="sr-only">Copy code</span>
      </Button>
      <pre className="overflow-x-auto p-0 text-sm">
        <code className="language-{language}">{code}</code>
      </pre>
    </div>
  );
}
