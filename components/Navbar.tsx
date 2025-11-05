'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Menu, User, Home, Building, Calendar, Settings, LogOut } from 'lucide-react';

interface NavbarProps {
  isLoggedIn?: boolean;
  user?: {
    name: string;
    avatar: string;
  };
}

export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-slate to-muted-gold rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="h-5 w-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-slate">StayEase</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <motion.div
              className={`relative w-full transition-all duration-300 ${
                isSearchFocused ? 'scale-105' : ''
              }`}
            >
              <input
                type="text"
                placeholder="Where would you like to stay?"
                className="w-full pl-10 pr-4 py-2 border border-slate/20 rounded-full focus:outline-none focus:border-slate focus:ring-2 focus:ring-slate/20 transition-all duration-200"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate/60" />
            </motion.div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Link href="/search">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Search
              </Button>
            </Link>
            
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Host
              </Button>
            </Link>

            {/* User Menu */}
            {isLoggedIn && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    className="flex items-center space-x-2 p-2 rounded-full border border-slate/20 hover:shadow-md transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Menu className="h-4 w-4 text-slate" />
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/bookings" className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>My Bookings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span>Host Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-2 text-soft-red">
                    <LogOut className="h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-slate hover:bg-slate/90">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}