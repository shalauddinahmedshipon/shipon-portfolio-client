/* eslint-disable react/no-unescaped-entities */
import { IProfile } from "@/types";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = ({profile}:{profile:IProfile}) => {

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
          <div className="space-y-6 pt-10">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <a
                href={`mailto:${profile.contactInfo.email}`}
                className="text-gray-300 hover:underline"
              >
                {profile.contactInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <a
                href={`tel:${profile.contactInfo.phone}`}
                className="text-gray-300 hover:underline"
              >
                {profile.contactInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <p className="text-gray-300">{profile.contactInfo.address}</p>
            </div>

            <div className="flex items-center gap-10 mt-6">
              <a
                href={profile.contactInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition flex items-center gap-2"
              >
                <Linkedin size={28} />
                <span className="text-lg">Linkedin</span>
              </a>
              <a
                href={profile.contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition flex items-center gap-2"
              >
                <Github size={28} />
                <span className="text-lg">Github</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
        <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
