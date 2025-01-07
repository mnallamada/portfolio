const experiences = [
    {
        date: "July 2022 – Till Date",
        company: "KinderCare Learning Centers",
        title: "Preschool Teacher",
        description:
            "delivering high-quality early childhood education, I designed and implemented engaging lesson plans tailored to individual needs. Collaborating closely with parents and staff, I ensured each child's unique developmental milestones were met with personalized attention. I developed effective classroom management strategies that promoted positive behavior and learning outcomes while maintaining accurate progress records and providing clear communication with parents.",
    },
    {
        date: "May 2015 – July 2018",
        company: "Deccan Spark Technologies",
        title: "Programmer Analyst",
        description:
            "Streamlined and integrated operations across various institutional functions, enabling seamless resource synchronization for students, employees, and materials. I designed and developed scalable, secure RESTful APIs using Spring Boot and built dynamic, responsive UI components with ReactJS to enhance user engagement. I managed efficient data storage and retrieval by optimizing database schemas and operations in MongoDB. Additionally, I implemented automated CI/CD pipelines with Jenkins, ensuring smooth and reliable deployments, and wrote comprehensive unit tests with JUnit to maintain code reliability. By adhering to Agile methodologies and software development best practices, I consistently delivered high-quality, scalable solutions.",
    }
];
  
  const Experience: React.FC = () => {
    return (
      <section id="experience" className="experience-timeline">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-date">{exp.date}</span>
              <div className="timeline-content">
                <h3>{exp.company}</h3>
                <h4>{exp.title}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Experience;
  