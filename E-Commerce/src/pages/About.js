import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-20 h-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 mt-5">About Us</h1>
          <p className="text-lg">Learn more about our mission, values, and team.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-base leading-relaxed">
                Our mission is to provide high-quality tech products and exceptional service. We aim to make technology accessible and enjoyable for everyone.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <p className="text-base leading-relaxed">
                Integrity, innovation, and customer satisfaction are the core values that drive us. We are committed to delivering honest, reliable, and cutting-edge solutions.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mb-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-base leading-relaxed">
                Our team is composed of skilled professionals with a passion for technology. We work collaboratively to ensure that every product and service we offer meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
