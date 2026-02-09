// src/utils/propertyGenerator.js
import { fetchPropertyPhotos } from '../services/unsplash';

// Property templates matching Timecap's vibe
const PROPERTY_TEMPLATES = [
  {
    type: "entire-loft",
    tags: ["Modern", "City View", "Minimalist"],
    perfectFor: ["Birthdays", "Anniversaries", "Photo Shoots"]
  },
  {
    type: "cozy-cottage",
    tags: ["Rustic", "Garden", "Fireplace"],
    perfectFor: ["Romantic Getaways", "Quiet Retreats", "Writing"]
  },
  {
    type: "art-studio",
    tags: ["Creative", "Bright", "Spacious"],
    perfectFor: ["Creative Work", "Art Projects", "Workshops"]
  },
  {
    type: "mountain-cabin",
    tags: ["Nature", "Secluded", "Adventure"],
    perfectFor: ["Adventures", "Group Getaways", "Nature Lovers"]
  }
];

// Generate realistic property data
function generatePropertyData(photo, index) {
  const template = PROPERTY_TEMPLATES[index % PROPERTY_TEMPLATES.length];
  const cities = ["Prishtina", "Tirana", "Prizren", "Ohrid", "Skopje", "Peja"];
  const hosts = ["Alex M.", "Maya T.", "David K.", "Sarah J.", "Omar F.", "Elena P."];
  
  return {
    id: index + 1,
    title: generateTitle(template.type, photo.location),
    host: hosts[Math.floor(Math.random() * hosts.length)],
    location: `${photo.location || cities[Math.floor(Math.random() * cities.length)]}, Kosovo`,
    price: Math.floor(Math.random() * 150) + 50,
    rating: (Math.random() * 0.5 + 4.5).toFixed(2),
    reviewCount: Math.floor(Math.random() * 200) + 50,
    image: photo.url,
    type: template.type,
    memories: Math.floor(Math.random() * 100),
    perfectFor: template.perfectFor,
    capsules: generateCapsules(),
    tags: template.tags
  };
}

function generateTitle(type, location) {
  const adjectives = ["Sunset", "Cozy", "Modern", "Artistic", "Minimalist", "Vintage", "Luxury"];
  const nouns = ["Loft", "Studio", "Cabin", "Retreat", "Hideaway", "Sanctuary", "Nest"];
  
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `${adj} ${type.replace('entire-', '').replace('-', ' ')} ${noun}`;
}

function generateCapsules() {
  const users = ["Emma", "Leo", "Sam", "Team", "BookClub", "Couple"];
  const texts = [
    "Best birthday ever!",
    "Proposed here - she said yes!",
    "Wrote my novel here!",
    "Company retreat - amazing!",
    "Monthly meetings here!",
    "First anniversary - perfect!"
  ];
  
  if (Math.random() > 0.5) {
    return [{
      user: users[Math.floor(Math.random() * users.length)],
      text: texts[Math.floor(Math.random() * texts.length)],
      date: "2024-" + (Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0') + "-" + 
            (Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0')
    }];
  }
  return [];
}

// Main function to get properties with Unsplash images
export async function generateProperties(count = 12) {
  try {
    const photos = await fetchPropertyPhotos(count);
    
    return photos.map((photo, index) => 
      generatePropertyData(photo, index)
    );
  } catch (error) {
    console.error('Property generation failed:', error);
    return getMockProperties(); // Fallback to your existing mocks
  }
}

// Your existing mock data as fallback
function getMockProperties() {
  return [/* Paste your current mockProperties array here */];
}