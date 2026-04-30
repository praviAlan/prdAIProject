import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Alan Horvat - CS Student & Developer',
  description: 'Featured projects showcasing technical skills and problem-solving ability',
}

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-4">
            Computer Science Student | Full-Stack Developer | Problem Solver
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Showcasing 11 academic projects demonstrating technical skills, design thinking, and innovation
          </p>
          <Link href="/projects" className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/projects" className="btn-primary text-lg">
            View All 11 Projects
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <h2 className="section-title">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I'm a Computer Science student passionate about building elegant, user-focused solutions. 
                Through this semester's academic projects, I've developed strong skills in full-stack development, 
                UI/UX design, and problem-solving.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Each project in my portfolio represents hands-on learning in different technologies and design patterns.
                I'm excited to apply these skills in real-world development roles and continue growing as an engineer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Key Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {['React', 'Next.js', 'JavaScript', 'Python', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'Git'].map((skill) => (
                  <div key={skill} className="bg-blue-50 p-3 rounded border border-secondary">
                    <p className="font-semibold text-primary">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
