'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-almond flex items-center justify-center p-4">
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.div
          className="inline-flex items-center space-x-2 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-slate to-muted-gold rounded-lg flex items-center justify-center">
            <Home className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-slate">StayEase</span>
        </motion.div>

        {/* 404 Illustration */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-slate/10 to-muted-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-6xl">🏠</span>
          </div>
          <div className="text-8xl font-bold text-slate/20 mb-4">404</div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-text-base">Oops! Page Not Found</h1>
          <p className="text-text-base/70 leading-relaxed">
            It looks like this page has packed its bags and gone on vacation. 
            Don't worry, we'll help you find your way back to amazing stays!
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/">
            <Button className="bg-slate hover:bg-slate/90 w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/search">
            <Button variant="outline" className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Search Properties
            </Button>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          className="mt-12 pt-8 border-t border-slate/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-text-base/60 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-slate hover:text-slate/80 transition-colors">
              About Us
            </Link>
            <Link href="/help" className="text-slate hover:text-slate/80 transition-colors">
              Help Center
            </Link>
            <Link href="/contact" className="text-slate hover:text-slate/80 transition-colors">
              Contact Support
            </Link>
            <Link href="/dashboard" className="text-slate hover:text-slate/80 transition-colors">
              Host Dashboard
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}