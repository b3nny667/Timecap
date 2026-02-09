
import React from 'react';
import './HowItWorks.css';
import { Map, Heart, Camera, Archive } from 'lucide-react';

const steps = [
  {
    icon: Map,
    title: "Discover Memory Rich Spaces",
    description: "Use our Time Machine search to find locations with high Memory Density places where proposals, breakthroughs, and reunions happened.",
  },
  {
    icon: Heart,
    title: "Book Your Memory Journey",
    description: "Choose a space that resonates with your story. Every booking contributes to the location's Memory Density score.",
  },
  {
    icon: Camera,
    title: "Create Your Moments",
    description: "Live your experience and capture photos and notes during your stay. These become part of your personal journey.",
  },
  {
    icon: Archive,
    title: "Preserve in Digital Capsules",
    description: "Your memories are permanently archived as Digital Capsules tied to the location and date, creating a living history.",
  },
];

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works-header">
        <h2 className="how-it-works-title">How Timecap Works</h2>
        <p className="how-it-works-subtitle">
          We're reimagining travel as Memory Journeys where every space tells a story and every stay adds to its legacy.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-content">
              <div className="step-icon-container">
                <step.icon className="step-icon" size={32} />
              </div>
              <div className="step-number">{index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="founder-card">
        <div className="founder-content">
          <p className="founder-title">Built in Kosovo 🇽🇰</p>
          <p className="founder-description">
            Timecap was founded by a 19 year old developer who believes travel should be about collecting memories, not just photos printed in photo album.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
