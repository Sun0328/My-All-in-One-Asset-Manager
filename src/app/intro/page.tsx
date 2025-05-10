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

export default function IntroPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>User Guide</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Welcome to All-in-One Asset Manager</h1>
            
            <div className="space-y-6">
              <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
                <p className="text-gray-600 mb-4">
                  This application helps you manage all types of assets, including stocks, cryptocurrencies, bank deposits, and more. Through an intuitive interface, you can easily track and manage your financial status.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>View asset overview in the dashboard</li>
                  <li>Add and manage different types of assets</li>
                  <li>Customize your view with widgets</li>
                  <li>Track investment returns and performance</li>
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-3">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Asset Tracking</h3>
                    <p className="text-sm text-gray-500">Real-time tracking of asset value changes</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Investment Analysis</h3>
                    <p className="text-sm text-gray-500">In-depth analysis of portfolio performance</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Report Generation</h3>
                    <p className="text-sm text-gray-500">Generate detailed financial reports</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Risk Monitoring</h3>
                    <p className="text-sm text-gray-500">Monitor investment risk levels</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
