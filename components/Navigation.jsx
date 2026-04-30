import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Alan Horvat
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-secondary transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-secondary transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-secondary transition">
            About
          </Link>
          <Link href="/#contact" className="hover:text-secondary transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
