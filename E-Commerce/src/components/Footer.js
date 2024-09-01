import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 w-full mt-5">
      <div className="container mx-auto flex flex-wrap justify-evenly px-2">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-4 uppercase">About Us</h4>
          <p className="text-sm leading-relaxed">
            We are committed to providing the best tech products with top-notch quality and service. Explore our wide range of gadgets and find the perfect one for you!
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0 px-16">
          <h4 className="text-xl font-semibold mb-4 uppercase">Quick Links</h4>
          <ul className="list-none p-0">
            <li className="mb-2"><Link to="/" className="text-gray-200 hover:text-blue-400">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="text-gray-200 hover:text-blue-400">About</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-gray-200 hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0 px-16">
          <h4 className="text-xl font-semibold mb-4 uppercase">Contact Us</h4>
          <p className="text-sm">Email: support@bytemart.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0 px-16">
          <h4 className="text-xl font-semibold mb-4 uppercase">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-200 hover:text-blue-400 text-xl"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-200 hover:text-blue-400 text-xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-200 hover:text-blue-400 text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-200 hover:text-blue-400 text-xl"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 ByteMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
