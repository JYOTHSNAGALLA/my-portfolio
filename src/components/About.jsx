import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg mb-6">
          I'm <strong>Jyothsna Galla</strong>, a passionate AI & ML student from Visakhapatnam, India. I’m highly motivated to build smart and user-friendly applications using modern technologies. My journey blends strong foundations in programming (C/C++, Java, Python) with real-world experience in Machine Learning and Web Development.
        </p>
        <p className="text-lg mb-6">
          I’ve interned with companies like Excelr, Dev-Tern, InternsTech, and the Vishakha Steel Plant, where I gained practical experience in MERN stack development and ML project implementation. I'm also actively expanding my skillset through certifications from IBM, EdX, and more.
        </p>

        <h3 className="text-2xl font-semibold mb-4">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg flex items-start">
            <i className="fas fa-code text-indigo-400 text-2xl mr-4"></i>
            <div>
              <h4 className="text-xl font-semibold mb-2">Web Development</h4>
              <p>Building full-stack web applications using the MERN stack with responsive UI/UX.</p>
            </div>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg flex items-start">
            <i className="fas fa-brain text-indigo-400 text-2xl mr-4"></i>
            <div>
              <h4 className="text-xl font-semibold mb-2">Machine Learning</h4>
              <p>Working on data-driven ML models like heart disease prediction for healthcare use-cases.</p>
            </div>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg flex items-start">
            <i className="fas fa-file-code text-indigo-400 text-2xl mr-4"></i>
            <div>
              <h4 className="text-xl font-semibold mb-2">UI Design</h4>
              <p>Designing clean and responsive interfaces using HTML, CSS, Tailwind, and Figma inspiration.</p>
            </div>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg flex items-start">
            <i className="fas fa-laptop-code text-indigo-400 text-2xl mr-4"></i>
            <div>
              <h4 className="text-xl font-semibold mb-2">Project Building</h4>
              <p>Creating and contributing to academic and personal projects hosted on GitHub.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Clients & Collaborations</h3>
<div className="flex flex-wrap gap-4 justify-center">
  <img src="/profile.jpg" alt="Profile" />
<img src="assets/images/client-logo.png" alt="Client Logo" />
</div>

      </div>
    </section>
  );
};

export default About;
