import { IExperience, IProfile } from '@/types';
import Link from 'next/link';

const ExperienceSection = ({profile}:{profile:IProfile}) => {

  return (
    <section id="experience" className="py-20 px-6 text-white ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

        <div className="relative border-l  pl-6 space-y-16">
          {profile.experience.map((exp:IExperience, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-gray-400 border-4 " />

              <div className="bg-white/5 hover:bg-white/10 transition rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary">
                  {exp.position}
                </h3>
                <p className="text-sm text-rose-500">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

                {/* Projects */}
                <div className="space-y-6">
                  {exp.projects!.map((project, i) => (
                    <div key={i} className="border-l-2 border-white/10 pl-4 ml-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-white">{project.title}</h4>
                        <Link
                          href={project.liveLink!}
                          target="_blank"
                          className="text-xs text-primary hover:underline"
                        >
                          Live ↗
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
