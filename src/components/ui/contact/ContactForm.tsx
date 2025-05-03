"use client"
import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-md">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <textarea
      rows={4}
      placeholder="Your Message"
      className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
    ></textarea>
    <button
      type="submit"
      className="bg-gray-600 text-white py-2 px-6 rounded hover:bg-opacity-90 transition"
    >
      Send Message
    </button>
  </form>
  );
};

export default ContactForm;