const education = [
    {
        institution: "University of Jawaharlal Nehru Technological University",
        degree: "Bachelor of Technology in Computer Science",
        description:
            "Comprehensive coursework in software development, algorithms, database systems, computer networks, and system design." +
            "Focused on programming languages, data structures, and machine learning concepts" +
            "Explored emerging technologies like Artificial Intelligence, Cloud Computing, and Cybersecurity.",
        dates: "August 2011 - May 2015",
    }
];
  
  const Education: React.FC = () => {
    return (
      <section id="education" className="education-section">
        <h2>Education</h2>
        <div className="container">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{edu.institution}</h3>
                <span>{edu.dates}</span>
              </div>
              <h4>{edu.degree}</h4>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Education;
  