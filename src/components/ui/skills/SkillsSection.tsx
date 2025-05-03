import { IProfile } from '@/types';
import Image from 'next/image';

const SkillsSection = ({profile}:{profile:IProfile}) => {
  // const techSkills = [
  //   { name: 'HTML', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  //   { name: 'CSS', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  //   { name: 'JavaScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  //   { name: 'TypeScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  //   { name: 'Tailwind CSS', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  //   { name: 'MUI', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  //   { name: 'ShadCN', logoUrl: 'https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/logo.png' },
  //   { name: 'React', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  //   { name: 'Redux Toolkit', logoUrl: 'https://redux.js.org/img/redux-logo-landscape.png' },
  //   { name: 'Next.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  //   { name: 'Firebase', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  //   { name: 'Node.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  //   { name: 'Express.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  //   { name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  //   { name: 'Mongoose', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg' },
  //   { name: 'RTK Query', logoUrl: 'https://redux-toolkit.js.org/img/redux-logo.png' },
  // ];

  // const softSkills = [
  //   'Problem Solving',
  //   'Communication',
  //   'Teamwork',
  //   'Time Management',
  //   'Quick Learner',
  // ];

  return (
    <section id="skills" className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        <div className="flex flex-col lg:flex-row gap-12 w-full">
          {/* Tech Skills */}
          <div className='lg:w-3/4'>
            <h3 className="text-2xl font-semibold mb-6 "><span className='text-rose-500'>Technical</span> Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {profile.techSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-3 bg-white/5 hover:bg-white/10 transition rounded-xl shadow-sm"
                >
                  <Image
                    src={skill.logoUrl}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="mb-2 object-contain"
                  />
                  <p className="text-sm text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className='lg:w-1/4'>
            <h3 className="text-2xl font-semibold mb-6 "><span className='text-gray-400'>
            Soft</span> Skills</h3>
            <ul className="space-y-4 pl-2">
              {profile.softSkills.map((skill, index) => (
                <li
                  key={index}
                  className="text-lg bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md transition shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
