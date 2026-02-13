import React from 'react';
import { 
    Users,  Camera, Heart, TrendingUp,MapPin,  Shield, Sparkles,
  Globe,Award,Clock, Rocket, Calendar,Laptop,
  Users as UsersGroup,
  Heart as HeartIcon,  Target, Zap, Star,
  ChevronRight,Quote,CheckCircle,
  BookOpen,Home,Coffee,Cloud,Palette,Compass
} from 'lucide-react';
import './AboutPage.css';

function AboutPage() {
  
  const stats = [
    { 
      icon: <Users size={28} strokeWidth={1.5} />, 
      value: "2,400+", 
      label: "Active Hosts",
      color: "#2F4538"
    },
    { 
      icon: <Camera size={28} strokeWidth={1.5} />, 
      value: "24,567", 
      label: "Memory Capsules",
      color: "#BF8552"
    },
    { 
      icon: <Heart size={28} strokeWidth={1.5} />, 
      value: "48,000+", 
      label: "Guests Hosted",
      color: "#FF6B6B"
    },
    { 
      icon: <TrendingUp size={28} strokeWidth={1.5} />, 
      value: "$4.2M", 
      label: "Host Earnings",
      color: "#20C997"
    },
  ];

  const values = [
    {
      icon: <Shield size={24} strokeWidth={1.5} />,
      title: "Trust & Safety",
      description: "Every memory is protected with enterprise grade encryption"
    },
    {
      icon: <Sparkles size={24} strokeWidth={1.5} />,
      title: "Authenticity",
      description: "Preserving real moments, real emotions, real stories"
    },
    {
      icon: <Globe size={24} strokeWidth={1.5} />,
      title: "Community",
      description: "Building connections across borders and generations"
    },
    {
      icon: <Award size={24} strokeWidth={1.5} />,
      title: "Excellence",
      description: "Curating premium memory experiences since day one"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Idea conceived in Pristina, Kosovo. A 19 year old developer's vision to transform travel.",
      icon: <Rocket size={20} />
    },
    {
      year: "2024",
      title: "Launch",
      description: "First prototype launched with 50 beta hosts across the Balkans.",
      icon: <Calendar size={20} />
    },
    {
      year: "2024",
      title: "Growth",
      description: "Expanded to 2,400+ hosts, 24,000+ memory capsules created.",
      icon: <TrendingUp size={20} />
    },
    {
      year: "Now",
      title: "Global Mission",
      description: "Taking Kosovo born innovation to memory makers worldwide.",
      icon: <Globe size={20} />
    }
  ];

  const team = [
    {
      role: "Founder & CEO",
      name: "19 year old developer",
      location: "Pristina, Kosovo",
      icon: <Laptop size={20} strokeWidth={1.5} />,
      bio: "Building the future of memory driven travel"
    },
    {
      role: "Community",
      name: "2,400+ Hosts",
      location: "Across 6 countries",
      icon: <UsersGroup size={20} strokeWidth={1.5} />,
      bio: "The heart of Timecap"
    },
    {
      role: "Mission",
      name: "Memory Makers",
      location: "48,000+ and growing",
      icon: <HeartIcon size={20} strokeWidth={1.5} />,
      bio: "Every capsule tells a story"
    }
  ];

  
  const missionStats = [
    { 
      icon: <Zap size={22} strokeWidth={1.5} />, 
      label: "1M memories by 2025",
      color: "#FFD700"
    },
    { 
      icon: <Globe size={22} strokeWidth={1.5} />, 
      label: "6 countries",
      color: "#BF8552"
    },
    { 
      icon: <Star size={22} strokeWidth={1.5} fill="#FFD700" />, 
      label: "Premium experiences",
      color: "#FFD700"
    },
    { 
      icon: <Heart size={22} strokeWidth={1.5} />, 
      label: "100% memory-focused",
      color: "#FF6B6B"
    }
  ];

  return (
    <div className="about-page">
      
      {/* ===== HERO SECTION - FIXED STATS ICONS ===== */}
      <section className="about-hero" aria-label="Hero section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
              <span>Born in Kosovo, Built for the World</span>
            </div>
            
            <h1 className="hero-title">
              More Than a Platform
              <br />
              <span className="hero-highlight">A Memory Movement</span>
            </h1>
            
            <p className="hero-subtitle">
              We're transforming travel from transactional check-ins to transformational 
              memory making experiences. Born in the heart of the Balkans, 
              <strong> built for the world.</strong>
            </p>
            
            {/* HERO STATS - IMPROVED LAYOUT */}
            <div className="hero-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat-card">
                  <div 
                    className="hero-stat-icon-wrapper"
                    style={{ backgroundColor: `${stat.color}15` }} // 15% opacity
                  >
                    <div className="hero-stat-icon" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="hero-stat-content">
                    <div className="hero-stat-value">{stat.value}</div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="founder-section" aria-label="Founder story">
        <div className="container">
          <div className="founder-content">
            <div className="section-header">
              <h2 className="section-title italic-bold">
                <Quote size={28} className="title-icon" aria-hidden="true" />
                The Story Behind Timecap
              </h2>
              <p className="section-subtitle italic-bold">
                From a student's dorm room to a global community
              </p>
            </div>
            
            <div className="founder-story">
              <article className="story-card">
                <div className="story-header">
                  <div className="founder-avatar" aria-label="Founder initials">
                    BF
                  </div>
                  <div className="founder-info">
                    <h3 className="founder-name">Ben Fazlija  — Founder</h3>
                    <p className="founder-location">
                      <MapPin size={14} aria-hidden="true" />
                      Pristina, Kosovo
                    </p>
                  </div>
                </div>
                
                <blockquote className="story-text">
                  "As a 19 year old developer from Kosovo, I watched meaningful moments get 
                  lost in photo galleries. Travel became about photos, not feelings. 
                  Timecap is my answer. A platform where every stay creates 
                  a permanent memory capsule that lasts a lifetime."
                </blockquote>
              </article>
              
              <div className="story-highlights">
                <div className="highlight">
                  <CheckCircle size={18} className="highlight-icon" aria-hidden="true" />
                  <span>Built in Kosovo, designed for the world</span>
                </div>
                <div className="highlight">
                  <CheckCircle size={18} className="highlight-icon" aria-hidden="true" />
                  <span>100% focused on meaningful travel experiences</span>
                </div>
                <div className="highlight">
                  <CheckCircle size={18} className="highlight-icon" aria-hidden="true" />
                  <span>Digital memory preservation for future generations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" aria-label="Core values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title italic-bold">Our Core Values</h2>
            <p className="section-subtitle italic-bold">
              The principles that guide every decision we make
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={index} className="value-card">
                <div className="value-icon" aria-hidden="true">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section" aria-label="Company timeline">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title italic-bold">
              <Clock size={28} className="title-icon" aria-hidden="true" />
              Our Journey
            </h2>
            <p className="section-subtitle italic-bold">
              From idea to impact   the Timecap story
            </p>
          </div>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot" aria-hidden="true"></div>
                  {index < timeline.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" aria-label="Team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title italic-bold">The Timecap Family</h2>
            <p className="section-subtitle italic-bold">
              A community of memory makers, builders, and dreamers
            </p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <article key={index} className="team-card">
                <div className="team-icon" aria-hidden="true">{member.icon}</div>
                <div className="team-content">
                  <h3 className="team-role">{member.role}</h3>
                  <p className="team-name">{member.name}</p>
                  <p className="team-location">
                    <MapPin size={12} aria-hidden="true" />
                    {member.location}
                  </p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION - FIXED STATS ICONS ===== */}
      <section className="mission-section" aria-label="Mission">
        <div className="container">
          <div className="mission-card">
            <div className="mission-icon" aria-hidden="true">
              <Target size={32} strokeWidth={1.5} />
            </div>
            <div className="mission-content">
              <h2 className="mission-title italic-bold">Our Mission</h2>
              <p className="mission-statement">
                To create a world where every meaningful moment is preserved, cherished, 
                and connected to the places that made them special. We're building the 
                future of <strong>memory driven travel</strong>  one capsule at a time.
              </p>
              
              {/* MISSION STATS - IMPROVED GRID */}
              <div className="mission-stats-grid">
                {missionStats.map((stat, index) => (
                  <div key={index} className="mission-stat-item">
                    <div 
                      className="mission-stat-icon-wrapper"
                      style={{ backgroundColor: `${stat.color}20` }} // 20% opacity
                    >
                      <div className="mission-stat-icon" style={{ color: stat.color }}>
                        {stat.icon}
                      </div>
                    </div>
                    <span className="mission-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" aria-label="Call to action">
        <div className="container">
          <div className="cta-content">
            <Clock size={48} className="cta-icon" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="cta-title italic-bold">Join the Memory Movement</h2>
            <p className="cta-subtitle italic-bold">
              Whether you're creating memories or hosting them, there's a place for you 
              in the Timecap community. <strong>Start your journey today.</strong>
            </p>
            <div className="cta-buttons">
              <button 
                type="button" 
                className="cta-button primary"
                aria-label="Start creating memories"
              >
                <span>Start Creating Memories</span>
                <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
              </button>
              <button 
                type="button" 
                className="cta-button secondary"
                aria-label="Become a host"
              >
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
