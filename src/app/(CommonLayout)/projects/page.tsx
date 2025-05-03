import ProjectCard from '@/components/ui/project/ProjectCard';
import { Project } from '@/types';
import { Metadata } from 'next';
import 'swiper/css';


export const metadata: Metadata = {
  title: "MD.SHIPON | Projects",
  description: "Mern Stack Developer",
};

const AllProjectsPage = async() => {
   const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`,
      {
       cache:"no-store"
      }
    );
     const data = await res.json();
     const projectsData:Project[]=data.data;
  return (
    <section id="projects" className="py-20 mb-20 px-6  text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">All Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
       
          <ProjectCard key={idx} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectsPage;
