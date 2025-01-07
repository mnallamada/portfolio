const skills = [
    "Java", "J2EE", "Spring Boot", "JavaScript", "HTML", "CSS", "LESS", "Bootstrap", "ReactJS", "MongoDB",
    "Agile Methodologies", "Cloud Computing", "DevOps", "Database Management", "AWS",
    "Troubleshooting", "RESTful APIs"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
