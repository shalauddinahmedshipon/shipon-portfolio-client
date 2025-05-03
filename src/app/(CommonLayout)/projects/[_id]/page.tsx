/* eslint-disable @typescript-eslint/no-unused-vars */
// app/projects/[id]/page.tsx

import { ProjectImageCarousel } from "@/components/ui/project/ProjectImageCarousel";
import { LinkIcon } from "lucide-react";
import { notFound } from "next/navigation";

interface Project {
  _id: string;
  title: string;
  detailedDescription: string;
  technologies: string[];
  imageUrls: string[];
  projectUrl: string;
  githubFrontendUrl: string;
  githubBackendUrl: string;
}

const getProject = async (id: string): Promise<Project | null> => {
  const mockData: Project = {
    _id: "681456e07341660efbd10889",
    title: "Developer Blog CMS",
    detailedDescription:
      "A full-featured blog CMS built with the MERN stack. It includes user authentication, markdown editor, image uploads, and tag-based filtering.",
    technologies: ["React", "Express", "MongoDB", "Node.js", "JWT", "Mongoose"],
    imageUrls: [
      "https://i.ibb.co/6H1Gw5x/blogcms1.jpg",
      "https://i.ibb.co/GvCnKHn/blogcms2.jpg"
    ],
    projectUrl: "https://myblogcms.example.com",
    githubFrontendUrl: "https://github.com/username/blog-cms-frontend",
    githubBackendUrl: "https://github.com/username/blog-cms-backend",
  };

  return mockData;
};

export default async function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);
  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 text-gray-300">
      <h1 className="text-3xl font-bold mb-4 text-white">{project.title}</h1>

      <div className="mb-6">
        <ProjectImageCarousel imageUrls={project.imageUrls} />
      </div>

      <p className="mb-4 text-gray-300">{project.detailedDescription}</p>

      <h2 className="font-semibold mb-2">Technologies:</h2>
      <ul className="list-disc list-inside mb-4 text-sm ">
        {project.technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.projectUrl}
          className="px-4 flex items-center gap-2 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          target="_blank"
        >
        <LinkIcon size={16}/>
          Live Site
        </a>
        <a
          href={project.githubFrontendUrl}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          target="_blank"
        >
          Frontend Code
        </a>
        <a
          href={project.githubBackendUrl}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          target="_blank"
        >
          Backend Code
        </a>
      </div>
    </div>
  );
}
