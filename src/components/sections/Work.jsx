import { Link } from "react-router-dom";
import Card from "../ui/card/Card";
import "./Work.css";
import projectImage1 from "../../assets/images/videoframe_585.png";
import projectImage2 from "../../assets/images/videoframe_585.png";
import projectImage3 from "../../assets/images/videoframe_585.png";

export const Work = () => {
  // Project data for cards
  const projects = [
    {
      image: projectImage1,
      title: "Color",
      subtitle: "From Inner Self To Outer Worlds",
      types: [
        { text: "Interactive" },
        { text: "Installation" },
        { text: "Exhibition", id: "medium" },
      ],
      link: "/projects/color",
    },
    {
      image: projectImage2,
      title: "Parallel Realities",
      subtitle: "what if?",
      types: [
        { text: "Interactive" },
        { text: "Game" },
        { text: "Exhibition", id: "medium" },
      ],
      link: "/projects/parallel-realities",
    },
    {
      image: projectImage3,
      title: "Meaningful Play",
      subtitle: " a exhibition for underprivileged children",
      types: [
        { text: "Installation" },
        { text: "Game" },
        { text: "Exhibition", id: "medium" },
      ],
      link: "/projects/meaningful-play",
    }
  ];

  return (
    <section id="work" className="section">
      <div className="work-content">
        <h2>Projects</h2>
        <p>Here are some of my projects. Click on them to learn more.</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            project.externalLink ? (
              <Card
                key={index}
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                types={project.types}
                link={project.link}
                externalLink={project.externalLink}
              />
            ) : (
              <Link key={index} to={project.link}>
                <Card
                  image={project.image}
                  title={project.title}
                  subtitle={project.subtitle}
                  types={project.types}
                />
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;