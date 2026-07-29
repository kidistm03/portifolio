import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          skill={skill}
        />
      ))}
    </section>
  );
}

export default Skills;