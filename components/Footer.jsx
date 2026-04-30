import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div id="contact" className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <div className="flex gap-6">
            <a 
              href="mailto:your.email@example.com"
              className="hover:text-secondary transition"
            >
              📧 Email
            </a>
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              🔗 GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Alan Horvat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
