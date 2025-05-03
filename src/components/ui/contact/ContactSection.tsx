/* eslint-disable react/no-unescaped-entities */
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = {
    address: "Dhaka, Bangladesh",
    phone: "+8801XXXXXXXXX",
    email: "rakib@example.com",
    linkedIn: "https://linkedin.com/in/rakib-hasan",
    github: "https://github.com/rakib-dev",
  };

  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-12">
          Feel free to reach out via email or social platforms. I'm always open
          to discussing new projects or collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-300 hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-300 hover:underline"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <a
                href={contactInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                <Linkedin size={28} />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
