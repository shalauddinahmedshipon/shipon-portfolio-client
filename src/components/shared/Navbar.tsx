'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-foreground/10 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or Title */}
        <Link href="/" className="text-xl font-bold text-foreground">
       Mern Stack Developer
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-foreground hover:text-primary transition">
            About
          </Link>
          <Link href="#projects" className="text-foreground hover:text-primary transition">
            Projects
          </Link>
          <Link href="#blog" className="text-foreground hover:text-primary transition">
            Blog
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-background px-4 pb-4 space-y-2">
          <Link href="#about" className="block text-foreground hover:text-primary transition">
            About
          </Link>
          <Link href="#projects" className="block text-foreground hover:text-primary transition">
            Projects
          </Link>
          <Link href="#blog" className="block text-foreground hover:text-primary transition">
            Blog
          </Link>
          <Link href="#contact" className="block text-foreground hover:text-primary transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
