function ProjectCard({ project }) {
  const { title, description, tech = [], liveUrl, githubUrl } = project;

  return (
    <div className="project-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      
      {(liveUrl || githubUrl) && (
        <div className="project-links">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer">Live</a>}

          
          {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;