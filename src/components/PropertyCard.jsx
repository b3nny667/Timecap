import React, { useState } from 'react';
import './PropertyCard.css';

function PropertyCard({ property }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`property-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="property-image-container">
        <img 
          src={property.image} 
          alt={property.title}
          className="property-image"
        />
        
        {/* Memory Badge */}
        <div className="memory-badge">
          <span className="badge-icon">💎</span>
          <span className="badge-count">{property.memories} memories</span>
        </div>
        
        {/* Wishlist Button */}
        <button 
          className={`wishlist-button ${isLiked ? 'liked' : ''}`}
          onClick={() => setIsLiked(!isLiked)}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <span className="heart-icon">{isLiked ? '❤️' : '🤍'}</span>
        </button>
        
        {/* Image Overlay */}
        <div className="image-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="property-content">
        {/* Header */}
        <div className="property-header">
          <h3 className="property-title">{property.title}</h3>
          <div className="property-rating">
            <span className="star-icon">⭐</span>
            <span className="rating-value">{property.rating}</span>
            <span className="rating-count">({property.reviewCount})</span>
          </div>
        </div>
        
        {/* Location */}
        <p className="property-location">
          <span className="location-icon">📍</span>
          {property.location}
        </p>
        
        {/* Tags */}
        <div className="property-tags">
          {property.perfectFor.slice(0, 3).map(tag => (
            <span key={tag} className="property-tag">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Memory Preview */}
        {property.capsules && property.capsules.length > 0 && (
          <div className="memory-preview">
            <p className="memory-text">"{property.capsules[0].text}"</p>
            <div className="memory-author">
              <span>— {property.capsules[0].user}</span>
              <span>{property.capsules[0].date}</span>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <div className="property-footer">
          <div className="property-price">
            <span className="price-amount">${property.price}</span>
            <span className="price-period"> per night</span>
          </div>
          <button className="book-button">
            <span className="book-icon">💎</span>
            Book now
          </button>
        </div>
        
        {/* Memory Stats */}
        <div className="memory-stats">
          <div className="memory-stat">
            <span className="stat-value">{property.memories}</span>
            <span className="stat-label">Memories</span>
          </div>
          <div className="memory-stat">
            <span className="stat-value">98%</span>
            <span className="stat-label">Happy</span>
          </div>
          <div className="memory-stat">
            <span className="stat-value">4.9</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="property-glow"></div>
    </div>
  );
}

export default PropertyCard;