import React from 'react';
import pl400Cert from '../assets/Images/OIP.webp';

const Education = () => {
  const education = [
    {
      title: 'Master Full Stack Development + Multicloud with Azure and AWS',
      institution: 'Tajamar Professional Education',
      location: 'Madrid, Spain',
      period: '2025',
      grade: 'Average grade: 10',
      description: 'Comprehensive training in full-stack development with cloud specialization',
    },
    {
      title: 'Multiplatform Application Development',
      institution: 'CEU San Pablo',
      location: 'Madrid, Spain',
      period: '2023',
      grade: 'Final project grade: 9',
      description: 'Higher education in multiplatform application development',
    },
    {
      title: 'Web Application Development',
      institution: 'Colegio Nuestra Señora del Pilar',
      location: 'Madrid, Spain',
      period: '2022',
      grade: 'Final project grade: 10',
      description: 'Higher education focused on web technologies and development',
    },
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      code: 'AZ-204',
      issuer: 'Microsoft',
      icon: 'https://images.credly.com/size/340x340/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png',
    },
    {
      name: 'AWS Certified Developer - Associate',
      code: 'DVA-C02',
      issuer: 'Amazon Web Services',
      icon: 'https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
    },
    {
      name: 'Microsoft Certified: Power Platform Developer Associate',
      code: 'PL-400',
      issuer: 'Microsoft',
      icon: pl400Cert,
    },
  ];

  const languages = [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'B2' },
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Education Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Education & <span className="text-gradient">Studies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <p className="text-primary font-semibold mt-2">
                        {edu.grade}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Professional <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full p-4 shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.icon}
                    alt={cert.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  {cert.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{cert.code}</p>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              <span className="text-gradient">Languages</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="flex justify-center gap-8">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] text-center"
              >
                <h3 className="text-2xl font-bold text-dark mb-2">
                  {lang.language}
                </h3>
                <p className="text-primary font-semibold">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
