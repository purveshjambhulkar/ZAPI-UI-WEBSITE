
import { ComponentsSidebar } from "@/components/ComponentsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ComponentTable() {
  const basicTableCode = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$125.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$500.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`;

  const invoices = [
    {
      invoice: "INV001",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    {
      invoice: "INV002",
      status: "Pending",
      method: "PayPal",
      amount: "$125.00",
    },
    {
      invoice: "INV003",
      status: "Unpaid",
      method: "Bank Transfer",
      amount: "$500.00",
    },
    {
      invoice: "INV004",
      status: "Paid",
      method: "Credit Card",
      amount: "$150.00",
    },
    {
      invoice: "INV005",
      status: "Canceled",
      method: "PayPal",
      amount: "$75.00",
    },
  ];

  return (
    <div className="container pb-12 pt-6">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/5">
          <ComponentsSidebar className="hidden md:block" />
        </aside>
        <main className="md:w-4/5 space-y-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Table</h1>
            <p className="text-muted-foreground text-lg">
              A responsive table component for displaying tabular data.
            </p>
          </div>

          <div className="space-y-8">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="border rounded-md">
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>{invoice.method}</TableCell>
                        <TableCell className="text-right">{invoice.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock code={basicTableCode} />
              </TabsContent>
            </Tabs>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Bordered Table</h2>
              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[100px] font-bold">Invoice</TableHead>
                      <TableHead className="font-bold">Status</TableHead>
                      <TableHead className="font-bold">Method</TableHead>
                      <TableHead className="text-right font-bold">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.slice(0, 3).map((invoice) => (
                      <TableRow key={invoice.invoice} className="border-b">
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs ${
                              invoice.status === "Paid"
                                ? "bg-green-100 text-green-800"
                                : invoice.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </TableCell>
                        <TableCell>{invoice.method}</TableCell>
                        <TableCell className="text-right">{invoice.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
