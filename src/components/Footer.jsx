
import React from 'react';
import { Clock, Heart, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <Clock className="clock-icon" />
              <span className="brand-name">Timecap</span>
            </div>
            <p className="brand-tagline">
              Preserving moments, one capsule at a time.
            </p>
            <div className="footer-newsletter">
              <h4 className="newsletter-title">Stay Updated</h4>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                />
                <button className="newsletter-button">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="column-title">Explore</h4>
              <ul className="footer-list">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/explore" className="footer-link">Explore Memories</a></li>
                <li><a href="/capsules" className="footer-link">Memory Capsules</a></li>
                <li><a href="/dashboard" className="footer-link">Dashboard</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="column-title">Host</h4>
              <ul className="footer-list">
                <li><a href="/host" className="footer-link">Become a Host</a></li>
                <li><a href="/host/guide" className="footer-link">Hosting Guide</a></li>
                <li><a href="/host/resources" className="footer-link">Host Resources</a></li>
                <li><a href="/host/earnings" className="footer-link">Earnings Calculator</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="column-title">Company</h4>
              <ul className="footer-list">
                <li><a href="/about" className="footer-link">Our Story</a></li>
                <li><a href="/blog" className="footer-link">Blog</a></li>
                <li><a href="/press" className="footer-link">Press</a></li>
                <li><a href="/careers" className="footer-link">Careers</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="column-title">Support</h4>
              <ul className="footer-list">
                <li><a href="/help" className="footer-link">Help Center</a></li>
                <li><a href="/safety" className="footer-link">Safety Center</a></li>
                <li><a href="/contact" className="footer-link">Contact Us</a></li>
                <li><a href="/terms" className="footer-link">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-left">
            <p className="copyright">
              © {currentYear} Timecap. Made with <Heart size={14} className="heart-icon" /> in Pristina, Kosovo.
            </p>
            <div className="footer-legal">
              <a href="/terms" className="legal-link">Terms of Service</a>
              <span className="legal-separator">•</span>
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <span className="legal-separator">•</span>
              <a href="/cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>

          <div className="footer-right">
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
            <div className="language-selector">
              <select className="language-select">
                <option value="en">English</option>
                <option value="sq">Shqip</option>
              
              </select>
            </div>
          </div>
        </div>

        {/* App Download */}
        <div className="footer-app">
          <div className="app-content">
            <div className="app-text">
              <h5 className="app-title">Download Timecap App</h5>
              <p className="app-subtitle">Create memories on the go</p>
            </div>
            <div className="app-buttons">
              <button className="app-button">
                <svg className="app-icon" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="app-button-text">
                  <span className="app-button-label">Download on the</span>
                  <span className="app-button-name">App Store</span>
                </div>
              </button>
              <button className="app-button">
                <svg className="app-icon" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="app-button-text">
                  <span className="app-button-label">Get it on</span>
                  <span className="app-button-name">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;