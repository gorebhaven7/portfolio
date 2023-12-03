import React from 'react';
import './CertificationCard.css'; // Make sure to create this CSS file

const CertificationCard = ({ certification }) => {
  return (
    <div className="certification-card">
      <h3>{certification.title}</h3>
      <p>{certification.issuer}</p>
      <a href={certification.certificateUrl} target="_blank" rel="noopener noreferrer" className="view-certificate-btn">
        View Certificate
      </a>
    </div>
  );
};

export default CertificationCard;
