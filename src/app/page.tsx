import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">My All-in-One Asset Manager</h1>
        <p className="text-lg text-gray-600">Manage all your assets, investments, and financial status</p>
        <Link 
          href="/dashboard" 
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Enter Dashboard
        </Link>
      </div>
    </div>
  );
}
