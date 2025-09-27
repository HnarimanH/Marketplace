import { useState, useEffect } from "react";

import  fetchUnsplashImage  from "../miniComponents/utils/fetchUnsplash.js";
export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const initialProducts = [
  { name: "Laptop", description: "High-performance laptop", price: 1200, location: "New York", category: "electronics", query: "laptop" },
  { name: "Smartphone", description: "Latest model smartphone", price: 800, location: "San Francisco", category: "electronics", query: "smartphone" },
  { name: "Bicycle", description: "Mountain bike for off-road adventures", price: 350, location: "Los Angeles", category: "sports", query: "bicycle" },
  { name: "Book", description: "Mystery novel", price: 20, location: "Chicago", category: "books", query: "book" },
  { name: "Headphones", description: "Noise-cancelling headphones", price: 200, location: "Berlin", category: "electronics", query: "headphones" },
  { name: "Coffee Maker", description: "Automatic coffee machine", price: 150, location: "Paris", category: "appliances", query: "coffee machine" },
  { name: "Gaming Chair", description: "Ergonomic gaming chair", price: 300, location: "Tokyo", category: "furniture", query: "gaming chair" },
  { name: "Desk Lamp", description: "LED desk lamp", price: 40, location: "London", category: "furniture", query: "desk lamp" },
  { name: "Camera", description: "DSLR camera for photography", price: 900, location: "Los Angeles", category: "electronics", query: "camera" },
  { name: "Sneakers", description: "Running shoes", price: 120, location: "New York", category: "fashion", query: "sneakers" },
  { name: "Backpack", description: "Travel backpack", price: 80, location: "San Francisco", category: "fashion", query: "backpack" },
  { name: "Watch", description: "Smartwatch with fitness tracking", price: 250, location: "Berlin", category: "electronics", query: "smartwatch" },
  { name: "Tablet", description: "10-inch tablet for work and play", price: 400, location: "Paris", category: "electronics", query: "tablet" },
  { name: "Water Bottle", description: "Insulated stainless steel", price: 25, location: "Chicago", category: "sports", query: "water bottle" },
  { name: "Sunglasses", description: "Polarized sunglasses", price: 60, location: "Miami", category: "fashion", query: "sunglasses" },
  { name: "Guitar", description: "Acoustic guitar", price: 500, location: "Nashville", category: "music", query: "guitar" },
  { name: "Keyboard", description: "Mechanical keyboard", price: 120, location: "Tokyo", category: "electronics", query: "mechanical keyboard" },
  { name: "Microwave", description: "Compact microwave oven", price: 100, location: "London", category: "appliances", query: "microwave" },
  { name: "Yoga Mat", description: "Non-slip exercise mat", price: 35, location: "Los Angeles", category: "sports", query: "yoga mat" },
  { name: "Lamp", description: "Decorative table lamp", price: 55, location: "Paris", category: "furniture", query: "lamp" },
  { name: "Electric Kettle", description: "Fast boiling kettle", price: 45, location: "New York", category: "appliances", query: "electric kettle" },
  { name: "Jacket", description: "Winter jacket", price: 200, location: "Berlin", category: "fashion", query: "jacket" },
  { name: "Bluetooth Speaker", description: "Portable speaker", price: 150, location: "San Francisco", category: "electronics", query: "bluetooth speaker" },
  { name: "Tent", description: "Camping tent for 2 people", price: 180, location: "Los Angeles", category: "sports", query: "tent" },
  { name: "Gaming Laptop", description: "RTX-powered beast for gaming", price: 1800, location: "Los Angeles", category: "electronics", query: "gaming laptop" },
  { name: "Ultrabook", description: "Slim lightweight laptop for travel", price: 1100, location: "London", category: "electronics", query: "ultrabook" },
  { name: "2-in-1 Laptop", description: "Convertible touchscreen laptop", price: 950, location: "Chicago", category: "electronics", query: "2-in-1 laptop" },
  { name: "Desktop PC", description: "Custom-built desktop for work", price: 1400, location: "Berlin", category: "electronics", query: "desktop pc" },
  { name: "Gaming Desktop", description: "RGB tower with liquid cooling", price: 2200, location: "Tokyo", category: "electronics", query: "gaming desktop" },
  { name: "Mini PC", description: "Compact PC for everyday use", price: 500, location: "New York", category: "electronics", query: "mini pc" },
  { name: "iPhone 15", description: "Apple flagship smartphone", price: 1200, location: "Paris", category: "electronics", query: "iphone 15" },
  { name: "Samsung Galaxy S24", description: "Latest Android flagship", price: 1100, location: "San Francisco", category: "electronics", query: "samsung galaxy" },
  { name: "Google Pixel 8", description: "Pure Android experience", price: 900, location: "Los Angeles", category: "electronics", query: "google pixel" },
  { name: "OnePlus 12", description: "Performance-focused Android", price: 800, location: "Berlin", category: "electronics", query: "oneplus" },
  { name: "Gaming Monitor", description: "144Hz curved monitor", price: 400, location: "Chicago", category: "electronics", query: "gaming monitor" },
  { name: "Mechanical Gaming Keyboard", description: "RGB backlit mechanical keyboard", price: 150, location: "London", category: "electronics", query: "gaming keyboard" },
  { name: "Wireless Mouse", description: "Ergonomic wireless mouse", price: 60, location: "Paris", category: "electronics", query: "wireless mouse" },
  { name: "Laptop Cooling Pad", description: "Keeps laptops from overheating", price: 45, location: "Tokyo", category: "electronics", query: "cooling pad" },
  { name: "External SSD", description: "1TB fast external drive", price: 180, location: "New York", category: "electronics", query: "external ssd" },
  { name: "Smartwatch", description: "Wearable companion for your phone", price: 300, location: "Berlin", category: "electronics", query: "smartwatch" },
  { name: "Tablet Pro", description: "Large tablet for work and media", price: 850, location: "Los Angeles", category: "electronics", query: "tablet pro" },
  { name: "VR Headset", description: "Immersive virtual reality headset", price: 600, location: "San Francisco", category: "electronics", query: "vr headset" }
];

    async function loadImages() {
      const productsWithImages = await Promise.all(
        initialProducts.map(async (p) => ({
          ...p,
          img: await fetchUnsplashImage(p.query),
        }))
      );
      setProducts(productsWithImages);
    }

    loadImages();
  }, []);

  return products;
}