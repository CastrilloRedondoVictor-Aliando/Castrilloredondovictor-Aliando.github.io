import React from 'react';
import profilePhoto from '../assets/Images/FotoBuena.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-dark">
              Full Stack Developer | Cloud & AI Specialist
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              I am a Full Stack Developer with a practical approach and a continuous learning mindset.
              My passion lies in creating efficient and scalable solutions, combining backend/frontend
              development with cloud technologies and artificial intelligence tools.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              I stand out for my ability to bring real value to teams, quickly adapt to new technological
              challenges, and enjoy working on projects that have a positive impact on products and users.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-3xl font-bold text-primary mb-1">3+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="text-3xl font-bold text-secondary mb-1">28039</h4>
                <p className="text-gray-600">Madrid, Spain</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="aspect-square max-w-md bg-gradient-to-br from-primary to-secondary rounded-2xl p-1">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Victor Castrillo Redondo"
                  className="w-full h-full object-cover object-[center_85%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
