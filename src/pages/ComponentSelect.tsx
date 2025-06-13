
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ComponentSelect() {
  const basicSelectCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </SelectContent>
    </Select>
  )
}`;

  const groupedSelectCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectGroupDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="cst_asia">China Standard Time (CST)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
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
            <h1 className="text-3xl font-bold mb-2">Select</h1>
            <p className="text-muted-foreground text-lg">
              Displays a list of options for the user to pick from—triggered by a button.
            </p>
          </div>

          <div className="space-y-8">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-8 border rounded-md flex items-center justify-center">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="grape">Grape</SelectItem>
                  </SelectContent>
                </Select>
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock code={basicSelectCode} />
              </TabsContent>
            </Tabs>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Grouped Select</h2>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="p-8 border rounded-md flex items-center justify-center">
                  <Select>
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Europe</SelectLabel>
                        <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                        <SelectItem value="cet">Central European Time (CET)</SelectItem>
                        <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Asia</SelectLabel>
                        <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                        <SelectItem value="cst_asia">China Standard Time (CST)</SelectItem>
                        <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock code={groupedSelectCode} />
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Select with Form Example</h2>
              <div className="p-8 border rounded-md">
                <div className="max-w-md mx-auto space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Programming Language
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                        <SelectItem value="typescript">TypeScript</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="csharp">C#</SelectItem>
                        <SelectItem value="cpp">C++</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred programming language
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
