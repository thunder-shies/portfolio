import "./ProjectDetails.css";
import projectsData from '../../data/projects.json';

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

export default ProjectDetails;
