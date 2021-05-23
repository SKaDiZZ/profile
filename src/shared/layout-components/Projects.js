import StrokeIcon from "../icon-components/StrokeIcon";
import ProjectCard from "./ProjectCard";
import projectList from "../data/project-list";

const Projects = () => (
  <div
    id="projects"
    className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12 my-12 w-full"
  >
    <div className="col-span-3">
      <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
        <StrokeIcon />
        Projects
      </h4>
      <h2 className="text-4xl font-bold text-white mb-12">
        Some of my recent projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {projectList.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
