import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './BackButton.css';

export const BackButton = ({ to = '/', label = 'Back' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to === 'history') {
      // Go back in browser history
      window.history.back();
    } else {
      // Navigate to specified route
      navigate(to);
    }
  };

  return (
    <div className="back-button-container">
      <button 
        className="back-button" 
        onClick={handleBack}
        aria-label={`Back to ${to === 'history' ? 'previous page' : to}`}
      >
        <FaArrowLeft /> {label}
      </button>
    </div>
  );
};

export default BackButton;