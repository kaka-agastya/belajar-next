import ProjectCard from '../../components/ui/ProjectCard';
import HoverEffect from '@components/ui/HoverEffect';


const projects = [
  {
    title: "Project One",
    description: "A modern website built with React and Next.js.",
    image: "/images/project1.jpg",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform built with Node.js and MongoDB.",
    image: "/images/project2.jpg",
  },
  {
    title: "Project Three",
    description: "An e-commerce platform built with Node.js and MongoDB.",
    image: "/images/project2.jpg",
  },
  {
    title: "Project Four",
    description: "An e-commerce platform built with Node.js and MongoDB.",
    image: "/images/project2.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <HoverEffect key={index}>
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
          </HoverEffect>
        ))}
      </div>
    </section>
  );
}
