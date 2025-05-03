'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <header className="sticky top-0 z-50 w-full bg-black/20 border-b backdrop-blur-lg shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or Title with Typewriter */}
        <Link href="/" className="text-xl font-bold whitespace-nowrap">
          M
          <span className="text-rose-500">E</span>RN{' '}
          <span className="text-primary">
            <Typewriter
              words={['Stack Developer']}
              loop={2}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            
            />
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="transition">Home</Link>
          <Link href="/projects" className="transition">Projects</Link>
          <Link href="/blogs" className="transition">Blog</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden text-white px-4 pb-4 space-y-2">
          <Link href="/" className="block transition">Home</Link>
          <Link href="/projects" className="block transition">Projects</Link>
          <Link href="/blogs" className="block transition">Blog</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
