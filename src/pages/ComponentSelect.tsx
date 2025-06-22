import { useState } from "react";
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Select } from "zapi-ui";

export default function ComponentSelect() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const basicSelectCode = `import { Select } from "zapi-ui";

const [value, setValue] = useState("");

<Select
  value={value}
  onChange={setValue}
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Grape", value: "grape" },
  ]}
/>`;

  const groupedSelectCode = `import { Select } from "zapi-ui";

const [value, setValue] = useState("");

<Select
  value={value}
  onChange={setValue}
  grouped
  options={[
    {
      label: "North America",
      options: [
        { label: "Eastern Standard Time (EST)", value: "est" },
        { label: "Central Standard Time (CST)", value: "cst" },
        { label: "Pacific Standard Time (PST)", value: "pst" },
      ],
    },
    {
      label: "Europe",
      options: [
        { label: "Greenwich Mean Time (GMT)", value: "gmt" },
        { label: "Central European Time (CET)", value: "cet" },
        { label: "Eastern European Time (EET)", value: "eet" },
      ],
    },
    {
      label: "Asia",
      options: [
        { label: "Japan Standard Time (JST)", value: "jst" },
        { label: "China Standard Time (CST)", value: "cst_asia" },
        { label: "India Standard Time (IST)", value: "ist" },
      ],
    },
  ]}
/>`;

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
              A native HTML dropdown with support for grouping, placeholder, and custom styles.
            </p>
          </div>

          {/* Basic Select */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Basic Select</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-6 border rounded-md flex items-center justify-center">
                <Select
                  value={value1}
                  onChange={setValue1}
                  placeholder="Select a fruit"
                  options={[
                    { label: "Apple", value: "apple" },
                    { label: "Banana", value: "banana" },
                    { label: "Orange", value: "orange" },
                    { label: "Grape", value: "grape" },
                  ]}
                />
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock code={basicSelectCode} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Grouped Select */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Grouped Select</h2>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-6 border rounded-md flex items-center justify-center">
                <Select
                  value={value2}
                  onChange={setValue2}
                  placeholder="Select a timezone"
                  grouped
                  options={[
                    {
                      label: "North America",
                      options: [
                        { label: "Eastern Standard Time (EST)", value: "est" },
                        { label: "Central Standard Time (CST)", value: "cst" },
                        { label: "Pacific Standard Time (PST)", value: "pst" },
                      ],
                    },
                    {
                      label: "Europe",
                      options: [
                        { label: "Greenwich Mean Time (GMT)", value: "gmt" },
                        { label: "Central European Time (CET)", value: "cet" },
                        { label: "Eastern European Time (EET)", value: "eet" },
                      ],
                    },
                    {
                      label: "Asia",
                      options: [
                        { label: "Japan Standard Time (JST)", value: "jst" },
                        { label: "China Standard Time (CST)", value: "cst_asia" },
                        { label: "India Standard Time (IST)", value: "ist" },
                      ],
                    },
                  ]}
                />
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock code={groupedSelectCode} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Select in a Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Select with Form</h2>
            <div className="p-8 border rounded-md max-w-md mx-auto space-y-4">
              <label className="text-sm font-medium">Programming Language</label>
              <Select
                value={value3}
                onChange={setValue3}
                placeholder="Select a language"
                options={[
                  { label: "JavaScript", value: "javascript" },
                  { label: "TypeScript", value: "typescript" },
                  { label: "Python", value: "python" },
                  { label: "Java", value: "java" },
                  { label: "C#", value: "csharp" },
                  { label: "C++", value: "cpp" },
                ]}
              />
              <p className="text-sm text-muted-foreground">
                Choose your most comfortable programming language.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
