

import React from 'react';

import { 
  Clock, 
  MapPin, 
  Users, 
  Globe, 
  Heart, 
  Star, 
  TrendingUp,
  Shield,
  Camera,
  Sparkles,
  Award,
  Target,
  ChevronRight,
  Quote,
  Zap,
  CheckCircle,
  Home,
  Coffee,
  Laptop,
  Cloud,
  Palette,
  Compass
} from 'lucide-react';
import './AboutPage.css';

function AboutPage() {
  const stats = [
    { icon: <Users size={24} />, value: "2,400+", label: "Active Hosts" },
    { icon: <Camera size={24} />, value: "24,567", label: "Memory Capsules" },
    { icon: <Heart size={24} />, value: "48,000+", label: "Guests Hosted" },
    { icon: <TrendingUp size={24} />, value: "$4.2M", label: "Host Earnings" },
  ];

  const values = [
    {
      icon: <Shield size={24} />,
      title: "Trust & Safety",
      description: "Every memory is protected with enterprise-grade encryption"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Authenticity",
      description: "Preserving real moments, real emotions"
    },
    {
      icon: <Globe size={24} />,
      title: "Community",
      description: "Building connections worldwide"
    },
    {
      icon: <Award size={24} />,
      title: "Excellence",
      description: "Curating premium memory experiences"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Idea conceived in Pristina, Kosovo"
    },
    {
      year: "2024",
      title: "Launch",
      description: "First prototype & beta testing"
    },
    {
      year: "2024",
      title: "Growth",
      description: "Expanded across the Balkans"
    },
    {
      year: "Now",
      title: "Global",
      description: "Going worldwide"
    }
  ];

  const team = [
    {
      role: "Founder & CEO",
      name: "19-year-old developer",
      location: "Pristina, Kosovo",
      icon: <Laptop size={20} />
    },
    {
      role: "Community",
      name: "2,400+ Hosts",
      location: "Across 156 countries",
      icon: <Users size={20} />
    },
    {
      role: "Mission",
      name: "Memory Makers",
      location: "48,000+ and growing",
      icon: <Heart size={20} />
    }
  ];

  return (
    <div className="about-page">
  
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <MapPin size={16} />
              <span>Born in Kosovo</span>
            </div>
            <h1 className="hero-title">
              More Than a Platform
              <br />
              <span className="hero-highlight">A Memory Movement</span>
            </h1>
            <p className="hero-subtitle">
              We're transforming travel from transactional check-ins to transformational 
              memory-making experiences. Born in the heart of the Balkans, built for the world.
            </p>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="section-header">
              <h2 className="section-title italic-bold">
                <Quote size={28} className="title-icon" />
                The Story Behind Timecap
              </h2>
              <p className="section-subtitle italic-bold">
                From a student's vision to a global community
              </p>
            </div>
            
            <div className="founder-story">
              <div className="story-card">  
                <div className="story-header">
                  <div className="founder-avatar">BF</div>
                  <div className="founder-info">
                    <h4 className="founder-name">Founder, Timecap</h4>
                    <p className="founder-location">Pristina, Kosovo</p>
                  </div>
                </div>
                <p className="story-text">
                  "As a 19-year-old developer from Kosovo, I watched meaningful moments get 
                  lost in photo galleries. Travel became about photos, not feelings. 
                  Timecap is my answer to that a platform where every stay creates 
                  a permanent memory capsule."
                </p>
              </div>
              
              <div className="story-highlights">
                <div className="highlight">
                  <CheckCircle size={18} className="highlight-icon" />
                  <span>Built in Kosovo, for the world</span>
                </div>
                <div className="highlight">
                  <CheckCircle size={18} className="highlight-icon" />
                  <span>Focus on meaningful travel experiences</span>
                </div>
                <div className="highlight">
                  <CheckCircle size={18} className="highlight-icon" />
                  <span>Digital memory preservation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title italic-bold">Our Core Values</h2>
            <p className="section-subtitle italic-bold">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title italic-bold">Our Timecap Family</h2>
            <p className="section-subtitle italic-bold">A community of memory makers</p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">{member.icon}</div>
                <div className="team-content">
                  <h3 className="team-role">{member.role}</h3>
                  <p className="team-name">{member.name}</p>
                  <p className="team-location">{member.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-card">
            <div className="mission-icon">
              <Target size={32} />
            </div>
            <div className="mission-content">
              <h2 className="mission-title italic-bold">Our Mission</h2>
              <p className="mission-statement">
                To create a world where every meaningful moment is preserved, cherished, 
                and connected to the places that made them special. We're building the 
                future of memory-driven travel.
              </p>
              <div className="mission-stats">
                <div className="mission-stat">
                  <Zap size={20} className="stat-icon" />
                  <span>1M memories by 2025</span>
                </div>
                <div className="mission-stat">
                  <Globe size={20} className="stat-icon" />
                  <span>200+ countries</span>
                </div>
                <div className="mission-stat">
                  <Star size={20} className="stat-icon" />
                  <span>Premium experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <Clock size={48} className="cta-icon" />
            <h2 className="cta-title italic-bold">Join the Memory Movement</h2>
            <p className="cta-subtitle italic-bold">
              Whether you're creating memories or hosting them, there's a place for you 
              in the Timecap community.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                <span>Start Creating Memories</span>
                <ChevronRight size={20} />
              </button>
              <button className="cta-button secondary">
                <span>Become a Host</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default AboutPage;