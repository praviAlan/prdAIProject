import Link from 'next/link'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex(p => p.id === params.id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div>
      {/* Hero with Project Image */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/projects" className="text-secondary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-300 text-lg">{project.shortDescription}</p>
        </div>
      </section>

      {/* Project Image */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 mb-6">{project.overview}</p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Problem Statement</h2>
              <p className="text-gray-700 mb-6">{project.problem}</p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Solution</h2>
              <p className="text-gray-700 mb-6">{project.solution}</p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Challenges & Learnings</h2>
              <p className="text-gray-700 mb-6">
                <strong>Challenges:</strong> {project.challenges}
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Key Learnings:</strong> {project.learnings}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="inline-block bg-secondary text-white text-sm px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4">Links</h3>
                <div className="space-y-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-primary text-white py-2 rounded hover:bg-gray-800 transition"
                  >
                    View on GitHub
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-secondary text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t pt-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevProject ? (
              <Link 
                href={`/projects/${prevProject.id}`}
                className="p-4 bg-gray-100 rounded hover:bg-gray-200 transition"
              >
                <p className="text-sm text-gray-600">← Previous Project</p>
                <p className="font-bold">{prevProject.title}</p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link 
                href={`/projects/${nextProject.id}`}
                className="p-4 bg-gray-100 rounded hover:bg-gray-200 transition text-right"
              >
                <p className="text-sm text-gray-600">Next Project →</p>
                <p className="font-bold">{nextProject.title}</p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Back to Projects */}
        <div className="text-center mt-12">
          <Link href="/projects" className="btn-primary">
            ← Back to All Projects
          </Link>
        </div>
      </section>
    </div>
  )
}
