import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Projects - Alan Horvat',
  description: 'All 11 academic projects showcasing diverse technical skills',
}

export default function ProjectsPage() {
  return (
    <div className="container-custom">
      <h1 className="section-title text-4xl">My Projects</h1>
      <p className="text-gray-600 mb-8 text-lg">
        A collection of 11 academic projects demonstrating full-stack development skills, problem-solving ability, and design thinking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
