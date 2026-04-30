import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.shortDescription}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link 
          href={`/projects/${project.id}`}
          className="inline-block mt-4 bg-secondary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Details →
        </Link>
      </div>
    </div>
  )
}
