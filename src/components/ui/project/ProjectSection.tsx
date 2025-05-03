import 'swiper/css';
import ProjectCard from "./ProjectCard";
import Link from 'next/link';

const projects = [
  {
    _id:"1",
    title: "Personal Portfolio Website",
    shortDescription: "A sleek and responsive developer portfolio.",
    detailedDescription:
      "This is a full-stack personal portfolio project built using React for the frontend and Node.js/Express for the backend. It features a responsive UI, project showcase, blog section, contact form, and more.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    projectUrl: "https://myportfolio.example.com",
    githubFrontendUrl: "https://github.com/username/portfolio-frontend",
    githubBackendUrl: "https://github.com/username/portfolio-backend",
    imageUrls: [
      "https://png.pngtree.com/thumb_back/fh260/background/20231202/pngtree-tranquil-reflections-frozen-lake-in-winter-s-mountain-embrace-image_15495440.jpg",
      "https://png.pngtree.com/thumb_back/fh260/background/20240703/pngtree-edit-pictures-hq-image-stock-photos-on-wallpaper-safari-free-image_15934725.jpg",
      "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg"
    ],
  },
  {
    _id:"2",
    title: "E-Commerce App",
    shortDescription: "A basic e-commerce application with cart and checkout.",
    detailedDescription:
      "This app allows users to browse products, add to cart, and place orders. Admin panel to manage products and orders. Frontend with React, backend using Express and MongoDB.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    projectUrl: "https://myecommerce.example.com",
    githubFrontendUrl: "https://github.com/username/ecommerce-frontend",
    githubBackendUrl: "https://github.com/username/ecommerce-backend",
    imageUrls: [
      "https://i.ibb.co/ecommerce1.jpg",
      "https://i.ibb.co/ecommerce2.jpg",
    ],
  },
  {
    _id:"3",
    title: "Developer Blog CMS",
    shortDescription: "A content management system for publishing blogs.",
    detailedDescription:
      "A full-featured blog CMS built with MERN stack. It includes user authentication, markdown editor, image uploads, and tag-based filtering. Admins can manage all posts, comments, and categories.",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "JWT",
      "Mongoose",
    ],
    projectUrl: "https://myblogcms.example.com",
    githubFrontendUrl: "https://github.com/username/blog-cms-frontend",
    githubBackendUrl: "https://github.com/username/blog-cms-backend",
    imageUrls: [
      "https://i.ibb.co/blogcms1.jpg",
      "https://i.ibb.co/blogcms2.jpg",
    ],
  },
  {
    _id:"4",
    title: "TaskFlow",
    shortDescription: "A Trello-style task management tool.",
    detailedDescription:
      "TaskFlow is a kanban-based task management application that supports team collaboration, drag-and-drop tasks, due dates, and priority levels. Built with React and DnD libraries, backed by a RESTful API.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    projectUrl: "https://taskflow.example.com",
    githubFrontendUrl: "https://github.com/username/taskflow-client",
    githubBackendUrl: "https://github.com/username/taskflow-server",
    imageUrls: ["https://i.ibb.co/task1.jpg", "https://i.ibb.co/task2.jpg"],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 px-6  text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
       
          <ProjectCard key={idx} project={project}/>
          ))}
        </div>
      </div>
      <div className='w-full mt-10 flex justify-center'>
       <Link
            href="/projects"
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition "
          >
            View All Projects
          </Link>
       </div>
    </section>
  );
};

export default ProjectSection;
