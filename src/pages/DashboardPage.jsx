// pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Calendar, 
  Heart, 
  MapPin, 
  TrendingUp, 
  Users, 
  Star, 
  Camera, 
  Home, 
  Settings,
  Plus,
  ChevronRight,
  Award,
  Share2,
  Edit,
  Trash2,
  BookOpen,
  Globe,
  Zap,
  Compass,
  Target,
  Sparkles,
  Package,
  Filter,
  Bell,
  Grid,
  List,
  Eye
} from 'lucide-react';
import './DashboardPage.css';

function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  // Mock user stats
  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setStats({
        memoryCount: 12,
        capsuleCount: 8,
        hostProperties: 2,
        tripsBooked: 5,
        totalSpent: 1245,
        friendsCount: 48,
        streakDays: 7,
        memoryDensity: 85,
        totalViews: 1248,
        savedProperties: 6,
        upcomingTrips: 2
      });
      
      setLoading(false);
    };

    loadDashboardData();
  }, []);

  // Mock memories data
  const memories = [
    {
      id: 1,
      title: "Sunset Proposal in Rugova",
      location: "Rugova Valley, Kosovo",
      date: "Mar 15, 2024",
      type: "Proposal",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&auto=format&fit=crop",
      likes: 342,
      comments: 48,
      views: 1248,
      sentiment: "romantic",
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Creative Writing Retreat",
      location: "Pristina, Kosovo",
      date: "Jan 22, 2024",
      type: "Creative Breakthrough",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop",
      likes: 567,
      comments: 89,
      views: 2341,
      sentiment: "inspiring",
      color: "#6C63FF"
    },
    {
      id: 3,
      title: "Family Reunion at Gazivoda Lake",
      location: "Gazivoda Lake, Kosovo",
      date: "Dec 10, 2023",
      type: "Reunion",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop",
      likes: 892,
      comments: 156,
      views: 3456,
      sentiment: "emotional",
      color: "#20C997"
    },
    {
      id: 4,
      title: "First Date That Changed Everything",
      location: "Peja, Kosovo",
      date: "Feb 14, 2024",
      type: "First Date",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&auto=format&fit=crop",
      likes: 445,
      comments: 67,
      views: 1876,
      sentiment: "romantic",
      color: "#FF922B"
    }
  ];

  // Mock upcoming trips
  const upcomingTrips = [
    {
      id: 1,
      property: "Mountain View Cabin",
      location: "Rugova Valley",
      date: "Jun 15-20, 2024",
      guests: 2,
      status: "confirmed",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      property: "Creative Studio Loft",
      location: "Pristina",
      date: "Jul 5-10, 2024",
      guests: 1,
      status: "confirmed",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&auto=format&fit=crop"
    }
  ];

  // Mock activity feed - FIXED: Added proper icons as React elements
  const activities = [
    { id: 1, type: 'like', user: 'Sarah M.', memory: 'Sunset Proposal', time: '2 hours ago', icon: <Heart size={16} /> },
    { id: 2, type: 'comment', user: 'Alex T.', memory: 'Creative Retreat', time: '5 hours ago', icon: <Users size={16} /> },
    { id: 3, type: 'follow', user: 'Maria K.', time: '1 day ago', icon: <Star size={16} /> },
    { id: 4, type: 'memory', memory: 'New capsule created', time: '2 days ago', icon: <Package size={16} /> }
  ];

  // Get user initials for avatar - FIXED
  const getUserInitials = () => {
    if (user?.name) {
      return user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    }
    return 'ME';
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-pulse">
          <Sparkles size={48} />
        </div>
        <p className="loading-text">Preparing your memory journey...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="dashboard-title">
              Welcome back, <span className="gradient-text">{user?.name || 'Memory Explorer'}</span>
            </h1>
            <p className="dashboard-subtitle">
              Your journey through time and memory continues here
            </p>
          </div>
          <div className="header-right">
            <button className="header-btn notification-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <button className="header-btn create-btn" onClick={() => navigate('/capsules/new')}>
              <Plus size={20} />
              <span>Create</span>
            </button>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="quick-actions-bar">
          <button className="action-btn" onClick={() => navigate('/capsules')}>
            <BookOpen size={18} />
            <span>My Capsules</span>
          </button>
          <button className="action-btn" onClick={() => navigate('/host')}>
            <Home size={18} />
            <span>Host Dashboard</span>
          </button>
          <button className="action-btn" onClick={() => navigate('/')}>
            <Globe size={18} />
            <span>Explore</span>
          </button>
          <button className="action-btn" onClick={() => navigate('/profile')}>
            <Settings size={18} />
            <span>Profile</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Left Column - Main Content */}
        <div className="dashboard-left">
          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card primary">
              <div className="stat-icon">
                <Heart size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats?.memoryCount || 0}</div>
                <div className="stat-label">Memories</div>
                <div className="stat-trend">↑ 12% this month</div>
              </div>
            </div>
            
            <div className="stat-card secondary">
              <div className="stat-icon">
                <Camera size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats?.capsuleCount || 0}</div>
                <div className="stat-label">Capsules</div>
                <div className="stat-trend">↑ 8% this month</div>
              </div>
            </div>
            
            <div className="stat-card accent">
              <div className="stat-icon">
                <MapPin size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats?.tripsBooked || 0}</div>
                <div className="stat-label">Trips</div>
                <div className="stat-trend">↑ 3 planned</div>
              </div>
            </div>
            
            <div className="stat-card highlight">
              <div className="stat-icon">
                <Award size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats?.streakDays || 0}</div>
                <div className="stat-label">Day Streak</div>
                <div className="stat-trend">Keep it up!</div>
              </div>
            </div>
          </div>

          {/* Recent Memories Section */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-title">
                <Compass size={20} />
                <h2>Recent Memories</h2>
              </div>
              <div className="section-actions">
                <button 
                  className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </button>
                <button 
                  className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
                <button className="filter-btn">
                  <Filter size={18} />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            <div className={`memories-container ${viewMode}`}>
              {memories.map(memory => (
                <div key={memory.id} className="memory-item">
                  <div className="memory-image" style={{ backgroundImage: `url(${memory.image})` }}>
                    <div className="memory-type" style={{ backgroundColor: memory.color }}>
                      {memory.type}
                    </div>
                    <button className="memory-overlay-btn">
                      <Eye size={18} />
                    </button>
                  </div>
                  <div className="memory-content">
                    <h3 className="memory-title">{memory.title}</h3>
                    <p className="memory-location">
                      <MapPin size={14} />
                      {memory.location}
                    </p>
                    <p className="memory-date">
                      <Calendar size={14} />
                      {memory.date}
                    </p>
                    <div className="memory-stats">
                      <div className="stat">
                        <Heart size={14} />
                        <span>{memory.likes}</span>
                      </div>
                      <div className="stat">
                        <Users size={14} />
                        <span>{memory.comments}</span>
                      </div>
                      <div className="stat">
                        <Eye size={14} />
                        <span>{memory.views}</span>
                      </div>
                    </div>
                    <div className="memory-actions">
                      <button className="action-btn small">
                        <Share2 size={16} />
                      </button>
                      <button className="action-btn small">
                        <Edit size={16} />
                      </button>
                      <button className="action-btn small delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="view-all-btn" onClick={() => navigate('/capsules')}>
              View All Memories
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Upcoming Trips Section */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-title">
                <Target size={20} />
                <h2>Upcoming Journeys</h2>
              </div>
              <button className="add-trip-btn" onClick={() => navigate('/')}>
                <Plus size={18} />
                <span>Add Trip</span>
              </button>
            </div>

            <div className="trips-container">
              {upcomingTrips.map(trip => (
                <div key={trip.id} className="trip-item">
                  <div className="trip-image" style={{ backgroundImage: `url(${trip.image})` }}></div>
                  <div className="trip-details">
                    <h3 className="trip-title">{trip.property}</h3>
                    <p className="trip-location">{trip.location}</p>
                    <div className="trip-info">
                      <span className="info-item">
                        <Calendar size={14} />
                        {trip.date}
                      </span>
                      <span className="info-item">
                        <Users size={14} />
                        {trip.guests} guest{trip.guests !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <span className="status-badge confirmed">
                      {trip.status}
                    </span>
                  </div>
                  <div className="trip-actions">
                    <button className="trip-btn primary">View Details</button>
                    <button className="trip-btn secondary">Modify</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar - FIXED */}
        <div className="dashboard-sidebar">
          {/* User Profile Card - FIXED */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  {getUserInitials()}
                </div>
                <div className="online-status"></div>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{user?.name || 'Memory Explorer'}</h3>
                <p className="profile-title">Memory Creator</p>
              </div>
              <button className="profile-edit-btn" onClick={() => navigate('/profile')}>
                <Edit size={16} />
              </button>
            </div>
            
            <div className="profile-stats">
              <div className="profile-stat">
                <span className="stat-label">Memory Density</span>
                <span className="stat-value">{stats?.memoryDensity || 0}%</span>
                <div className="stat-progress">
                  <div className="progress-bar" style={{ width: `${stats?.memoryDensity || 0}%` }}></div>
                </div>
              </div>
              <div className="profile-stat">
                <span className="stat-label">Total Impact</span>
                <span className="stat-value">{stats?.totalViews || 0}</span>
                <span className="stat-desc">views on memories</span>
              </div>
            </div>
          </div>

          {/* Activity Feed - FIXED */}
          <div className="activity-card">
            <div className="card-header">
              <h3 className="card-title">
                <Zap size={18} />
                Recent Activity
              </h3>
              <button className="card-action">See All</button>
            </div>
            <div className="activity-list">
              {activities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <p className="activity-text">
                      {activity.type === 'like' && <><strong>{activity.user}</strong> liked your memory "{activity.memory}"</>}
                      {activity.type === 'comment' && <><strong>{activity.user}</strong> commented on "{activity.memory}"</>}
                      {activity.type === 'follow' && <><strong>{activity.user}</strong> started following you</>}
                      {activity.type === 'memory' && <>{activity.memory}</>}
                    </p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Memory Insights */}
          <div className="insights-card">
            <div className="card-header">
              <h3 className="card-title">
                <TrendingUp size={18} />
                Memory Insights
              </h3>
            </div>
            <div className="insights-content">
              <div className="insight-item">
                <span className="insight-label">Most Popular Memory</span>
                <span className="insight-value">"Family Reunion at Gazivoda Lake"</span>
              </div>
              <div className="insight-item">
                <span className="insight-label">Top Location</span>
                <span className="insight-value">Rugova Valley</span>
              </div>
              <div className="insight-item">
                <span className="insight-label">Memory Sentiment</span>
                <div className="insight-value">
                  <span className="sentiment-tag romantic">Romantic</span>
                  <span className="sentiment-tag inspiring">Inspiring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="tips-card">
            <div className="card-header">
              <h3 className="card-title">
                <Sparkles size={18} />
                Tips for You
              </h3>
            </div>
            <div className="tips-list">
              <div className="tip-item">
                <Package size={16} />
                <span>Create a new memory capsule to preserve your latest journey</span>
              </div>
              <div className="tip-item">
                <Share2 size={16} />
                <span>Share your memories to increase visibility</span>
              </div>
              <div className="tip-item">
                <Star size={16} />
                <span>Complete your profile to get featured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
