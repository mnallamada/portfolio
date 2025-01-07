const projects = [
    {
      name: 'Project One',
      description: 'A web application built with React.',
      link: '#',
    },
    {
      name: 'Project Two',
      description: 'A backend system built with Node.js.',
      link: '#',
    },
  ];
  
  const Projects: React.FC = () => {
    return (
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link}>View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Projects;
  