import ProjectCard from "./ProjectCard";
import projectList from "../data/project-list";
import bg from "../../assets/images/circle.svg";

const Projects = () => (
  <section id="projects">
    <div className="section-header">
      <h4 className="section-subtitle">Projects</h4>
      <h2>Some of my recent projects</h2>
      <div className="section-header-bg">
        <img
          alt="Outlines"
          loading="lazy"
          width="960"
          height="380"
          decoding="async"
          className="relative z-[2]"
          src={bg}
        />
      </div>
    </div>
    <div className="col-span-3">
      <div className="columns-[300px] gap-6">
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
