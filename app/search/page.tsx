'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import SearchFilters from '@/components/SearchFilters';
import { mockListings, mockUser } from '@/lib/data';
import type { Listing } from '@/lib/data';

interface SearchFilters {
  location: string;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  guests: number;
  priceRange: [number, number];
  category: string;
}

export default function SearchPage() {
  const [filteredListings, setFilteredListings] = useState<Listing[]>(mockListings);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (filters: SearchFilters) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let filtered = mockListings.filter((listing) => {
        // Location filter
        if (filters.location && !listing.location.toLowerCase().includes(filters.location.toLowerCase())) {
          return false;
        }
        
        // Price filter
        if (listing.price < filters.priceRange[0] || listing.price > filters.priceRange[1]) {
          return false;
        }
        
        // Category filter
        if (filters.category !== 'All' && listing.category !== filters.category) {
          return false;
        }
        
        // Guests filter
        if (listing.guests < filters.guests) {
          return false;
        }
        
        return true;
      });
      
      setFilteredListings(filtered);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-almond">
      <Navbar isLoggedIn={true} user={mockUser} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-text-base mb-2">Search Properties</h1>
          <p className="text-text-base/70">Find your perfect stay from {mockListings.length} unique properties</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters onSearch={handleSearch} />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <motion.div
              className="mb-6 flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="text-text-base/70">
                {isLoading ? 'Searching...' : `${filteredListings.length} properties found`}
              </p>
              
              <select className="px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:border-slate">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Most Popular</option>
              </select>
            </motion.div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-slate/10 aspect-[4/3] rounded-lg mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-slate/10 rounded w-3/4"></div>
                      <div className="h-4 bg-slate/10 rounded w-1/2"></div>
                      <div className="h-4 bg-slate/10 rounded w-1/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredListings.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {filteredListings.map((listing, index) => (
                  <ListingCard key={listing.id} listing={listing} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-24 h-24 bg-slate/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-text-base mb-2">No properties found</h3>
                <p className="text-text-base/60 mb-4">Try adjusting your search filters</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}