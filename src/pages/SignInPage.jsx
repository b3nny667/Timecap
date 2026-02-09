// SignInPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn,
  Sparkles,
  Heart,
  Camera,
  Users,
  MapPin,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './SignInPage.css';

function SignInPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes - accept any email/password
      // In a real app, you would validate against a backend
      const userData = {
        email,
        name: email.split('@')[0], // Extract name from email
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=2F4538&color=fff&bold=true`,
        joinedDate: new Date().toISOString(),
        role: 'traveler',
        memoryCount: 0,
        capsuleCount: 0
      };
      
      // Login using context
      login(userData);
      
      // Show success message
      console.log('Login successful!');
      
      // Redirect to home
      navigate('/');
      
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // For demo - create a mock user based on provider
    const socialUser = {
      email: `${provider}@example.com`,
      name: provider === 'google' ? 'Google User' : 'Apple User',
      avatar: `https://ui-avatars.com/api/?name=${provider}&background=2F4538&color=fff`,
      joinedDate: new Date().toISOString(),
      role: 'traveler',
      memoryCount: 3,
      capsuleCount: 1,
      isSocial: true
    };
    
    login(socialUser);
    navigate('/');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        email,
        name: email.split('@')[0],
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=2F4538&color=fff&bold=true`,
        joinedDate: new Date().toISOString(),
        role: 'traveler',
        memoryCount: 0,
        capsuleCount: 0,
        isNewUser: true
      };
      
      login(userData);
      navigate('/');
      
    } catch (err) {
      setError('Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Memory cards for the background
  const memoryCards = [
    { 
      icon: <Heart size={20} />, 
      text: "She said yes at sunset!", 
      location: "Rugova Valley",
      type: "Proposal"
    },
    { 
      icon: <Sparkles size={20} />, 
      text: "Finished writing my novel here", 
      location: "Pristina Loft",
      type: "Creative Breakthrough"
    },
    { 
      icon: <Users size={20} />, 
      text: "Family reunion after 20 years", 
      location: "Gazivoda Lake",
      type: "Reunion"
    },
    { 
      icon: <Camera size={20} />, 
      text: "First date that changed everything", 
      location: "Peja Café",
      type: "First Date"
    },
  ];

  return (
    <div className="signin-reimagined">
      {/* Left Side - Animated Background */}
      <div className="signin-bg">
        {/* Floating capsules */}
        <div className="floating-capsules">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="capsule" style={{ 
              animationDelay: `${i * 2}s`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 15}%`
            }}>
              <div className="capsule-content">
                <Clock size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Memory Grid */}
        <div className="memory-grid">
          {memoryCards.map((card, index) => (
            <div 
              key={index} 
              className="memory-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="memory-icon">{card.icon}</div>
              <div className="memory-content">
                <p className="memory-text">"{card.text}"</p>
                <div className="memory-meta">
                  <div className="memory-location">
                    <MapPin size={12} />
                    <span>{card.location}</span>
                  </div>
                  <div className="memory-type">
                    <span className="type-badge">{card.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="bg-gradient"></div>

        {/* Background Quote */}
        <div className="background-quote">
          <p className="quote-text">"Travel through time and memory. Every space has a story waiting for you to continue it."</p>
        </div>
      </div>

      {/* Right Side - Minimal Form */}
      <div className="signin-minimal">
        {/* Close Button */}
        <button 
          className="close-btn"
          onClick={() => navigate('/')}
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Main Content */}
        <div className="minimal-content">
          {/* Brand */}
          <div className="brand-header">
            <div className="brand-logo">
              <Clock className="logo-spin" size={32} />
              <h1 className="brand-title">Timecap</h1>
            </div>
            <p className="brand-tagline">
              Where moments become memories
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-nav">
            <button 
              className={`tab-btn ${activeTab === 'signin' ? 'active' : ''}`}
              onClick={() => setActiveTab('signin')}
              disabled={isLoading}
            >
              Sign In
            </button>
            <button 
              className={`tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => setActiveTab('signup')}
              disabled={isLoading}
            >
              Sign Up
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form className="minimal-form" onSubmit={activeTab === 'signin' ? handleSubmit : handleSignUp}>
            <div className="form-group">
              <div className="input-container">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="minimal-input"
                  placeholder="Email address"
                  disabled={isLoading}
                  required
                />
                <div className="input-line"></div>
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <Lock className="input-icon" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="minimal-input"
                  placeholder="Password"
                  disabled={isLoading}
                  required
                  minLength={activeTab === 'signup' ? 6 : 1}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <div className="input-line"></div>
              </div>
            </div>

            {activeTab === 'signin' && (
              <div className="form-options">
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
            )}

            {activeTab === 'signup' && (
              <div className="password-hint">
                <span className="hint-icon">💡</span>
                <span className="hint-text">Password must be at least 6 characters</span>
              </div>
            )}

            <button
              type="submit"
              className="minimal-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <>
                  <LogIn size={18} />
                  <span>{activeTab === 'signin' ? 'Continue Journey' : 'Start Your Journey'}</span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="or-divider">
            <span>or continue with</span>
          </div>

          {/* Social Buttons */}
          <div className="social-buttons">
            <button 
              className="social-btn google"
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
            
            <button 
              className="social-btn apple"
              onClick={() => handleSocialLogin('apple')}
              disabled={isLoading}
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.31-2.33 1.05-3.11z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>

          {/* Terms */}
          <div className="terms-minimal">
            <p>
              By continuing, you agree to Timecap's{' '}
              <Link to="/terms">Terms of Service</Link> and{' '}
              <Link to="/privacy">Privacy Policy</Link>
            </p>
            {activeTab === 'signup' && (
              <p className="terms-note">
                Already have an account?{' '}
                <button 
                  className="switch-link"
                  onClick={() => setActiveTab('signin')}
                  type="button"
                >
                  Sign in here
                </button>
              </p>
            )}
          </div>

          {/* Stats Footer */}
          <div className="stats-footer">
            <div className="stat">
              <div className="stat-number">24K+</div>
              <div className="stat-label">Memories</div>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <div className="stat-number">2.4K+</div>
              <div className="stat-label">Hosts</div>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <div className="stat-number">156+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;