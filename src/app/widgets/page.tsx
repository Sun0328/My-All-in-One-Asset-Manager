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

export default function WidgetsPage() {
  return (
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Widgets</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Market Overview</h3>
              <p className="text-sm text-gray-500">Real-time market data and trend analysis</p>
            </div>
            <div className="rounded-xl border p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Asset Allocation</h3>
              <p className="text-sm text-gray-500">Your investment portfolio distribution</p>
            </div>
            <div className="rounded-xl border p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Performance Tracking</h3>
              <p className="text-sm text-gray-500">Track investment returns and performance</p>
            </div>
          </div>
        </div>
      </SidebarInset>
  )
}
