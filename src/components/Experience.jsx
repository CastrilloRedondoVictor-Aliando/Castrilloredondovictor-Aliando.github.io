import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cloud & AI Developer',
      company: 'Aliando',
      location: 'Madrid, Spain',
      period: '2025 - Present',
      description:
        'Developing AI solutions, Azure and .NET services, directly approaching customers to define requirements and proposing technical approaches that improve product impact.',
      achievements: [
        'Developed AI solutions with Azure services',
        'Direct customer engagement for requirements gathering',
        'Improved technical product impact through innovative approaches',
      ],
    },
    {
      title: 'Python Developer with Django',
      company: 'Ioonic Sistemas Informáticos',
      location: 'Madrid, Spain',
      period: '2022 - 2023',
      description:
        'Developed web applications with Django, managed technical documentation, and designed solutions adapted to customer needs.',
      achievements: [
        'Built scalable web applications with Django',
        'Created comprehensive technical documentation',
        'Designed custom solutions for client requirements',
      ],
    },
    {
      title: 'Java Developer with SpringBoot',
      company: 'El Corte Inglés Seguros',
      location: 'Madrid, Spain',
      period: '2022',
      description:
        'Programmed services in Java, managed databases, optimized queries, and participated in development environment deployments.',
      achievements: [
        'Developed and optimized Java services',
        'Database management and query optimization',
        'Participated in deployment processes',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-white shadow-lg"></div>

                <div className="md:w-1/2"></div>

                <div className="md:w-1/2">
                  <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-dark mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">
                          {exp.company}
                        </p>
                        {exp.location && (
                          <p className="text-gray-500 text-sm">
                            {exp.location}
                          </p>
                        )}
                      </div>
                      <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <p className="font-semibold text-dark">
                        Key Achievements:
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
