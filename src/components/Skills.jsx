import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & AI',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: [
        'Azure (AZ-204)',
        'AWS (DVA-C02)',
        'Azure AI Services',
        'Azure OpenAI',
        'Azure Cognitive Services',
        'Power Platform (PL-400)',
        'Docker',
        'CI/CD',
        'Microservices',
        'Azure Functions',
        'Azure DevOps',
      ],
    },
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        'C#',
        '.NET Core',
        'SQL Server',
        'Entity Framework',
        'Python',
        'Django',
        'Java',
        'SpringBoot',
        'REST APIs',
        'GraphQL',
      ],
    },
    {
      title: 'Frontend Development',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['Angular', 'React', 'Vue', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Specialized in Cloud & AI solutions with full-stack development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2.5 bg-white border-2 border-primary/30 rounded-lg text-gray-700 font-medium shadow-sm hover:shadow-lg hover:scale-105 hover:border-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git',
              'NuGet',
              'npm',
              'Agile/Scrum',
              'Power Apps',
              'Power Automate',
            ].map((tool, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
