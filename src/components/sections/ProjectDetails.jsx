import "./ProjectDetails.css";

export const ProjectDetails = ({ projectId }) => {
  const project = projectsData[projectId] || {};

  return (
    <div className="project-details">
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <h2 className="project-subtitle">{project.subtitle}</h2>
      </div>

      <div className="project-metadata-container">
        {project.mainImage && (
          <div className="project-main-image">
            <img src={project.mainImage} alt={project.title} />
          </div>
        )}

        <div className="project-metadata">
          {project.year && (
            <div className="metadata-item">
              <span className="metadata-label">Year:</span>
              <span className="metadata-value">{project.year}</span>
            </div>
          )}

          {project.medium && (
            <div className="metadata-item">
              <span className="metadata-label">Medium:</span>
              <span className="metadata-value">{project.medium}</span>
            </div>
          )}

          {project.size && (
            <div className="metadata-item">
              <span className="metadata-label">Size:</span>
              <span className="metadata-value">{project.size}</span>
            </div>
          )}

          {project.collaborators && project.collaborators.length > 0 && (
            <div className="metadata-item collaborators-item">
              <span className="metadata-label">Collaborators:</span>
              <div className="metadata-value collaborators-list">
                {project.collaborators.map((collaborator, index) => (
                  <span key={index} className="collaborator-name">
                    {collaborator}
                    {index < project.collaborators.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="metadata-item">
              <span className="metadata-label">Technologies:</span>
              <span className="metadata-value">
                {project.technologies.join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>

      {project.description && (
        <div className="project-description">
          <p>{project.description}</p>
        </div>
      )}

      {project.details && project.details.length > 0 && (
        <div className="project-details-list">
          <h3>Project Details</h3>
          <ul>
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      {project.video && (
        <div className="project-video">
          <h3>Project Video</h3>
          <div className="video-container">
            {project.video.type === "youtube" ? (
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${project.video.id}`}
                title={`${project.title} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls>
                <source
                  src={project.video.url}
                  type={project.video.format || "video/mp4"}
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}

      {project.photos && project.photos.length > 0 && (
        <div className="project-gallery">
          <h3>Project Gallery</h3>
          <div className="gallery-grid">
            {project.photos.map((photo, index) => (
              <div key={index} className="gallery-item">
                {photo.url.endsWith(".mp4") || photo.url.includes(".mp4") ? (
                  <div className="video-container">
                    <video controls>
                      <source src={photo.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <img
                    src={photo.url}
                    alt={
                      photo.caption || `${project.title} - image ${index + 1}`
                    }
                  />
                )}
                {photo.caption && (
                  <p className="photo-caption">{photo.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const projectsData = {
  "color": {
    title: "Orioles Orange",
    subtitle: "From Inner Self To Outer Worlds",
    year: "2023",
    medium: "Interactive Table",
    size: "1280px x 720px",
    collaborators: [
      "Ng Ming Ming (Thea)",
      "Wong Jing Yee (Chloe)",
      "Kristen Yeaeun Hong",
    ],
    description:
      "Orioles Orange not only symbolizes brightness and warmth but also optimism and excitement. We chose this colour to leave a hopeful message about the meaning of life. We decided to use the Orioles, a tropical bird with an orange belly, as the main subject. Through the interactive table exhibition, viewers would experience growth from birth all the way to adulthood through the eyes of the bird. When the bird begins to learn how to fly, the viewers will be transported to a warm seascape and cityscape as they direct the bird. As we wanted to emphasize warmth and love, we made use of the beautiful red, yellow, and orange colors that fill the sky during sunrise and sunset for an overall warm tone of the landscape. We hope that our personal expression of warmth and excitement through this project can reach out to many others and that they too could spread warmth to their families and friends after interacting with our project.",
    mainImage: "https://i.imgur.com/qA1tF4A.png",
    technologies: ["Leap Motion", "TouchDesigner"],
    details: [
      "Co-developed 'Orioles Orange' for an interactive exhibition visualizing personal growth and emotional warmth through digital storytelling",
      "Designed an immersive experience using interactive projections and sensor-based interaction through TouchDesigner.",
      "Contributed to sensor integration, and interaction authoring for a seamless user experience.",
    ],
    video: {
      type: "youtube",
      id: "RJ_YFf-3CIM",
    },
    photos: [
      {
        url: "https://i.imgur.com/DRaJ3FD.jpeg",
        caption: "Our table",
      },
      {
        url: "https://i.imgur.com/fY1Wiku.jpeg",
        caption: "Our setup",
      },
      {
        url: "https://i.imgur.com/C9vdGnA.mp4",
        caption:
          "The part I contribute but have not adding the interaction part yet",
      },
    ],
  },
  "parallel-realities": {
    title: "Parallel Realities",
    subtitle: "what if?",
    year: "2024",
    medium: "Interactive Game",
    size: "Variable",
    collaborators: ["Ng Ming Ming (Thea)", "Hung Lok Wing (Kristy)", "Liu Ting (Tiffany)", "Yau Kai Man (Carmen)"],
    description:
      "The Bandwagon Effect parallel world mirrors our reality by emphasizing the pervasiveness of social influence and the fundamental human urge to seek approval and recognition within a group. Through this parallel reality, we can develop a more critical understanding of the bandwagon effect and its implications, which can challenge our own beliefs and promote critical thinking about how social conformity affects society.",
    mainImage: "https://placehold.co/600x400?text=Parallel+Realities",
    technologies: ["Unity"],
    details: [
      "Designed branching narrative structure with multiple endings",
      "Created procedurally generated environments",
      "Implemented real-time decision tracking system",
    ],
    photos: [
      {
        url: "https://placehold.co/600x400?text=Game+Interface",
        caption: "Game interface",
      },
      {
        url: "https://placehold.co/600x400?text=Players",
        caption: "Players making decisions",
      },
      {
        url: "https://placehold.co/600x400?text=Exhibition",
        caption: "Exhibition setup",
      },
    ],
  },
  "meaningful-play": {
    title: "Meaningful Play",
    subtitle: "An exhibition for underprivileged children",
    year: "2024",
    medium: "Installation",
    size: "3m x 2m",
    collaborators: ["Caritas - Hong Kong", "Ng Ming Ming (Thea)", "Hung Lok Wing (Kristy)", "Liu Ting (Tiffany)"],
    description:
      "A series of interactive games and installations designed specifically for underprivileged children, aiming to provide both entertainment and educational value.",
    mainImage: "https://placehold.co/600x400?text=Meaningful+Play",
    technologies: ["Unity", "Python", "OSC"],
    details: [
      "Collaborated with Caritas Hong Kong to bring educational play to underprivileged children as part of a service-learning project.",
      "Exhitbit Saving Goals, an interactive financial literacy game that reimagines air hockey using coins, promoting saving habits and spending awareness.",
      "Developed an immersive experience using custom visuals, strategic gameplay, and responsive sound feedback. Integrated game design, and digital interaction through tools like Unity, and OSC.",
    ],
    video: {
      type: "youtube",
      id: "nFxLYa4WK4M",
    },
    photos: [
      {
        url: "https://placehold.co/600x400?text=Children+Playing",
        caption: "Children engaging with the puzzle station",
      },
      {
        url: "https://placehold.co/600x400?text=Storytelling",
        caption: "Interactive storytelling area",
      },
      {
        url: "https://placehold.co/600x400?text=Group+Activities",
        caption: "Group activities in progress",
      },
    ],
  },
};

export default ProjectDetails;
