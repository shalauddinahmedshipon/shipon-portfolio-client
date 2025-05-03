import { ProjectImageCarousel } from "@/components/ui/project/ProjectImageCarousel";
import { Project } from "@/types";
import { LinkIcon } from "lucide-react";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: { _id: string } }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${params._id}`, {
    cache: 'no-store',
  });

  const data = await res.json();
  const project: Project = data.data;

  return {
    title: project.title,
    description: project.shortDescription.slice(0, 150), 
  };
}


export default async function ProjectDetailsPage({
  params,
}: {
  params: { _id: string };
}) {
  const {_id} = await params;
  const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${_id}`,
    {
     cache:"no-store"
    }
  );
   const data = await res.json();
   const project:Project=data.data;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 text-gray-300">
      <h1 className="text-3xl font-bold mb-4 text-white">{project.title}</h1>

      <div className="mb-6">
        <ProjectImageCarousel imageUrls={project.imageUrls} />
      </div>

      <p className="mb-4 text-gray-300">{project.shortDescription}</p>
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
