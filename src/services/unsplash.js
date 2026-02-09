// src/services/unsplash.js
const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = process.env.REACT_APP_UNSPLASH_API_URL;

// Fetch curated photos (free, no search limit issues)
export async function fetchPropertyPhotos(count = 20) {
  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/photos/curated?per_page=${count}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    
    if (!response.ok) throw new Error('Unsplash API failed');
    
    const data = await response.json();
    return data.map(photo => ({
      id: photo.id,
      url: photo.urls.regular,
      alt: photo.alt_description || 'Property image',
      photographer: photo.user.name,
      location: photo.location?.title || 'Unknown location'
    }));
  } catch (error) {
    console.error('Unsplash Error:', error);
    return getFallbackImages(); // Return your existing mock images
  }
}

// Search for specific types of photos (limited free usage)
export async function searchPropertyPhotos(query, count = 10) {
  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/search/photos?query=${query}&per_page=${count}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    
    if (!response.ok) throw new Error('Unsplash Search failed');
    
    const data = await response.json();
    return data.results.map(photo => ({
      id: photo.id,
      url: photo.urls.regular,
      alt: photo.alt_description || query,
      photographer: photo.user.name
    }));
  } catch (error) {
    console.error('Unsplash Search Error:', error);
    return [];
  }
}

// Fallback images from your existing mock data
function getFallbackImages() {
  return [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      alt: "Modern loft interior",
      photographer: "Unsplash",
      location: "Prishtina, Kosovo"
    },
    // Add more fallbacks from your existing mock images
  ];
}