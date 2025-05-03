import Link from "next/link";
import SwiperGallery from "./ProjectCardSlider";
import { Github, LinkIcon } from "lucide-react";
import { Project } from "@/types";


const ProjectCard = ({ project }:{project:Project}) => {
  return (
    <div
    className="bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-md"
  >
 <SwiperGallery imageUrls={project.imageUrls} />


    <h3 className="text-2xl font-semibold mb-2 mt-3">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.shortDescription}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, techIdx) => (
        <span
          key={techIdx}
          className=" text-xs px-2 py-1 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4 mt-4">
      <a
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 flex items-center gap-1"
      >
        <LinkIcon size={18} />
        Live
      </a>
      <a
        href={project.githubFrontendUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white flex items-center gap-1"
      >
        <Github size={18} />
        Frontend
      </a>
      <a
        href={project.githubBackendUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white flex items-center gap-1"
      >
        <Github size={18} />
        Backend
      </a>
    </div>
   <div className="mt-5 ">
   <Link
            href={`/projects/${project._id}`}
            className="border active:scale-95 border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition"
          >
            Details
  </Link>
   </div>
  </div>
  );
};

export default ProjectCard;
