import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with payment integration, product management, and user authentication.',
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and analytics.',
      image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Task+Manager',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with forecasts, interactive maps, and location-based weather data.',
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Weather+App',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media metrics with data visualization and reporting features.',
      image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Social+Dashboard',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Portfolio CMS',
      description:
        'A content management system for portfolios with drag-and-drop editor and theme customization.',
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Portfolio+CMS',
      technologies: ['React', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Fitness Tracker',
      description:
        'Mobile-responsive fitness tracking app with workout plans, progress tracking, and nutrition logging.',
      image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Fitness+Tracker',
      technologies: ['React Native', 'Node.js', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
