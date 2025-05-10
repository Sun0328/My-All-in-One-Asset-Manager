export default function AccountList() {
  return (
    <>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Account List</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Account
            </button>
        </div>
        <div className="overflow-x-auto">
                    <table className="w-full">
                    <thead>
                    <tr className="border-b">
                        <th className="text-left p-2">Bank</th>
                        <th className="text-left p-2">Account Type</th>
                        <th className="text-left p-2">Account Number</th>
                        <th className="text-right p-2">Balance</th>
                        <th className="text-right p-2">Interest Rate</th>
                        <th className="text-right p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b">
                        <td colSpan={6} className="text-center p-4 text-gray-500">
                        No account data
                        </td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </>
  )
}
