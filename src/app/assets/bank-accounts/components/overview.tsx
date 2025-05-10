export default function Overview() {
  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium">Total Balance</h3>
            <p className="text-2xl font-bold">$0.00</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium">Monthly Income</h3>
            <p className="text-2xl font-bold text-green-600">$0.00</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium">Monthly Expenses</h3>
            <p className="text-2xl font-bold text-red-600">$0.00</p>
          </div>
        </div>
    </>
  )
}
