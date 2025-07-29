import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Resume</h2>

        {/* Career Objective */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">Career Objective</h3>
          <p className="text-gray-300">
            Motivated and detail-oriented Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. Experienced in full-stack development and ML applications through internships and academic projects. Adept in problem-solving, communication, and rapid learning. Looking to contribute to impactful projects at TCS while expanding my technical expertise.
          </p>
        </div>

        {/* Education */}
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">B.Tech – CSE (AI & ML)</h4>
            <p className="text-gray-400">Gayatri Vidya Parishad College of Engineering for Women</p>
            <p className="text-gray-400">Aug 2023 – April 2026 | CGPA: 7.89</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Diploma – Electrical & Electronics Engineering</h4>
            <p className="text-gray-400">Sankethika Vidya Parishad College, Visakhapatnam</p>
            <p className="text-gray-400">Dec 2020 – May 2023 | CGPA: 8.3</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Class X – CBSE</h4>
            <p className="text-gray-400">MP & EV English Medium School, Gajuwaka, Vizag, AP</p>
            <p className="text-gray-400">Completed: March 2020</p>
          </div>
        </div>

        {/* Internships */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Internships</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>CSC (AICTE) – MEAN Stack Development (May 2025 – July 2025)</li>
          <li>Excelr (AICTE) – MERN Stack Development (May 2024 – July 2024)</li>
          <li>Interns Tech – Machine Learning (March 2024 – April 2024)</li>
          <li>Vishakha Steel Plant – Industrial Training (Jan 2023 – May 2023)</li>
        </ul>

        {/* Projects */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Projects</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>
            <strong>Heart Disease Prediction (ML):</strong> Built a machine learning model to classify patients' heart disease risk.
          </li>
          <li>
            <strong>E-Commerce Website (MERN):</strong> Developed a full-stack online shopping platform with dynamic product and cart features.
          </li>
        </ul>

        {/* Skills */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Technical Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
          <li>C / C++</li>
          <li>Java</li>
          <li>Python</li>
          <li>HTML / CSS / JavaScript</li>
          <li>MERN Stack</li>
          <li>DBMS</li>
          <li>DevOps</li>
          <li>Power BI</li>
        </ul>

        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Soft Skills</h3>
        <ul className="grid grid-cols-2 gap-4 text-gray-300">
          <li>Communication</li>
          <li>Presentation</li>
          <li>Collaboration</li>
          <li>Quick Learner</li>
        </ul>

        {/* Certifications */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Certifications</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Excelr – MERN Stack Internship (AICTE)</li>
          <li>DevTern – Web Development Internship</li>
          <li>Interns Tech – Machine Learning Internship</li>
          <li>IBM – Cloud Computing</li>
          <li>edX – Generative AI</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
