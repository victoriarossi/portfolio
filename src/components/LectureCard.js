import React from 'react';
import './css/ProjectCard.css';

const toPreviewSrc = (link) => {
  const m = link.match(/\/d\/([^/]+)/) || link.match(/[?&]id=([^&]+)/) || link.match(/\/uc\?id=([^&]+)/);
  const id = m ? m[1] : link;
  return `https://drive.google.com/file/d/${id}/preview`;
};

const LectureCard = ({ title, description, link }) => {
  const isDrive = /drive\.google\.com/.test(link) || /^[\w-]{25,}$/.test(link);
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {isDrive ? (
        <iframe
          src={toPreviewSrc(link)}
          title={title}
          allow="autoplay"
          allowFullScreen
          style={{ width: '100%', height: 360, border: 0, borderRadius: 12 }}
        />
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">Open</a>
      )}
    </div>
  );
};

export default LectureCard;
