import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as validation
        setIsSubmitted(true);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
  return (
    <div>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12">
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            
            {isSubmitted ? (
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Thank you!</h3>
                <p>We've received your message and will get back to you soon.</p>
            </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                />
                </div>
                <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 h-32 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                />
                </div>
                <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300"
                >
                Send Message
                </button>
            </form>
            )}
        </div>
        </div>
    </div>
  )
}

export default Contact