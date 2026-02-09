// Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Clock, Menu, X, User, LogOut, Settings, Home, Archive, Heart, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const userButtonRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isUserDropdownOpen) setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsUserDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeAllMenus();
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target) &&
          userButtonRef.current && !userButtonRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    if (isUserDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  // User avatar component
  const UserAvatar = ({ size = 'md', onClick }) => {
    const sizeClass = size === 'sm' ? 'small' : '';
    const avatarSize = size === 'sm' ? 32 : 36;
    
    return (
      <div 
        className={`user-avatar ${sizeClass}`}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        {user?.avatar ? (
          <img src={user.avatar} alt={user.name || 'User'} />
        ) : (
          <span className="user-initials">{user?.initials || 'U'}</span>
        )}
      </div>
    );
  };

  // Desktop User Dropdown
  const DesktopUserDropdown = () => (
    <div className="user-dropdown-container" ref={userDropdownRef}>
      <button 
        ref={userButtonRef}
        className="user-dropdown-btn"
        onClick={toggleUserDropdown}
        aria-label="User menu"
        aria-expanded={isUserDropdownOpen}
      >
        <UserAvatar />
        <span className="user-name">
          {user?.name?.split(' ')[0] || 'User'}
        </span>
        <div className={`dropdown-arrow ${isUserDropdownOpen ? 'open' : ''}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      
      {isUserDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <UserAvatar />
            <div className="user-info">
              <div className="user-display-name">{user?.name || 'User'}</div>
              <div className="user-email">{user?.email || 'user@example.com'}</div>
            </div>
          </div>
          
          <div className="dropdown-divider"></div>
          
          <button 
            className="dropdown-item"
            onClick={() => {
              navigate('/dashboard');
              closeAllMenus();
            }}
          >
            <Home size={18} />
            <span>Dashboard</span>
          </button>
          
          <button 
            className="dropdown-item"
            onClick={() => {
              navigate('/capsules');
              closeAllMenus();
            }}
          >
            <Archive size={18} />
            <span>My Capsules</span>
          </button>
          
          <button 
            className="dropdown-item"
            onClick={() => {
              navigate('/host');
              closeAllMenus();
            }}
          >
            <Heart size={18} />
            <span>Become a Host</span>
          </button>
          
          <div className="dropdown-divider"></div>
          
          <button 
            className="dropdown-item"
            onClick={() => {
              navigate('/profile');
              closeAllMenus();
            }}
          >
            <Settings size={18} />
            <span>Profile Settings</span>
          </button>
          
          <button 
            className="dropdown-item logout"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );

  // Mobile User Button
  const MobileUserButton = () => (
    <div className="mobile-user-container">
      <button 
        className="mobile-user-btn"
        onClick={() => {
          navigate('/dashboard');
          closeAllMenus();
        }}
        aria-label="Go to dashboard"
      >
        <UserAvatar size="sm" />
        <span className="mobile-user-name">
          {user?.name?.split(' ')[0] || 'User'}
        </span>
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <header className="desktop-navbar">
        <div className="desktop-nav-container">
          {/* Left: Logo */}
          <div className="nav-left">
            <Link to="/" className="logo-container" onClick={closeAllMenus}>
              <Clock className="clock-icon" size={24} />
              <span className="brand-name">Timecap</span>
            </Link>
          </div>

          {/* Center: Pages */}
          <nav className="nav-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeAllMenus}
            >
              Explore
            </NavLink>
            <NavLink 
              to="/capsules" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeAllMenus}
            >
              Memory Capsules
            </NavLink>
            <NavLink 
              to="/host" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeAllMenus}
            >
              Become a Host
            </NavLink>
          </nav>

          {/* Right: Auth Buttons or User Dropdown */}
          <div className="nav-right">
            {user ? (
              <DesktopUserDropdown />
            ) : (
              <>
                <Link to="/signin" className="sign-in-btn" onClick={closeAllMenus}>
                  Sign In
                </Link>
                <button 
                  className="get-started-btn" 
                  onClick={() => {
                    navigate('/signin');
                    closeAllMenus();
                  }}
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="mobile-navbar">
        <div className="mobile-nav-container">
          {/* Left: Logo */}
          <Link to="/" className="mobile-logo-container" onClick={closeAllMenus}>
            <Clock className="mobile-clock-icon" size={24} />
            <span className="mobile-brand-name">Timecap</span>
          </Link>

          {/* Right: Menu or User Button */}
          <div className="mobile-nav-right">
            {user ? (
              <MobileUserButton />
            ) : (
              <button 
                className="mobile-auth-btn"
                onClick={() => {
                  navigate('/signin');
                  closeAllMenus();
                }}
                aria-label="Sign in"
              >
                <User size={20} />
              </button>
            )}
            
            <button 
              className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="hamburger-icon">
                <span className="hamburger-line line1"></span>
                <span className="hamburger-line line2"></span>
                <span className="hamburger-line line3"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <button 
          className="mobile-menu-close"
          onClick={closeAllMenus}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="mobile-menu-content">
          {/* User Info (if logged in) */}
          {user && (
            <div className="mobile-user-info">
              <UserAvatar size="md" />
              <div className="mobile-user-details">
                <div className="mobile-user-display-name">{user?.name || 'User'}</div>
                <div className="mobile-user-email">{user?.email || 'user@example.com'}</div>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="mobile-nav-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeAllMenus}
            >
              <Home size={20} />
              <span>Explore</span>
            </NavLink>
            <NavLink 
              to="/capsules" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeAllMenus}
            >
              <Archive size={20} />
              <span>Memory Capsules</span>
            </NavLink>
            <NavLink 
              to="/host" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeAllMenus}
            >
              <Heart size={20} />
              <span>Become a Host</span>
            </NavLink>
            
            {user && (
              <>
                <NavLink 
                  to="/dashboard" 
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeAllMenus}
                >
                  <Home size={20} />
                  <span>Dashboard</span>
                </NavLink>
                <NavLink 
                  to="/profile" 
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeAllMenus}
                >
                  <Settings size={20} />
                  <span>Profile Settings</span>
                </NavLink>
              </>
            )}
          </nav>

          {/* Mobile Auth Section */}
          <div className="mobile-auth-section">
            {user ? (
              <>
                <div className="mobile-user-stats">
                  <div className="user-stat">
                    <span className="stat-number">{user?.capsuleCount || 0}</span>
                    <span className="stat-label">Capsules</span>
                  </div>
                  <div className="user-stat">
                    <span className="stat-number">{user?.memoryCount || 0}</span>
                    <span className="stat-label">Memories</span>
                  </div>
                </div>
                <button 
                  className="mobile-signin-btn logout"
                  onClick={handleLogout}
                >
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/signin" 
                  className="mobile-signin-btn"
                  onClick={closeAllMenus}
                >
                  <User size={20} />
                  <span>Sign In</span>
                </Link>
                <button 
                  className="mobile-getstarted-btn"
                  onClick={() => {
                    navigate('/signin');
                    closeAllMenus();
                  }}
                >
                  <Heart size={20} />
                  <span>Get Started</span>
                </button>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="mobile-menu-footer">
            <p className="mobile-copyright">
              © {new Date().getFullYear()} Timecap
            </p>
            <div className="mobile-footer-links">
              <Link to="/terms" onClick={closeAllMenus}>Terms</Link>
              <Link to="/privacy" onClick={closeAllMenus}>Privacy</Link>
              <Link to="/help" onClick={closeAllMenus}>Help</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={closeAllMenus}
        />
      )}
    </>
  );
}

export default Navbar;