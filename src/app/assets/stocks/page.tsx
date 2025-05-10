import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function StocksPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/assets">Assets</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Stocks</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4">
            <div className="rounded-xl border p-4">
              <h2 className="text-xl font-semibold mb-4">Stock Portfolio</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Total Value</h3>
                  <p className="text-2xl font-bold">$0.00</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Today's Change</h3>
                  <p className="text-2xl font-bold text-green-600">+0.00%</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Holdings</h3>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Holdings Details</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Add Stock
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Symbol</th>
                      <th className="text-left p-2">Name</th>
                      <th className="text-right p-2">Shares</th>
                      <th className="text-right p-2">Cost Basis</th>
                      <th className="text-right p-2">Current Price</th>
                      <th className="text-right p-2">Market Value</th>
                      <th className="text-right p-2">P/L</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td colSpan={7} className="text-center p-4 text-gray-500">
                        No holdings data
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
