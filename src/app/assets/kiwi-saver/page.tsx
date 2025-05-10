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

export default function KiwiSaverPage() {
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
                <BreadcrumbPage>KiwiSaver</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4">
            <div className="rounded-xl border p-4">
              <h2 className="text-xl font-semibold mb-4">KiwiSaver Overview</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Total Balance</h3>
                  <p className="text-2xl font-bold">$0.00</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Year to Date Returns</h3>
                  <p className="text-2xl font-bold text-green-600">$0.00</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Return Rate</h3>
                  <p className="text-2xl font-bold">0.00%</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Fund Details</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Add Fund
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Provider</th>
                      <th className="text-left p-2">Fund Type</th>
                      <th className="text-right p-2">Balance</th>
                      <th className="text-right p-2">Annual Return</th>
                      <th className="text-right p-2">Management Fee</th>
                      <th className="text-right p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td colSpan={6} className="text-center p-4 text-gray-500">
                        No fund data
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <h2 className="text-xl font-semibold mb-4">Contribution History</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Type</th>
                      <th className="text-left p-2">Provider</th>
                      <th className="text-right p-2">Amount</th>
                      <th className="text-right p-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td colSpan={5} className="text-center p-4 text-gray-500">
                        No contribution records
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <h2 className="text-xl font-semibold mb-4">Portfolio Analysis</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Risk Level</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">0%</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Asset Allocation</h3>
                  <div className="text-center text-gray-500">
                    No data available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
