import "./Contact.css";

export const Contact = () => {
  return (
    <div className="action-wrap">
      <a href="mailto:heidi.hklui@gmail.com" className="action">
        <svg
          className="action-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="black"
          fill="none"
        >
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
          <path d="M3 7l9 6l9 -6"></path>
        </svg>
        <span className="action-content" data-content="email"></span>
      </a>

      <a
        href="https://github.com/thunder-shies"
        className="action"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="action-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="black"
          fill="none"
        >
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
        <span className="action-content" data-content="github"></span>
      </a>

      <a
        href="https://www.linkedin.com/in/heidi-hklui"
        className="action"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="action-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="black"
          fill="none"
        >
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M8 11l0 5"></path>
          <path d="M8 8l0 .01"></path>
          <path d="M12 16l0 -5"></path>
          <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
        </svg>
        <span className="action-content" data-content="linkedin"></span>
      </a>

      <div className="backdrop"></div>
    </div>
  );
};

export default Contact;
