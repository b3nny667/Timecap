// context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on initial load
    const storedUser = localStorage.getItem('timecap_user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('timecap_user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const userWithDefaults = {
      ...userData,
      name: userData.name || userData.email?.split('@')[0] || 'User',
      initials: userData.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U',
    };
    
    setUser(userWithDefaults);
    localStorage.setItem('timecap_user', JSON.stringify(userWithDefaults));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('timecap_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};