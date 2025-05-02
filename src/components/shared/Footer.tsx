import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Md. Shipon</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="#about" className="hover:text-primary transition">About</Link>
          <Link href="#skills" className="hover:text-primary transition">Skills</Link>
          <Link href="#experience" className="hover:text-primary transition">Experience</Link>
          <Link href="#projects" className="hover:text-primary transition">Projects</Link>
          <Link href="/resume.pdf" target="_blank" className="hover:text-primary transition">Resume</Link>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-xl">
          <Link href="https://github.com/rakib-dev" target="_blank" aria-label="GitHub">
            <FaGithub className="hover:text-primary transition" />
          </Link>
          <Link href="https://linkedin.com/in/rakib-hasan" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-primary transition" />
          </Link>
          <Link href="mailto:rakib@example.com" aria-label="Email">
            <FaEnvelope className="hover:text-primary transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
