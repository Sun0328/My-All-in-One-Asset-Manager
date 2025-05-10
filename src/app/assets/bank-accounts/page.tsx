import Overview from "./components/overview"
import AccountList from "./components/accountList"
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

export default function BankAccountsPage() {
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
                <BreadcrumbPage>Bank Accounts</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4">
            <div className="rounded-xl border p-4">
              <Overview />
            </div>

            <div className="rounded-xl border p-4">
              <AccountList />
            </div>

            <div className="rounded-xl border p-4">
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Description</th>
                      <th className="text-left p-2">Account</th>
                      <th className="text-right p-2">Amount</th>
                      <th className="text-right p-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td colSpan={5} className="text-center p-4 text-gray-500">
                        No transaction records
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
