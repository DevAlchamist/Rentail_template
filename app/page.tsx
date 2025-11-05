'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { Search, MapPin, Calendar, Users, Star, Award, Shield, Heart } from 'lucide-react';
import { mockListings, mockUser } from '@/lib/data';

export default function Home() {
  const featuredListings = mockListings.slice(0, 6);

  return (
    <div className="min-h-screen bg-almond">
      <Navbar isLoggedIn={true} user={mockUser} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
            alt="Beautiful vacation rental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate/40 to-transparent" />
        </div>
        
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find Your Stay,{' '}
            <span className="bg-gradient-to-r from-muted-gold to-soft-green bg-clip-text text-transparent">
              Your Way
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover unique places to stay around the world, from cozy cabins to luxury villas
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/search">
              <Button size="lg" className="bg-slate hover:bg-slate/90 text-white px-8 py-3">
                <Search className="mr-2 h-5 w-5" />
                Explore Listings
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3">
                Become a Host
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Search */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-slate/5 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-text-base mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Where
                </label>
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="w-full p-3 border border-slate/20 rounded-lg focus:outline-none focus:border-slate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-base mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Check in
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-slate/20 rounded-lg focus:outline-none focus:border-slate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-base mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Check out
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-slate/20 rounded-lg focus:outline-none focus:border-slate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-base mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Guests
                </label>
                <div className="flex">
                  <select className="flex-1 p-3 border border-slate/20 rounded-l-lg focus:outline-none focus:border-slate">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4+ guests</option>
                  </select>
                  <Link href="/search">
                    <Button className="bg-slate hover:bg-slate/90 px-6 py-3 rounded-l-none">
                      <Search className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-base mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-text-base/70 max-w-2xl mx-auto">
              Handpicked properties that offer exceptional experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing, index) => (
              <ListingCard key={listing.id} listing={listing} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/search">
              <Button size="lg" variant="outline" className="border-slate text-slate hover:bg-slate hover:text-white">
                View All Properties
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-base mb-4">
              Why Choose StayEase?
            </h2>
            <p className="text-lg text-text-base/70 max-w-2xl mx-auto">
              We make finding and booking your perfect stay simple and secure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Verified Properties',
                description: 'Every listing is verified by our team to ensure quality and authenticity',
              },
              {
                icon: Shield,
                title: 'Secure Booking',
                description: 'Your payments are protected with bank-level security and encryption',
              },
              {
                icon: Heart,
                title: '24/7 Support',
                description: 'Our customer support team is always here to help you',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-slate to-muted-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-base mb-2">{feature.title}</h3>
                <p className="text-text-base/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-base mb-4">
              What Our Guests Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                location: 'San Francisco, CA',
                review: 'Amazing experience! The cabin was exactly as described and the host was incredibly helpful.',
                rating: 5,
                avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
              },
              {
                name: 'Michael Torres',
                location: 'Austin, TX',
                review: 'Perfect location and beautiful property. Will definitely book again!',
                rating: 5,
                avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
              },
              {
                name: 'Emily Johnson',
                location: 'Denver, CO',
                review: 'The booking process was so smooth and the place exceeded our expectations.',
                rating: 5,
                avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-text-base">{testimonial.name}</h4>
                    <p className="text-sm text-text-base/60">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-muted-gold text-muted-gold" />
                  ))}
                </div>
                <p className="text-text-base/80">"{testimonial.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}