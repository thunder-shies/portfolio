import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ 
  id,
  image, 
  title = "Project", 
  subtitle = "", 
  types = [], 
  link = "", 
  externalLink = false 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      if (externalLink) {
        window.open(link, "_blank");
      } else {
        navigate(link);
      }
    }
  };

  return (
    <article id={id} className="article-wrapper" onClick={handleClick}>
      <div className="rounded-lg container-project">
        {image && <img src={image} alt={title} />}
      </div>
      <div className="project-info">
        <div className="title-container">
          <div className="flex-pr">
            <div className="project-title text-nowrap">{title}</div>
            <div className="project-hover">
              <svg
                style={{ color: "black" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                color="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <line y2="12" x2="19" y1="12" x1="5"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="subtitle-container">
          {subtitle && <div className="project-subtitle">{subtitle}</div>}
        </div>
        
        <div className="types">
          {types.length > 0 && types.map((type, index) => (
            <span
              key={index}
              className="project-type"
              style={type.style || {}}
              id={type.id || ""}
            >
              {type.text}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;