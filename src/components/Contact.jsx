import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" rows="5"></textarea>
            <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-lg font-semibold hover:bg-indigo-600">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;