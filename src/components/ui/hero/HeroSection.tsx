import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-16 text-white"
    >
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I&apos;m <span className="text-gray-300">Md. Shipon</span>
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
       <span className="text-primary">M<span className='text-rose-500'>E</span>RN Stack Developer</span>
        </h1>
        <p className="text-lg mb-6">
          I specialize in building modern full-stack web applications using MongoDB, Express, React, and Node.js.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <Link
            href="/#projects"
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
          >
            View Projects
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition"
          >
            Download Resume
          </Link>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-48 h-48 md:w-64 lg:w-80 lg:h-80 md:h-64 relative rounded-full overflow-hidden border-4 border-primary shadow-lg">
        <Image
          src="/assets/shipon.jfif"
          alt="Profile Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
