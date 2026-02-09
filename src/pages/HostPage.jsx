

import { useState } from "react"

import { 
  Home, 
  Users, 
  TrendingUp, 
  Heart, 
  Star, 
  MapPin, 
  Camera, 
  CheckCircle 
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
    "WiFi", "Kitchen", "Free Parking", "Air Conditioning", "Heating", 
    "Washer", "Dryer", "TV", "Pool", "Hot Tub", "Fireplace", "Balcony", 
    "Garden", "Mountain View", "Lake View", "City View"
  ]

  const memoryTypesList = [
    "Proposals & Engagements", "Creative Breakthroughs", "Family Reunions", 
    "First Dates", "Career Milestones", "Personal Transformations", 
    "Anniversaries", "Solo Adventures", "Celebrations"
  ]

  const stats = [
    { icon: Home, value: "2,400+", label: "Active Hosts" },
    { icon: Users, value: "48,000+", label: "Guests Hosted" },
    { icon: TrendingUp, value: "$4.2M", label: "Host Earnings" },
    { icon: Heart, value: "156,000+", label: "Memories Created" },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Earn Extra Income",
      description: "Hosts in Kosovo earn an average of $850/month sharing their spaces with memory seekers.",
    },
    {
      icon: Heart,
      title: "Create Lasting Impact",
      description: "Be part of life-changing moments. Your space could be where someone proposes or finds inspiration.",
    },
    {
      icon: Star,
      title: "Join an Exclusive Community",
      description: "Connect with like-minded hosts who value meaningful travel experiences over transactions.",
    },
    {
      icon: MapPin,
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
    },
    {
      name: "Lindita Berisha",
      location: "Rugova Valley, Kosovo",
      quote: "I love that Timecap focuses on memories, not just bookings. My guests come seeking meaningful experiences, and they leave with stories.",
      earnings: "$950/month",
      rating: 4.8,
    },
    {
      name: "Driton Gashi",
      location: "Pristina, Kosovo",
      quote: "The Memory Density feature helps my loft stand out. Artists and writers specifically seek it out for creative retreats.",
      earnings: "$780/month",
      rating: 4.9,
    },
  ]

  const submitApplication = () => {
    console.log("Submitting application:", formData)
    alert("Application submitted successfully! We'll contact you soon.")
  }

  return (
    <div className="become-host-page">
      

      {/* Hero Section */}
      <section className="host-hero">
        <div className="container">
          <h1 className="hero-title">
            Become a <span className="hero-highlight">Memory Maker</span>
          </h1>
          <p className="hero-subtitle">
            Open your doors to travelers seeking meaningful experiences. Your space could be where someone's most cherished memory begins.
          </p>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon className="stat-icon" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                  <benefit.icon className="benefit-icon" />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
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
                  {currentStep > step ? <CheckCircle className="step-check" /> : step}
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
                <h3 className="form-step-title">Personal Information</h3>
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
                <h3 className="form-step-title">Property Details</h3>
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
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <input
                      id="bedrooms"
                      name="bedrooms"
                      type="number"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      placeholder="0"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <input
                      id="bathrooms"
                      name="bathrooms"
                      type="number"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      placeholder="0"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="maxGuests">Max Guests</label>
                    <input
                      id="maxGuests"
                      name="maxGuests"
                      type="number"
                      value={formData.maxGuests}
                      onChange={handleInputChange}
                      placeholder="0"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pricePerNight">Price/Night</label>
                    <input
                      id="pricePerNight"
                      name="pricePerNight"
                      type="number"
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
                <h3 className="form-step-title">Amenities</h3>
                <p className="form-instruction">Select all amenities your property offers</p>
                <div className="amenities-grid">
                  {amenitiesList.map((amenity) => (
                    <button
                      key={amenity}
                      type="button"
                      onClick={() => handleCheckboxChange("amenities", amenity)}
                      className={`amenity-button ${formData.amenities.includes(amenity) ? 'selected' : ''}`}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Memory Types */}
            {currentStep === 4 && (
              <div className="form-step">
                <h3 className="form-step-title">Memory Types</h3>
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
                  Previous
                </button>
              ) : (
                <div />
              )}
              {currentStep < 4 ? (
                <button className="nav-button next-button" onClick={nextStep}>
                  Continue
                </button>
              ) : (
                <button className="nav-button submit-button" onClick={submitApplication}>
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Hear from Our Hosts</h2>
          <p className="section-subtitle">
            Join thousands of hosts across Kosovo making a difference
          </p>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="rating-container">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                  <span className="rating-value">{testimonial.rating}</span>
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-footer">
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-location">{testimonial.location}</div>
                  </div>
                  <div className="testimonial-earnings">
                    <div className="earnings-amount">{testimonial.earnings}</div>
                    <div className="earnings-label">avg. earnings</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <Camera className="cta-icon" />
          <h2 className="cta-title">Ready to Create Memories?</h2>
          <p className="cta-subtitle">
            Your space has stories waiting to be written. Let travelers discover them.
          </p>
          <button
            className="cta-button"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Application
          </button>
        </div>
      </section>

    
    </div>
  )
}
