import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            tech={project.tech} 
          />
        ))}
      </div>
    </section>
  );
}