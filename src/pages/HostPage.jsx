import { useState } from "react"
import { 
  Home, 
  Users, 
  TrendingUp, 
  Heart, 
  Star, 
  MapPin, 
  Camera, 
  CheckCircle,
  DollarSign,
  Globe,
  Award,
  Wifi,
  Coffee,
  Car,
  Wind,
  Thermometer,
  Droplets,
  Tv,
  Sparkles,
  Mountain,
  Trees,
  Building,
  Utensils,
  Bed,
  Bath,
  Users2,
  Calendar,
  MessageCircle,
  Shield,
  Zap,
  Compass
} from "lucide-react"
import "./HostPage.css"

export default function HostPage () {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyName: "",
    propertyType: "",
    location: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    maxGuests: "",
    pricePerNight: "",
    amenities: [],
    memoryTypes: [],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }))
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const amenitiesList = [
    { id: "wifi", label: "WiFi", icon: <Wifi size={16} /> },
    { id: "kitchen", label: "Kitchen", icon: <Utensils size={16} /> },
    { id: "parking", label: "Free Parking", icon: <Car size={16} /> },
    { id: "ac", label: "Air Conditioning", icon: <Wind size={16} /> },
    { id: "heating", label: "Heating", icon: <Thermometer size={16} /> },
    { id: "washer", label: "Washer", icon: <Droplets size={16} /> },
    { id: "dryer", label: "Dryer", icon: <Sparkles size={16} /> },
    { id: "tv", label: "TV", icon: <Tv size={16} /> },
    { id: "pool", label: "Pool", icon: <Droplets size={16} /> },
    { id: "hotub", label: "Hot Tub", icon: <Sparkles size={16} /> },
    { id: "fireplace", label: "Fireplace", icon: <Flame size={16} /> },
    { id: "balcony", label: "Balcony", icon: <Home size={16} /> },
    { id: "garden", label: "Garden", icon: <Trees size={16} /> },
    { id: "mountain", label: "Mountain View", icon: <Mountain size={16} /> },
    { id: "lake", label: "Lake View", icon: <Droplets size={16} /> },
    { id: "city", label: "City View", icon: <Building size={16} /> }
  ]

  const memoryTypesList = [
    "Proposals & Engagements",
    "Creative Breakthroughs",
    "Family Reunions",
    "First Dates",
    "Career Milestones",
    "Personal Transformations",
    "Anniversaries",
    "Solo Adventures",
    "Celebrations"
  ]

  // FIXED STATS WITH PROPER ICON RENDERING
  const stats = [
    { 
      icon: <Home size={32} strokeWidth={1.5} />, 
      value: "2,400+", 
      label: "Active Hosts",
      color: "#2F4538",
      bgColor: "rgba(47, 69, 56, 0.1)"
    },
    { 
      icon: <Users size={32} strokeWidth={1.5} />, 
      value: "48,000+", 
      label: "Guests Hosted",
      color: "#BF8552",
      bgColor: "rgba(191, 133, 82, 0.1)"
    },
    { 
      icon: <DollarSign size={32} strokeWidth={1.5} />, 
      value: "$4.2M", 
      label: "Host Earnings",
      color: "#20C997",
      bgColor: "rgba(32, 201, 151, 0.1)"
    },
    { 
      icon: <Heart size={32} strokeWidth={1.5} />, 
      value: "156K+", 
      label: "Memories Created",
      color: "#FF6B6B",
      bgColor: "rgba(255, 107, 107, 0.1)"
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
      title: "Earn Extra Income",
      description: "Hosts in Kosovo earn an average of $850/month sharing their spaces with memory seekers.",
    },
    {
      icon: <Heart size={28} strokeWidth={1.5} />,
      title: "Create Lasting Impact",
      description: "Be part of life-changing moments. Your space could be where someone proposes or finds inspiration.",
    },
    {
      icon: <Award size={28} strokeWidth={1.5} />,
      title: "Join an Exclusive Community",
      description: "Connect with like-minded hosts who value meaningful travel experiences over transactions.",
    },
    {
      icon: <Globe size={28} strokeWidth={1.5} />,
      title: "Showcase Kosovo",
      description: "Help put Kosovo on the map as a destination for authentic, memory-rich travel experiences.",
    },
  ]

  const testimonials = [
    {
      name: "Arben Krasniqi",
      location: "Prizren, Kosovo",
      quote: "Hosting on Timecap has been incredible. Last month, a couple got engaged at my property. Being part of that moment was priceless.",
      earnings: "$1,200/month",
      rating: 4.9,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Lindita Berisha",
      location: "Rugova Valley, Kosovo",
      quote: "I love that Timecap focuses on memories, not just bookings. My guests come seeking meaningful experiences, and they leave with stories.",
      earnings: "$950/month",
      rating: 4.8,
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Driton Gashi",
      location: "Pristina, Kosovo",
      quote: "The Memory Density feature helps my loft stand out. Artists and writers specifically seek it out for creative retreats.",
      earnings: "$780/month",
      rating: 4.9,
      image: "https://i.pravatar.cc/150?img=3"
    },
  ]

  const submitApplication = () => {
    console.log("Submitting application:", formData)
    alert("Application submitted successfully! We'll contact you soon.")
  }

  return (
    <div className="become-host-page">
      
      {/* ===== HERO SECTION - FIXED STATS ===== */}
      <section className="host-hero">
        <div className="container">
          <div className="hero-badge">
            <Camera size={16} strokeWidth={1.5} />
            <span>Join Kosovo's Fastest Growing Host Community</span>
          </div>
          
          <h1 className="hero-title">
            Become a <span className="hero-highlight">Memory Maker</span>
          </h1>
          
          <p className="hero-subtitle">
            Open your doors to travelers seeking meaningful experiences. Your space could be where someone's most cherished memory begins.
          </p>

          {/* STATS - FIXED WITH PROPER ICON RENDERING */}
          <div className="host-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="host-stat-card">
                <div 
                  className="host-stat-icon-wrapper"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <div className="host-stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                </div>
                <div className="host-stat-content">
                  <div className="host-stat-value">{stat.value}</div>
                  <div className="host-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Host with Timecap?</h2>
          <p className="section-subtitle">
            We're not just another booking platform. We're building a community of memory makers.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-container">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section className="application-section" id="apply">
        <div className="container">
          <h2 className="section-title">Start Your Journey</h2>
          <p className="section-subtitle">Complete your host application in just a few steps</p>

          {/* Progress Steps */}
          <div className="progress-steps">
            <div className="progress-line"></div>
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="step-container">
                <div className={`step-circle ${currentStep >= step ? 'active' : ''}`}>
                  {currentStep > step ? <CheckCircle className="step-check" size={16} /> : step}
                </div>
                <span className="step-label">
                  {step === 1 && "Personal Info"}
                  {step === 2 && "Property Details"}
                  {step === 3 && "Amenities"}
                  {step === 4 && "Memory Types"}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="application-form">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="form-step">
                <h3 className="form-step-title">
                  <Users size={24} className="step-icon" />
                  Personal Information
                </h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+383 XX XXX XXX"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Property Details */}
            {currentStep === 2 && (
              <div className="form-step">
                <h3 className="form-step-title">
                  <Home size={24} className="step-icon" />
                  Property Details
                </h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="propertyName">Property Name</label>
                    <input
                      id="propertyName"
                      name="propertyName"
                      value={formData.propertyName}
                      onChange={handleInputChange}
                      placeholder="e.g., Mountain View Retreat"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertyType">Property Type</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select a type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="villa">Villa</option>
                      <option value="cabin">Cabin</option>
                      <option value="loft">Loft</option>
                      <option value="cottage">Cottage</option>
                      <option value="farmhouse">Farmhouse</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Kosovo"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Tell guests what makes your space special..."
                      className="form-textarea"
                      rows="4"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bedrooms">
                      <Bed size={16} className="input-icon" />
                      Bedrooms
                    </label>
                    <input
                      id="bedrooms"
                      name="bedrooms"
                      type="number"
                      min="0"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      placeholder="0"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bathrooms">
                      <Bath size={16} className="input-icon" />
                      Bathrooms
                    </label>
                    <input
                      id="bathrooms"
                      name="bathrooms"
                      type="number"
                      min="0"
                      step="0.5"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      placeholder="0"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="maxGuests">
                      <Users2 size={16} className="input-icon" />
                      Max Guests
                    </label>
                    <input
                      id="maxGuests"
                      name="maxGuests"
                      type="number"
                      min="1"
                      value={formData.maxGuests}
                      onChange={handleInputChange}
                      placeholder="0"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pricePerNight">
                      <DollarSign size={16} className="input-icon" />
                      Price/Night
                    </label>
                    <input
                      id="pricePerNight"
                      name="pricePerNight"
                      type="number"
                      min="0"
                      value={formData.pricePerNight}
                      onChange={handleInputChange}
                      placeholder="$0"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Amenities */}
            {currentStep === 3 && (
              <div className="form-step">
                <h3 className="form-step-title">
                  <Sparkles size={24} className="step-icon" />
                  Amenities
                </h3>
                <p className="form-instruction">Select all amenities your property offers</p>
                <div className="amenities-grid">
                  {amenitiesList.map((amenity) => (
                    <button
                      key={amenity.id}
                      type="button"
                      onClick={() => handleCheckboxChange("amenities", amenity.label)}
                      className={`amenity-button ${formData.amenities.includes(amenity.label) ? 'selected' : ''}`}
                    >
                      <span className="amenity-icon">{amenity.icon}</span>
                      <span className="amenity-label">{amenity.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Memory Types */}
            {currentStep === 4 && (
              <div className="form-step">
                <h3 className="form-step-title">
                  <Heart size={24} className="step-icon" />
                  Memory Types
                </h3>
                <p className="form-instruction">
                  What kinds of memories is your space best suited for? Select all that apply.
                </p>
                <div className="memory-grid">
                  {memoryTypesList.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleCheckboxChange("memoryTypes", type)}
                      className={`memory-button ${formData.memoryTypes.includes(type) ? 'selected' : ''}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 ? (
                <button className="nav-button prev-button" onClick={prevStep}>
                  ← Previous
                </button>
              ) : (
                <div />
              )}
              {currentStep < 4 ? (
                <button className="nav-button next-button" onClick={nextStep}>
                  Continue →
                </button>
              ) : (
                <button className="nav-button submit-button" onClick={submitApplication}>
                  <CheckCircle size={18} />
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

    

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <Camera className="cta-icon" size={64} strokeWidth={1.5} />
          <h2 className="cta-title">Ready to Create Memories?</h2>
          <p className="cta-subtitle">
            Your space has stories waiting to be written. Let travelers discover them.
          </p>
          <button
            className="cta-button"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Application
            <TrendingUp size={18} />
          </button>
        </div>
      </section>

     
    </div>
  )
}

// Missing Flame icon import workaround
const Flame = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
)
