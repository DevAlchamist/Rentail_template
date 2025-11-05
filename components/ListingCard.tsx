'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Listing } from '@/lib/data';

interface ListingCardProps {
  listing: Listing;
  index?: number;
}

export default function ListingCard({ listing, index = 0 }: ListingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="overflow-hidden border-slate/10 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.images[0]}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <motion.button
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="h-4 w-4 text-slate" />
          </motion.button>
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-slate">
            {listing.category}
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-text-base line-clamp-1">
                {listing.title}
              </h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-muted-gold text-muted-gold" />
                <span className="text-sm text-text-base/70">{listing.rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-text-base/60">{listing.location}</p>
            
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-lg font-bold text-text-base">${listing.price}</span>
                <span className="text-sm text-text-base/60"> /night</span>
              </div>
              
              <Link href={`/listings/${listing.id}`}>
                <Button size="sm" className="bg-slate hover:bg-slate/90">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}