// pages/CapsulesPage.jsx - WITH PAGINATION & PROPER IMAGES
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { 
  Heart, 
  MessageCircle, 
  Eye, 
  MapPin, 
  Calendar, 
  Filter,
  Plus,
  TrendingUp,
  Users,
  Globe,
  BookOpen,
  Clock,
  Star,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Home,
  Search,
  X,
  Loader
} from 'lucide-react'
import "./CapsulesPage.css"
import CapsuleModal from "../components/CapsuleModal"
import { allProperties } from "../data/properties"

// Proper image mapping based on property characteristics
const getPropertyImage = (property) => {
  // Mountain/Valley properties
  if (property.title.includes("Mountain") || property.location.includes("Valley") || 
      property.title.includes("Peak") || property.title.includes("Summit")) {
    return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Lake properties
  if (property.title.includes("Lake") || property.location.includes("Lake") ||
      property.title.includes("Lakeside") || property.title.includes("Waterfront")) {
    return "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // City/Urban properties
  if (property.location.includes("Pristina") && property.title.includes("Apartment") ||
      property.title.includes("City") || property.title.includes("Urban")) {
    return "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Historic/Old Town properties
  if (property.title.includes("Historic") || property.location.includes("Old Town") ||
      property.title.includes("Heritage") || property.title.includes("Ottoman")) {
    return "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Cottage/Cabin properties
  if (property.title.includes("Cottage") || property.title.includes("Cabin") ||
      property.title.includes("Chalet")) {
    return "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Modern/Loft properties
  if (property.title.includes("Modern") || property.title.includes("Loft") ||
      property.title.includes("Studio") || property.title.includes("Penthouse")) {
    return "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Vineyard/Winery properties
  if (property.title.includes("Vineyard") || property.title.includes("Wine")) {
    return "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Ski/Resort properties
  if (property.title.includes("Ski") || property.location.includes("Brezovica")) {
    return "https://images.unsplash.com/photo-1530569673472-307dc017a82d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Forest/Eco properties
  if (property.title.includes("Eco") || property.title.includes("Forest") ||
      property.title.includes("Treehouse")) {
    return "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Garden/Flower properties
  if (property.title.includes("Garden") || property.title.includes("Flower")) {
    return "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // River/Waterfall properties
  if (property.title.includes("River") || property.location.includes("River") ||
      property.title.includes("Waterfall")) {
    return "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Artist/Creative properties
  if (property.title.includes("Artist") || property.title.includes("Creative") ||
      property.title.includes("Art")) {
    return "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Rooftop/Terrace properties
  if (property.title.includes("Rooftop") || property.title.includes("Terrace") ||
      property.title.includes("Balcony")) {
    return "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Wellness/Retreat properties
  if (property.title.includes("Wellness") || property.title.includes("Retreat") ||
      property.title.includes("Sanctuary") || property.title.includes("Meditation")) {
    return "https://images.unsplash.com/photo-1540324155971-4b3e1f5c6b0a?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Countryside/Farm properties
  if (property.title.includes("Farm") || property.title.includes("Countryside") ||
      property.title.includes("Rural")) {
    return "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
  
  // Default - beautiful Kosovo landscape
  return "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
}

// Function to get memory type from property
const getMemoryType = (topMemory) => {
  const memoryMap = {
    "Proposals": "Romantic",
    "Creative Breakthroughs": "Creative",
    "Family Reunions": "Family",
    "Anniversaries": "Celebration",
    "Career Milestones": "Career",
    "Personal Transformations": "Transformation",
    "First Dates": "Romantic",
    "Solo Adventures": "Adventure",
    "Celebrations": "Celebration"
  }
  return memoryMap[topMemory] || "Memory"
}

// Function to get badge color based on memory type
const getBadgeColor = (memoryType) => {
  const colorMap = {
    "Romantic": "#FF6B6B",
    "Creative": "#6C63FF",
    "Family": "#20C997",
    "Career": "#339AF0",
    "Celebration": "#FFC107",
    "Transformation": "#9C36B5",
    "Adventure": "#FD7E14",
    "Memory": "#666666"
  }
  return colorMap[memoryType] || "#666666"
}

// Convert allProperties to capsules format
const generateCapsules = () => {
  const firstNames = ["Mark", "Sarah", "Elena", "Alex", "James", "Linda", "Robert", 
                      "Michael", "Emma", "David", "Sophia", "Daniel", "Olivia", "Matthew",
                      "Anna", "Christopher", "Isabella", "William", "Mia", "Joseph"]
  const lastNames = ["Thompson", "Chen", "Petrova", "Martinez", "Wilson", "Davis", 
                     "Brown", "Taylor", "Anderson", "Thomas", "Jackson", "White",
                     "Harris", "Martin", "Lee", "Walker", "Clark", "Lewis", "Young"]
  
  const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"]
  const timeAgoOptions = ["2 weeks ago", "1 month ago", "3 weeks ago", "5 days ago", 
                          "3 months ago", "4 months ago", "1 week ago", "2 months ago",
                          "Yesterday", "6 months ago", "9 months ago", "1 year ago"]
  
  return allProperties.map((property, index) => {
    const memoryType = getMemoryType(property.topMemory)
    const firstName = firstNames[index % firstNames.length]
    const lastName = lastNames[index % lastNames.length]
    const randomMonth = months[Math.floor(Math.random() * 12)]
    const randomDay = Math.floor(Math.random() * 28) + 1
    
    return {
      id: property.id,
      title: property.title,
      description: property.memoryHighlight,
      image: getPropertyImage(property),
      location: property.location,
      date: `${randomMonth} ${randomDay}, 2024`,
      memoryType: memoryType,
      author: {
        name: `${firstName} ${lastName}`,
        initials: `${firstName[0]}${lastName[0]}`,
        avatar: `https://i.pravatar.cc/150?img=${index % 70}`
      },
      likes: Math.floor(property.memories * 2.5 + Math.random() * 100),
      comments: Math.floor(property.memories * 0.3 + Math.random() * 30),
      views: Math.floor(property.memories * 20 + Math.random() * 500),
      timeAgo: timeAgoOptions[index % timeAgoOptions.length],
      isFeatured: property.memoryDensity > 90 || property.rating >= 4.9,
      rating: property.rating,
      propertyId: property.id,
      badgeColor: getBadgeColor(memoryType),
      propertyDetails: property
    }
  })
}

// Generate all capsules
const allCapsules = generateCapsules()

function CapsulesPage() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCapsule, setSelectedCapsule] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  
  const itemsPerPage = 6

  const memoryFilters = [
    { id: "all", label: "All Memories", icon: <BookOpen size={16} /> },
    { id: "Romantic", label: "Romantic", icon: <Heart size={16} /> },
    { id: "Creative", label: "Creative", icon: <TrendingUp size={16} /> },
    { id: "Family", label: "Family", icon: <Users size={16} /> },
    { id: "Career", label: "Career", icon: <Star size={16} /> },
    { id: "Celebration", label: "Celebrations", icon: <Globe size={16} /> },
  ]

  // Filter capsules based on search and filter
  const filteredCapsules = allCapsules.filter(capsule => {
    if (filter !== "all" && capsule.memoryType !== filter) return false
    if (searchQuery && !capsule.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !capsule.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !capsule.location.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredCapsules.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCapsules = filteredCapsules.slice(startIndex, endIndex)

  // Handle page change
  const handlePageChange = (page) => {
    setIsLoading(true)
    setCurrentPage(page)
    // Scroll to top of capsules grid
    setTimeout(() => {
      document.querySelector('.modern-capsules-grid')?.scrollIntoView({ behavior: 'smooth' })
      setIsLoading(false)
    }, 300)
  }

  // Reset to page 1 when filter or search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [filter, searchQuery])

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
 
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }
    
    return pages
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="capsules-page">
      {/* Hero Section */}
      <div className="capsules-hero-section">
        <div className="capsules-hero-content">
          <h1 className="capsules-main-title">
            Digital Memory <span className="highlight">Capsules</span>
          </h1>
          <p className="capsules-hero-description">
            Discover {allCapsules.length} memory capsules from unique properties across Kosovo. Each space tells a story.
          </p>
          <div className="hero-actions">
            <button 
              className="create-capsule-btn primary"
              onClick={() => navigate('/dashboard')}
            >
              <Plus size={20} />
              Create Your Capsule
            </button>
            <div className="search-container">
              <div className="search-input-wrapper">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search memories, locations, or creators..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="clear-search-btn" onClick={clearSearch}>
                    <X size={16} />
                  </button>
                )}
              </div>
              <div className="search-stats">
                <span className="stat-badge">
                  <BookOpen size={14} />
                  {filteredCapsules.length} capsules
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="capsules-container">
        {/* Featured Stats */}
        <div className="featured-stats-grid">
          <div className="featured-stat">
            <div className="stat-icon-wrapper">
              <BookOpen size={24} />
            </div>
            <div className="stat-details">
              <div className="stat-number">{allCapsules.length}</div>
              <div className="stat-label">Total Capsules</div>
            </div>
          </div>
          <div className="featured-stat">
            <div className="stat-icon-wrapper">
              <Home size={24} />
            </div>
            <div className="stat-details">
              <div className="stat-number">48</div>
              <div className="stat-label">Unique Properties</div>
            </div>
          </div>
          <div className="featured-stat">
            <div className="stat-icon-wrapper">
              <Users size={24} />
            </div>
            <div className="stat-details">
              <div className="stat-number">24</div>
              <div className="stat-label">Memory Creators</div>
            </div>
          </div>
          <div className="featured-stat">
            <div className="stat-icon-wrapper">
              <Heart size={24} />
            </div>
            <div className="stat-details">
              <div className="stat-number">
                {allCapsules.reduce((sum, c) => sum + c.likes, 0).toLocaleString()}
              </div>
              <div className="stat-label">Total Hearts</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="modern-filters-container">
          <div className="filters-header">
            <div className="filters-title">
              <Filter size={20} />
              <h3>Browse by Memory Type</h3>
            </div>
            <div className="active-filter-count">
              {filter === "all" ? "All categories" : `${filter} memories`}
            </div>
          </div>
          <div className="modern-filters">
            {memoryFilters.map((filterItem) => (
              <button
                key={filterItem.id}
                className={`modern-filter-tab ${filter === filterItem.id ? "active" : ""}`}
                onClick={() => setFilter(filterItem.id)}
              >
                <span className="filter-icon">{filterItem.icon}</span>
                <span className="filter-label">{filterItem.label}</span>
                {filter === filterItem.id && <ChevronRight size={16} className="active-indicator" />}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="results-info">
          <div className="results-count">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredCapsules.length)} of {filteredCapsules.length} memories
            {filter !== "all" && ` in ${filter}`}
            {searchQuery && ` for "${searchQuery}"`}
          </div>
          <div className="sort-options">
            <select className="sort-select">
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="likes">Most Liked</option>
              <option value="views">Most Viewed</option>
            </select>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner">
              <Loader size={32} className="spinner-icon" />
              <span>Loading capsules...</span>
            </div>
          </div>
        )}

        {/* Capsules Grid - Shows 6 per page */}
        <div className="modern-capsules-grid">
          {currentCapsules.map((capsule) => (
            <div 
              key={capsule.id} 
              className={`modern-capsule-card ${capsule.isFeatured ? 'featured' : ''}`}
              onClick={() => setSelectedCapsule(capsule)}
            >
              {capsule.isFeatured && (
                <div className="featured-badge">
                  <Star size={12} fill="#FFD700" />
                  Featured
                </div>
              )}
              
              <div className="capsule-image-wrapper">
                <img src={capsule.image} alt={capsule.title} className="capsule-main-image" />
                <div 
                  className="memory-type-badge"
                  style={{ backgroundColor: capsule.badgeColor }}
                >
                  {capsule.memoryType}
                </div>
                
                <div className="capsule-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < Math.floor(capsule.rating) ? "#FFD700" : "#E5E7EB"}
                      strokeWidth={0}
                    />
                  ))}
                  <span className="rating-text">{capsule.rating}</span>
                </div>
              </div>

              <div className="capsule-content-wrapper">
                <div className="capsule-header">
                  <h3 className="capsule-card-title">{capsule.title}</h3>
                  <div className="capsule-time">
                    <Clock size={14} />
                    {capsule.timeAgo}
                  </div>
                </div>
                
                <p className="capsule-card-description">{capsule.description}</p>
                
                <div className="capsule-location-date">
                  <div className="location-info">
                    <MapPin size={16} />
                    <span>{capsule.location}</span>
                  </div>
                  <div className="date-info">
                    <Calendar size={16} />
                    <span>{capsule.date}</span>
                  </div>
                </div>

                <div className="capsule-footer">
                  <div className="author-info">
                    <div className="author-avatar-small">
                      {capsule.author.avatar ? (
                        <img src={capsule.author.avatar} alt={capsule.author.name} />
                      ) : (
                        <span>{capsule.author.initials}</span>
                      )}
                    </div>
                    <span className="author-name-small">{capsule.author.name}</span>
                  </div>
                  
                  <div className="capsule-stats-mini">
                    <div className="stat-mini">
                      <Heart size={14} />
                      <span>{capsule.likes.toLocaleString()}</span>
                    </div>
                    <div className="stat-mini">
                      <MessageCircle size={14} />
                      <span>{capsule.comments.toLocaleString()}</span>
                    </div>
                    <div className="stat-mini">
                      <Eye size={14} />
                      <span>{capsule.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results State */}
        {filteredCapsules.length === 0 && (
          <div className="no-results-state">
            <div className="no-results-icon">
              <Search size={48} />
            </div>
            <h3 className="no-results-title">No memories found</h3>
            <p className="no-results-description">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button 
              className="reset-filters-btn"
              onClick={() => {
                setFilter("all")
                setSearchQuery("")
              }}
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredCapsules.length > itemsPerPage && (
          <div className="pagination-container">
            <div className="pagination-info">
              Page {currentPage} of {totalPages}
            </div>
            
            <div className="pagination-controls">
              <button 
                className="pagination-btn first"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft size={18} />
                First
              </button>
              
              <button 
                className="pagination-btn prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={18} />
                Previous
              </button>
              
              <div className="page-numbers">
                {getPageNumbers().map((page, index) => (
                  page === '...' ? (
                    <span key={`ellipsis-${index}`} className="page-ellipsis">...</span>
                  ) : (
                    <button
                      key={page}
                      className={`page-number ${currentPage === page ? 'active' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                ))}
              </div>
              
              <button 
                className="pagination-btn next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight size={18} />
              </button>
              
              <button 
                className="pagination-btn last"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last
                <ChevronsRight size={18} />
              </button>
            </div>
            
            <div className="items-per-page">
              <span>Showing {itemsPerPage} per page</span>
            </div>
          </div>
        )}

        {/* Stats Footer */}
        <div className="stats-footer">
          <div className="stats-footer-content">
            <div className="footer-stat">
              <Eye size={20} />
              <div>
                <div className="footer-stat-number">
                  {allCapsules.reduce((sum, c) => sum + c.views, 0).toLocaleString()}
                </div>
                <div className="footer-stat-label">Total Views</div>
              </div>
            </div>
            <div className="footer-stat">
              <MessageCircle size={20} />
              <div>
                <div className="footer-stat-number">
                  {allCapsules.reduce((sum, c) => sum + c.comments, 0).toLocaleString()}
                </div>
                <div className="footer-stat-label">Total Comments</div>
              </div>
            </div>
            <div className="footer-stat">
              <Star size={20} />
              <div>
                <div className="footer-stat-number">4.8</div>
                <div className="footer-stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for selected capsule */}
      <CapsuleModal 
        capsule={selectedCapsule} 
        onClose={() => setSelectedCapsule(null)} 
      />
    </div>
  )
}

export default CapsulesPage