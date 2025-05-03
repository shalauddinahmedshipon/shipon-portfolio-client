export interface Project {
  _id: string;
  title: string;
  detailedDescription: string;
  shortDescription:string;
  technologies: string[];
  imageUrls: string[];
  projectUrl: string;
  githubFrontendUrl: string;
  githubBackendUrl: string;
}