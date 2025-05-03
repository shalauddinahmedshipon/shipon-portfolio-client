import { IProfile } from '@/types';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = ({profile}:{profile:IProfile}) => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/projects" className="hover:text-primary transition">Projects</Link>
          <Link href="/blogs" className="hover:text-primary transition">Blogs</Link>
          <Link href={profile.resumeUrl!} target="_blank" className="hover:text-primary transition">Resume</Link>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-xl">
          <Link href={profile.contactInfo.github!} target="_blank" aria-label="GitHub">
            <FaGithub className="hover:text-primary transition" />
          </Link>
          <Link href={profile.contactInfo.linkedIn!} target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-primary transition" />
          </Link>
          <Link href={profile.contactInfo.email!} aria-label="Email">
            <FaEnvelope className="hover:text-primary transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
