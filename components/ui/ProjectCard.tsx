interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
  }
  
  export default function ProjectCard({ title, description, image }: ProjectCardProps) {
    return (
      <div className="border rounded-md shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  