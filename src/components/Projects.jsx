import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Heart Disease Prediction (ML)</h3>
            <p className="text-gray-300 mb-4">
              Developed a machine learning model using Python (Scikit-learn, Pandas) to predict the risk of heart disease based on medical data.
              Included data preprocessing, model training, and deployment with a simple UI.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/JYOTHSNAGALLA/Heart-Disease-Prediction-ML" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                GitHub
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Website (MERN Stack)</h3>
            <p className="text-gray-300 mb-4">
              Created a full-stack online shopping app using MongoDB, Express, React, and Node.js. Implemented user authentication, product listing, and shopping cart features.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                GitHub
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 3 - Optional */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Job Application Tracker</h3>
            <p className="text-gray-300 mb-4">
              A React + Firebase-based app to track job applications with status filters, notes, and deadline reminders — helps job seekers stay organized.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                GitHub
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
