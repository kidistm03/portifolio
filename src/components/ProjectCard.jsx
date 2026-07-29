export default function ProjectCard({ title, description, tech = [] }) {
  return (
    <div className="project-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}