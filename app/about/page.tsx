'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Globe, Shield, Users, Award, Zap } from 'lucide-react';
import { mockUser } from '@/lib/data';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Hospitality First',
      description: 'We believe in creating meaningful connections between hosts and guests through exceptional hospitality.',
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Building a worldwide community of travelers and hosts who share a passion for unique experiences.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Your safety and security are our top priorities, with verified listings and secure transactions.',
    },
    {
      icon: Users,
      title: 'Inclusive Travel',
      description: 'Making travel accessible and welcoming for everyone, regardless of background or budget.',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      bio: 'Former hospitality executive with 15+ years of experience in luxury travel.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      bio: 'Tech entrepreneur passionate about creating seamless user experiences.',
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Community',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Community builder focused on creating meaningful connections between travelers.',
    },
    {
      name: 'David Kim',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg',
      bio: 'Award-winning designer with a passion for intuitive and beautiful interfaces.',
    },
  ];

  const stats = [
    { number: '10M+', label: 'Happy Guests' },
    { number: '500K+', label: 'Unique Properties' },
    { number: '190+', label: 'Countries' },
    { number: '4.9', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen bg-almond">
      <Navbar isLoggedIn={true} user={mockUser} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate/10 to-muted-gold/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-slate/10 text-slate border-slate/20">About StayEase</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-text-base mb-6">
              Redefining Travel,{' '}
              <span className="bg-gradient-to-r from-slate to-muted-gold bg-clip-text text-transparent">
                One Stay at a Time
              </span>
            </h1>
            <p className="text-xl text-text-base/70 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to create a world where anyone can belong anywhere, 
              connecting people to unique travel experiences and local communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text-base mb-6">Our Story</h2>
              <div className="space-y-4 text-text-base/80 leading-relaxed">
                <p>
                  StayEase was born from a simple idea: travel should be about more than just finding a place to sleep. 
                  It should be about discovering new cultures, meeting incredible people, and creating memories that last a lifetime.
                </p>
                <p>
                  Founded in 2020 by a team of passionate travelers and hospitality experts, we set out to build a platform 
                  that connects adventurous guests with welcoming hosts around the world. What started as a small startup 
                  has grown into a global community of millions.
                </p>
                <p>
                  Today, we're proud to offer unique accommodations in over 190 countries, from cozy city apartments 
                  to remote mountain cabins, each with its own story and character.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-slate to-muted-gold rounded-2xl flex items-center justify-center">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-text-base mb-4">Our Values</h2>
            <p className="text-lg text-text-base/70 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the experiences we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-slate/10 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-slate to-muted-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-base mb-2">{value.title}</h3>
                        <p className="text-text-base/70 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-text-base mb-4">By the Numbers</h2>
            <p className="text-lg text-text-base/70">Our impact on the global travel community</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-slate mb-2">{stat.number}</div>
                <div className="text-text-base/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-text-base mb-4">Meet Our Team</h2>
            <p className="text-lg text-text-base/70 max-w-2xl mx-auto">
              The passionate individuals behind StayEase, working to make travel more accessible and meaningful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-slate/10 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-text-base mb-1">{member.name}</h3>
                    <p className="text-slate font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-text-base/70 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-slate/5 to-muted-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-slate to-muted-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-text-base mb-6">Our Mission</h2>
            <p className="text-xl text-text-base/80 max-w-4xl mx-auto leading-relaxed">
              To create a world where anyone can belong anywhere by providing healthy travel that is local, 
              authentic, diverse, inclusive and sustainable. We believe that travel should enrich both 
              guests and hosts, creating lasting connections and positive impact on local communities.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}