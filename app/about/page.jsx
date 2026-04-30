import Link from 'next/link'

export const metadata = {
  title: 'About - Alan Horvat',
  description: 'Learn more about Alan Horvat, skills, education, and background',
}

export default function AboutPage() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'SQL', 'REST APIs', 'Database Design'] },
    { category: 'Tools & Practices', items: ['Git', 'GitHub', 'VS Code', 'Responsive Design', 'Debugging'] },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-300">
            Computer Science Student | Full-Stack Developer | Problem Solver
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Background</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm a Computer Science student with a passion for building elegant, user-focused digital solutions. 
              Throughout my academic journey, I've developed strong technical skills in full-stack web development, 
              with particular expertise in modern JavaScript frameworks and responsive design.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This semester's portfolio represents my growth as a developer. Each of the 11 projects showcases 
              different aspects of software engineering—from frontend design to backend systems, from problem 
              analysis to creative solution implementation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond academics, I'm committed to continuous learning, clean code practices, and collaborating 
              effectively with others. I'm excited to bring these skills to real-world projects and contribute 
              meaningfully to development teams.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-secondary">
              <h3 className="font-bold text-lg mb-2">Computer Science Degree</h3>
              <p className="text-gray-600 mb-1">University Name</p>
              <p className="text-gray-600">Expected Graduation: [Year]</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="font-bold text-lg mb-2">Relevant Coursework</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Web Development</li>
                <li>• Data Structures & Algorithms</li>
                <li>• Database Systems</li>
                <li>• Software Engineering</li>
                <li>• UI/UX Design Principles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-secondary">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
          <p className="text-lg mb-6">Check out my projects or get in touch with me</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/projects" className="bg-secondary text-white px-8 py-3 rounded hover:bg-blue-700 transition font-semibold">
              View Projects
            </Link>
            <a href="mailto:your.email@example.com" className="bg-white text-primary px-8 py-3 rounded hover:bg-gray-100 transition font-semibold">
              Send Me an Email
            </a>
          </div>
        </section>

        {/* Resume Download */}
        <section className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to learn more about my experience?</p>
          <a 
            href="/resume.pdf" 
            download
            className="btn-primary"
          >
            📄 Download My Resume
          </a>
        </section>
      </section>
    </div>
  )
}
