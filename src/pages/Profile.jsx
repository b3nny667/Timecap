import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  User, Camera, Edit2, Save, X, MapPin, Calendar, Globe, 
  Mail, Phone, Link, Award, Star, Heart, Clock, Users,
  Settings, Shield, Bell, CreditCard, HelpCircle, LogOut,
  Instagram, Twitter, Facebook, Linkedin, Github,
  ChevronRight, Check, Share2, Download, Upload,
  Eye, EyeOff, Lock, Key, Trash2, Filter
} from 'lucide-react';
import './Profile.css';

function ProfilePage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  
  const [profileData, setProfileData] = useState({
    name: user?.name || "Memory Explorer",
    email: user?.email || "explorer@timecap.com",
    bio: "Digital nomad preserving memories across Kosovo and beyond. Creating capsules that tell stories of love, growth, and transformation.",
    location: "Pristina, Kosovo",
    joinedDate: "March 2023",
    website: "https://github.com/b3nny667",
    phone: "+383 44 123 456",
    avatar: user?.avatar || null,
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    badges: [
      { id: 1, name: "Memory Pioneer", icon: "🚀", earned: "Apr 2023" },
      { id: 2, name: "Capsule Creator", icon: "💎", earned: "Jun 2023" },
      { id: 3, name: "Host Pro", icon: "🏆", earned: "Sep 2023" },
      { id: 4, name: "Storyteller", icon: "📖", earned: "Dec 2023" },
    ],
    stats: {
      capsules: 24,
      memories: 156,
      wishlist: 12,
      following: 89,
      followers: 245,
      streak: 42,
      memoryDensity: 87
    },
    recentActivity: [
      { id: 1, type: 'capsule', action: 'created', title: "Sunset Proposal", time: "2 hours ago" },
      { id: 2, type: 'memory', action: 'added', title: "Creative Retreat Photos", time: "1 day ago" },
      { id: 3, type: 'like', action: 'liked', title: "Family Reunion Story", time: "2 days ago" },
      { id: 4, type: 'follow', action: 'followed', title: "Sarah M.", time: "3 days ago" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/memoryexplorer",
      twitter: "https://twitter.com/memoryexplorer",
      facebook: "https://facebook.com/memoryexplorer",
      linkedin: "https://linkedin.com/in/memoryexplorer"
    }
  });

  // Form state
  const [formData, setFormData] = useState({ ...profileData });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = () => {
    setProfileData(formData);
    setIsEditing(false);
    
  };

  const handleCancelEdit = () => {
    setFormData({ ...profileData });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    // Redirect handled by AuthContext
  };

  const handleDeleteAccount = () => {
    
    console.log('Account deletion requested');
    setShowDeleteModal(false);
    logout();
  };

  // Mock capsules
  const userCapsules = [
    { id: 1, title: "Sunset Proposal in Rugova", date: "Mar 15, 2024", likes: 342, views: 1248, type: "Proposal" },
    { id: 2, title: "Creative Writing Retreat", date: "Jan 22, 2024", likes: 567, views: 2341, type: "Creative" },
    { id: 3, title: "Family Reunion at Gazivoda", date: "Dec 10, 2023", likes: 892, views: 3456, type: "Reunion" },
    { id: 4, title: "First Date Magic", date: "Feb 14, 2024", likes: 445, views: 1876, type: "First Date" },
  ];

  return (
    <div className="profile-page">
      {/* Cover Photo */}
      <div className="profile-cover">
        <img 
          src={profileData.coverImage} 
          alt="Cover" 
          className="cover-image" 
        />
        <div className="cover-overlay">
          {isEditing && (
            <button className="cover-edit-btn">
              <Camera size={20} />
              Change Cover
            </button>
          )}
        </div>
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="header-content">
          {/* Avatar */}
          <div className="avatar-container">
            <div className="profile-avatar">
              {profileData.avatar ? (
                <img src={profileData.avatar} alt={profileData.name} />
              ) : (
                <div className="avatar-placeholder">
                  <User size={48} />
                </div>
              )}
              {isEditing && (
                <button className="avatar-edit-btn">
                  <Camera size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="profile-info">
            <div className="profile-main">
              <div className="name-section">
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="edit-input name-input"
                    placeholder="Your name"
                  />
                ) : (
                  <h1 className="profile-name">{profileData.name}</h1>
                )}
                <div className="profile-badges">
                  {profileData.badges.slice(0, 3).map(badge => (
                    <span key={badge.id} className="profile-badge" title={badge.name}>
                      {badge.icon}
                    </span>
                  ))}
                  {profileData.badges.length > 3 && (
                    <span className="badge-count">+{profileData.badges.length - 3}</span>
                  )}
                </div>
              </div>
              
              {isEditing ? (
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="edit-textarea bio-input"
                  placeholder="Tell your story..."
                  rows={3}
                />
              ) : (
                <p className="profile-bio">{profileData.bio}</p>
              )}

              <div className="profile-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="edit-input meta-input"
                      placeholder="Location"
                    />
                  ) : (
                    <span>{profileData.location}</span>
                  )}
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>Joined {profileData.joinedDate}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="profile-actions">
              {isEditing ? (
                <div className="edit-actions">
                  <button className="action-btn save-btn" onClick={handleSaveProfile}>
                    <Save size={18} />
                    Save Changes
                  </button>
                  <button className="action-btn cancel-btn" onClick={handleCancelEdit}>
                    <X size={18} />
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    className="action-btn edit-btn"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit2 size={18} />
                    Edit Profile
                  </button>
                  <button className="action-btn share-btn">
                    <Share2 size={18} />
                    Share
                  </button>
                  <button className="action-btn settings-btn">
                    <Settings size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-main-content">
        {/* Sidebar */}
        <div className="profile-sidebar">
          {/* Stats Card */}
          <div className="sidebar-card stats-card">
            <h3 className="card-title">Profile Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <Award size={20} />
                </div>
                <div className="stat-info">
                  <div className="stat-value">{profileData.stats.capsules}</div>
                  <div className="stat-label">Capsules</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Star size={20} />
                </div>
                <div className="stat-info">
                  <div className="stat-value">{profileData.stats.memories}</div>
                  <div className="stat-label">Memories</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Heart size={20} />
                </div>
                <div className="stat-info">
                  <div className="stat-value">{profileData.stats.wishlist}</div>
                  <div className="stat-label">Wishlist</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Users size={20} />
                </div>
                <div className="stat-info">
                  <div className="stat-value">{profileData.stats.followers}</div>
                  <div className="stat-label">Followers</div>
                </div>
              </div>
            </div>
            <div className="streak-stat">
              <Clock size={20} />
              <span>{profileData.stats.streak} day streak</span>
            </div>
          </div>

          {/* Contact Card */}
          <div className="sidebar-card contact-card">
            <h3 className="card-title">Contact Info</h3>
            <div className="contact-list">
              <div className="contact-item">
                <Mail size={18} />
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="edit-input contact-input"
                    placeholder="Email"
                  />
                ) : (
                  <span>{profileData.email}</span>
                )}
              </div>
              <div className="contact-item">
                <Phone size={18} />
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="edit-input contact-input"
                    placeholder="Phone"
                  />
                ) : (
                  <span>{profileData.phone}</span>
                )}
              </div>
              <div className="contact-item">
                <Globe size={18} />
                {isEditing ? (
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="edit-input contact-input"
                    placeholder="Website"
                  />
                ) : (
                  <a href={profileData.website} target="_blank" rel="noopener noreferrer">
                    {profileData.website.replace('https://', '')}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="sidebar-card social-card">
            <h3 className="card-title">Social Links</h3>
            <div className="social-links">
              <a href={profileData.socialLinks.instagram} className="social-link instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a href={profileData.socialLinks.twitter} className="social-link twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
                <span>Twitter</span>
              </a>
              <a href={profileData.socialLinks.facebook} className="social-link facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a href={profileData.socialLinks.linkedin} className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Badges Card */}
          <div className="sidebar-card badges-card">
            <h3 className="card-title">Badges & Achievements</h3>
            <div className="badges-list">
              {profileData.badges.map(badge => (
                <div key={badge.id} className="badge-item">
                  <div className="badge-icon">{badge.icon}</div>
                  <div className="badge-info">
                    <div className="badge-name">{badge.name}</div>
                    <div className="badge-earned">Earned {badge.earned}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="profile-content">
          {/* Navigation Tabs */}
          <div className="profile-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'capsules' ? 'active' : ''}`}
              onClick={() => setActiveTab('capsules')}
            >
              Capsules
            </button>
            <button 
              className={`tab-btn ${activeTab === 'memories' ? 'active' : ''}`}
              onClick={() => setActiveTab('memories')}
            >
              Memories
            </button>
            <button 
              className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
            <div className="tab-indicator"></div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-content">
                {/* Recent Activity */}
                <div className="content-section">
                  <div className="section-header">
                    <h3 className="section-title">Recent Activity</h3>
                    <button className="view-all-btn">View All</button>
                  </div>
                  <div className="activity-list">
                    {profileData.recentActivity.map(activity => (
                      <div key={activity.id} className="activity-item">
                        <div className="activity-icon">
                          {activity.type === 'capsule' && '💎'}
                          {activity.type === 'memory' && '📸'}
                          {activity.type === 'like' && '❤️'}
                          {activity.type === 'follow' && '👤'}
                        </div>
                        <div className="activity-details">
                          <p className="activity-text">
                            You {activity.action} <strong>{activity.title}</strong>
                          </p>
                          <span className="activity-time">{activity.time}</span>
                        </div>
                        <ChevronRight size={18} className="activity-arrow" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Memory Density */}
                <div className="content-section">
                  <div className="section-header">
                    <h3 className="section-title">Memory Density</h3>
                    <div className="density-value">{profileData.stats.memoryDensity}%</div>
                  </div>
                  <div className="density-progress">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${profileData.stats.memoryDensity}%` }}
                    ></div>
                  </div>
                  <p className="density-description">
                    Higher density means more meaningful memories per capsule
                  </p>
                </div>

                {/* Recent Capsules */}
                <div className="content-section">
                  <div className="section-header">
                    <h3 className="section-title">Recent Capsules</h3>
                    <button className="view-all-btn">View All</button>
                  </div>
                  <div className="capsules-grid">
                    {userCapsules.slice(0, 2).map(capsule => (
                      <div key={capsule.id} className="capsule-card">
                        <div className="capsule-header">
                          <span className="capsule-type">{capsule.type}</span>
                          <div className="capsule-stats">
                            <span className="stat">❤️ {capsule.likes}</span>
                            <span className="stat">👁️ {capsule.views}</span>
                          </div>
                        </div>
                        <h4 className="capsule-title">{capsule.title}</h4>
                        <p className="capsule-date">{capsule.date}</p>
                        <button className="capsule-view-btn">View Details</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'capsules' && (
              <div className="capsules-content">
                <div className="content-header">
                  <h3 className="section-title">My Capsules</h3>
                  <div className="header-actions">
                    <button className="action-btn filter-btn">
                      <Filter size={18} />
                      Filter
                    </button>
                    <button className="action-btn create-btn">
                      <Edit2 size={18} />
                      Create New
                    </button>
                  </div>
                </div>
                <div className="capsules-table">
                  <div className="table-header">
                    <div className="table-cell">Title</div>
                    <div className="table-cell">Type</div>
                    <div className="table-cell">Date</div>
                    <div className="table-cell">Likes</div>
                    <div className="table-cell">Views</div>
                    <div className="table-cell">Actions</div>
                  </div>
                  {userCapsules.map(capsule => (
                    <div key={capsule.id} className="table-row">
                      <div className="table-cell capsule-title">{capsule.title}</div>
                      <div className="table-cell">
                        <span className="type-badge">{capsule.type}</span>
                      </div>
                      <div className="table-cell">{capsule.date}</div>
                      <div className="table-cell">{capsule.likes}</div>
                      <div className="table-cell">{capsule.views}</div>
                      <div className="table-cell">
                        <div className="row-actions">
                          <button className="action-icon view-btn" title="View">
                            <Eye size={16} />
                          </button>
                          <button className="action-icon edit-btn" title="Edit">
                            <Edit2 size={16} />
                          </button>
                          <button className="action-icon delete-btn" title="Delete">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'memories' && (
              <div className="memories-content">
                <div className="content-header">
                  <h3 className="section-title">Memory Gallery</h3>
                  <button className="action-btn upload-btn">
                    <Upload size={18} />
                    Upload Memories
                  </button>
                </div>
                <div className="memories-grid">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <div key={num} className="memory-item">
                      <div 
                        className="memory-thumbnail"
                        style={{
                          backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&auto=format&fit=crop)`
                        }}
                      >
                        <div className="memory-overlay">
                          <button className="memory-action">
                            <Eye size={20} />
                          </button>
                          <button className="memory-action">
                            <Heart size={20} />
                          </button>
                          <button className="memory-action">
                            <Download size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="memory-info">
                        <span className="memory-date">Mar {num * 5}, 2024</span>
                        <span className="memory-likes">❤️ {num * 45}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="settings-content">
                <div className="settings-section">
                  <h3 className="section-title">Account Settings</h3>
                  <div className="settings-form">
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue={profileData.email}
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Password</label>
                      <div className="password-input">
                        <input 
                          type={showPassword ? "text" : "password"}
                          defaultValue="••••••••"
                          className="form-input"
                          placeholder="Enter new password"
                        />
                        <button 
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Two-Factor Authentication</label>
                      <div className="toggle-group">
                        <span>Require 2FA for login</span>
                        <label className="toggle-switch">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                        </label>
                      </div>
                    </div>
                    <button className="settings-save-btn">
                      <Save size={18} />
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className="settings-section">
                  <h3 className="section-title">Privacy Settings</h3>
                  <div className="privacy-options">
                    <div className="privacy-option">
                      <div className="option-info">
                        <Shield size={20} />
                        <div>
                          <h4>Profile Visibility</h4>
                          <p>Control who can see your profile and memories</p>
                        </div>
                      </div>
                      <select className="privacy-select">
                        <option>Public</option>
                        <option>Followers Only</option>
                        <option>Private</option>
                      </select>
                    </div>
                    <div className="privacy-option">
                      <div className="option-info">
                        <Bell size={20} />
                        <div>
                          <h4>Email Notifications</h4>
                          <p>Manage email alerts for memories and capsules</p>
                        </div>
                      </div>
                      <label className="toggle-switch">
                        <input type="checkbox" defaultChecked />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="settings-section danger-zone">
                  <h3 className="section-title">Danger Zone</h3>
                  <div className="danger-actions">
                    <button className="danger-btn export-btn">
                      <Download size={18} />
                      Export All Data
                    </button>
                    <button 
                      className="danger-btn delete-btn"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      <Trash2 size={18} />
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <h3 className="modal-title">Delete Account</h3>
            <p className="modal-description">
              Are you sure you want to delete your account? This action cannot be undone. 
              All your capsules, memories, and data will be permanently removed.
            </p>
            <div className="modal-actions">
              <button 
                className="modal-btn cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button 
                className="modal-btn confirm-btn"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;