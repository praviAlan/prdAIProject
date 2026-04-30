import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h2>
        <p className="text-gray-600 text-lg mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/projects" 
          className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  )
}
