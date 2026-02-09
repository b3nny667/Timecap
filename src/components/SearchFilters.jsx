import React, { useState } from 'react';
import { Calendar, MapPin, Search, Filter } from 'lucide-react';
import './SearchFilters.css';

function SearchFilters() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [memoryType, setMemoryType] = useState("");
  const [minDensity, setMinDensity] = useState("");

  const memoryTypes = [
    { label: "Proposals & Engagements", value: "proposals" },
    { label: "Creative Breakthroughs", value: "creative" },
    { label: "Family Reunions", value: "reunions" },
    { label: "Career Milestones", value: "career" },
    { label: "Personal Growth", value: "growth" },
    { label: "Healing Journeys", value: "healing" },
  ];

  const handleSearch = () => {
    console.log("Searching with:", { location, checkIn, checkOut, memoryType, minDensity });
  };

  const triggerDatePicker = (inputId) => {
    const input = document.getElementById(inputId);
    if (input) {
      input.showPicker ? input.showPicker() : input.focus();
    }
  };

  return (
    <div className="time-machine-search">
      <div className="search-header">
        <div className="header-content">
          <div>
            <h3 className="search-title">Time Machine</h3>
            <p className="search-subtitle">
              Discover spaces where meaningful moments became lasting memories
            </p>
          </div>
          <button className="advanced-filter">
            <Filter size={14} />
            Advanced
          </button>
        </div>
      </div>

      <div className="search-content">
        <div className="search-grid">
          <div className="search-field">
            <label className="field-label">
              <MapPin size={14} />
              Destination
            </label>
            <input
              type="text"
              placeholder="Kosovo, Balkans, Europe..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="date-grid">
            <div className="search-field">
              <label className="field-label">
                <Calendar size={14} />
                Check-in
              </label>
              <div className="date-input-wrapper">
                <input
                  id="checkin-date"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="search-input date-input"
                />
                <button 
                  className="calendar-trigger-btn"
                  onClick={() => triggerDatePicker('checkin-date')}
                  type="button"
                  aria-label="Open calendar"
                >
                  <Calendar size={16} />
                </button>
              </div>
            </div>
            
            <div className="search-field">
              <label className="field-label">
                <Calendar size={14} />
                Check-out
              </label>
              <div className="date-input-wrapper">
                <input
                  id="checkout-date"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="search-input date-input"
                />
                <button 
                  className="calendar-trigger-btn"
                  onClick={() => triggerDatePicker('checkout-date')}
                  type="button"
                  aria-label="Open calendar"
                >
                  <Calendar size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="search-grid">
          <div className="search-field">
            <label className="field-label">Memory Type</label>
            <select
              value={memoryType}
              onChange={(e) => setMemoryType(e.target.value)}
              className="search-select"
            >
              <option value="">All Memory Types</option>
              {memoryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="search-field">
            <label className="field-label">Minimum Memory Density</label>
            <div className="density-input-container">
              <input
                type="number"
                placeholder="70"
                value={minDensity}
                onChange={(e) => setMinDensity(e.target.value)}
                min="0"
                max="100"
                className="search-input density-input"
              />
              <span className="density-percent">%</span>
            </div>
          </div>
        </div>

        <div className="quick-filters-section">
          <p className="quick-filters-label">Quick Filters</p>
          <div className="quick-filters-grid">
            {memoryTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setMemoryType(type.value)}
                className={`quick-filter-btn ${memoryType === type.value ? 'active' : ''}`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="search-button"
        >
          <Search size={16} />
          SEARCH MEMORY JOURNEYS
        </button>
      </div>
    </div>
  );
}

export default SearchFilters;