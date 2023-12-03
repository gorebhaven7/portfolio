import React, { useState } from 'react';
import CertificationCard from './CertificationCard';
import './Certifications.css';

const Certifications = ({ certifications }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);



  return (
    <div className="certifications-section">
      <h2 className="certifications-heading">Certifications</h2>
      <div className="certifications-container">
        {certifications.map(cert => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </div>
  );
};
export default Certifications;
