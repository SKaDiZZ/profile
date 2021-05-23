const ProjectCard = ({ client, name, url, description, tags }) => (
  <div className="card">
    <div>
      <h4 className="card-subtitle">{client}</h4>
      <h2 className="card-title">{name}</h2>
      <div className="-mt-4 mb-4">
        <a
          href={url}
          className="text-main-accent hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {url}
        </a>
      </div>
      <p>{description}</p>
    </div>
    <div className="tag-list">
      {tags.map((tag) => (
        <div className="tag mr-2" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  </div>
);

export default ProjectCard;
