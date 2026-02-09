
import React from 'react';
import './CapsuleModal.css';

function CapsuleModal({ capsule, onClose }) {
  if (!capsule) return null;

  const memoryTypeColors = {
    Proposal: "proposal",
    "Creative Breakthrough": "creative",
    Reunion: "reunion",
    "First Date": "first-date",
    "Career Milestone": "career",
    Celebration: "celebration",
  };

  const badgeClass = memoryTypeColors[capsule.memoryType] || "proposal";

  return (
    <div className="capsule-modal-overlay" onClick={onClose}>
      <div className="capsule-modal-content" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button className="capsule-modal-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="capsule-modal-main">
          {/* Image */}
          <div className="capsule-modal-image-container">
            <img src={capsule.image} alt={capsule.title} className="capsule-modal-image" />
            <div className={`capsule-modal-badge ${badgeClass}`}>
              {capsule.memoryType}
            </div>
          </div>

          {/* Content */}
          <div className="capsule-modal-body">
            {/* Title - Larger and prominent */}
            <h1 className="capsule-modal-title">{capsule.title}</h1>

            {/* Author info */}
            <div className="capsule-modal-author-section">
              <div className="capsule-modal-author-avatar">
                {capsule.author.avatar ? (
                  <img src={capsule.author.avatar} alt={capsule.author.name} />
                ) : (
                  <span>{capsule.author.initials}</span>
                )}
              </div>
              <div className="capsule-modal-author-details">
                <div className="capsule-modal-author-name">{capsule.author.name}</div>
                <div className="capsule-modal-author-role">Memory Creator</div>
              </div>
              <div className="capsule-modal-like-count">
                <div className="like-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#BF8552" stroke="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className="like-number">{capsule.likes}</div>
              </div>
            </div>

            {/* Location and date - side by side */}
            <div className="capsule-modal-location-date">
              <div className="capsule-modal-location">
                <svg className="location-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BF8552" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="location-text">{capsule.location}</span>
              </div>
              <div className="capsule-modal-date">
                <svg className="date-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BF8552" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="date-text">{capsule.date}</span>
              </div>
            </div>

            {/* Description - larger text */}
            <div className="capsule-modal-description-section">
              <p className="capsule-modal-description-text">{capsule.description}</p>
            </div>

            {/* View Property Button - full width */}
            <button className="capsule-modal-property-btn">
              View This Property
            </button>

            {/* Footer stats - side by side */}
            <div className="capsule-modal-footer-stats">
              <div className="footer-stat comments-stat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>{capsule.comments} comments</span>
              </div>
              <div className="footer-stat views-stat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>{capsule.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CapsuleModal;
