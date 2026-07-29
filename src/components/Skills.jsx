import SkillCard from './SkillCard';

export default function Skills({ skills = [] }) {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill} />
        ))}
      </div>
    </section>
  );
}