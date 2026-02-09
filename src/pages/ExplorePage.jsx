
import React, { useState, useEffect } from 'react';
import SearchFilters from '../components/SearchFilters';
import HowItWorks from '../components/HowItWorks';
import './ExplorePage.css';

// Memory types exactly from your photo
const memoryTypes = [
  { id: 'all', label: "All Memory Types" },
  { id: 'proposals', label: "Proposals & Engagements" },
  { id: 'creative', label: "Creative Breakthroughs" },
  { id: 'family', label: "Family Reunions" },
  { id: 'career', label: "Career Milestones" },
  { id: 'growth', label: "Personal Growth" },
  { id: 'healing', label: "Healing Journeys" }
];

// Featured properties data matching your new design
const featuredProperties = [
  {
    id: 1,
    title: "Mountain Retreat in Rugova",
    location: "Rugova Valley, Kosovo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-mountain-cabin-with-valley-views-kosovo-Ir644TkzFYBXCwLBdcYsoRf0fM53AF.jpg",
    memoryDensity: 94,
    memories: 127,
    topMemory: "Proposals",
    price: 89,
    rating: 4.9,
    memoryHighlight: "12 couples got engaged here in the past year",
  },
  {
    id: 2,
    title: "Creative Loft in Pristina",
    location: "City Center, Pristina",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-creative-loft-studio-with-large-windows-1XjEB5Yg4KK2uu1bU1AyaioUEKEU0U.jpg",
    memoryDensity: 88,
    memories: 203,
    topMemory: "Creative Breakthroughs",
    price: 65,
    rating: 4.8,
    memoryHighlight: "Artists created 50+ masterpieces here",
  },
  {
    id: 3,
    title: "Lakeside Villa in Gazivoda",
    location: "Gazivoda Lake, Kosovo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/beautiful-lakeside-villa-with-sunset-views-v2Vc8YoIL4AgC6JE0f7cy9Urw7E0IW.jpg",
    memoryDensity: 91,
    memories: 156,
    topMemory: "Reunions",
    price: 120,
    rating: 5.0,
    memoryHighlight: "23 families reunited after decades",
  },
];

function ExplorePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    };
    loadProperties();
  }, []);

  if (loading) {
    return (
      <div className="explore-page">
        <div className="loading-placeholder"></div>
      </div>
    );
  }

  return (
    <div className="explore-page">
      {/* HERO SECTION - SIMPLIFIED */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-main-title">
            Travel Through
          </h1>
          <h1 className="hero-main-title">
            Time & Memory
          </h1>
          <p className="hero-description">
            Discover spaces where life-changing moments happened. Book your next
            <span className="hero-highlight"> Memory Journey</span> in Kosovo and beyond.
          </p>
        </div>
      </section>

      {/* Search Filters Section - USING THE NEW COMPONENT */}
      <section className="search-section">
        <div className="filters-container">
          <SearchFilters />
        </div>
      </section>

      {/* Featured Memory Journeys Section - UPDATED DESIGN */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title-bold-italic">
            Featured Memory Journeys
          </h2>
          <p className="section-subtitle">Places with the highest Memory Density</p>
        </div>

        {/* Density Display */}
        <div className="density-display">
          <div className="density-bar">
            <div 
              className="density-fill" 
              style={{ width: `${Math.max(...featuredProperties.map(p => p.memoryDensity))}%` }}
            ></div>
          </div>
          <div className="density-labels">
            <span>Memory Density: {Math.max(...featuredProperties.map(p => p.memoryDensity))}%</span>
          </div>
        </div>

        {/* Featured Properties Grid - NEW DESIGN */}
        <div className="featured-journeys-grid">
          {featuredProperties.map((property) => (
            <div key={property.id} className="featured-journey-card">
              {/* Image Container */}
              <div className="featured-image-container">
                <img
                  src={property.image}
                  alt={property.title}
                  className="featured-journey-image"
                />
                {/* Wishlist Button */}
                <button className="featured-wishlist-btn">
                  <span className="heart-icon">❤</span>
                </button>
                {/* Memory Density Badge */}
                <div className="featured-memory-badge">
                  Memory Density: {property.memoryDensity}%
                </div>
              </div>

              {/* Content */}
              <div className="featured-journey-content">
                {/* Header with Title and Rating */}
                <div className="featured-journey-header">
                  <h3 className="featured-journey-title">{property.title}</h3>
                  <div className="featured-journey-rating">
                    <span className="star-icon">★</span>
                    <span className="rating-number">{property.rating}</span>
                  </div>
                </div>

                {/* Location */}
                <p className="featured-journey-location">
                  <span className="location-icon">📍</span>
                  {property.location}
                </p>

                {/* Memory Highlight */}
                <div className="featured-memory-highlight">
                  <p className="memory-type-label">Top Memory: {property.topMemory}</p>
                  <p className="memory-quote">"{property.memoryHighlight}"</p>
                </div>

                {/* Footer with Price and Memories Count */}
                <div className="featured-journey-footer">
                  <div className="featured-price">
                    <span className="price-amount">${property.price}</span>
                    <span className="price-period"> / night</span>
                  </div>
                  <div className="featured-memories-count">
                    {property.memories} memories
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title-bold-italic">
            
          </h2>
        </div>
        <HowItWorks />
      </section> 

     
    </div>
  );
}

export default ExplorePage;
