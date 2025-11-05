'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Star, 
  MapPin, 
  Users, 
  Bed, 
  Bath, 
  Wifi, 
  Car, 
  Coffee, 
  Waves,
  CalendarIcon,
  Heart,
  Share,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { mockListings, mockUser } from '@/lib/data';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface ListingDetailClientProps {
  listingId: string;
}

export default function ListingDetailClient({ listingId }: ListingDetailClientProps) {
  const listing = mockListings.find(l => l.id === listingId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);

  if (!listing) {
    notFound();
  }

  const amenityIcons: { [key: string]: any } = {
    'WiFi': Wifi,
    'Kitchen': Coffee,
    'Parking': Car,
    'Pool': Waves,
    'Beach Access': Waves,
    'Ocean View': Waves,
  };

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const totalPrice = calculateNights() * listing.price;

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      toast.error('Please select check-in and check-out dates');
      return;
    }
    toast.success('Booking request sent! You will receive a confirmation email shortly.');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? listing.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-almond">
      <Navbar isLoggedIn={true} user={mockUser} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-text-base mb-2">{listing.title}</h1>
              <div className="flex items-center space-x-4 text-text-base/70">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-muted-gold text-muted-gold" />
                  <span>{listing.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{listing.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
          <Badge variant="secondary" className="bg-muted-gold/20 text-muted-gold">
            {listing.category}
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <motion.div
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Image
                src={listing.images[currentImageIndex]}
                alt={listing.title}
                fill
                className="object-cover"
              />
              
              {listing.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white/90 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-slate" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white/90 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-slate" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {listing.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Property Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-slate" />
                      <span>{listing.guests} guests</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="h-5 w-5 text-slate" />
                      <span>{listing.bedrooms} bedrooms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="h-5 w-5 text-slate" />
                      <span>{listing.bathrooms} bathrooms</span>
                    </div>
                  </div>
                  
                  <p className="text-text-base/80 leading-relaxed">{listing.description}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {listing.amenities.map((amenity) => {
                      const IconComponent = amenityIcons[amenity] || Coffee;
                      return (
                        <div key={amenity} className="flex items-center space-x-2">
                          <IconComponent className="h-5 w-5 text-slate" />
                          <span className="text-text-base">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Host Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Meet Your Host</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={listing.hostAvatar} />
                      <AvatarFallback>{listing.hostName[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-text-base">{listing.hostName}</h3>
                      <p className="text-text-base/70">{listing.hostBio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-text-base">${listing.price}</span>
                      <span className="text-text-base/60"> /night</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-muted-gold text-muted-gold" />
                      <span className="text-sm text-text-base/70">{listing.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Date Selection */}
                  <div className="grid grid-cols-2 gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, 'MMM dd') : 'Check-in'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, 'MMM dd') : 'Check-out'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) => date < new Date() || (checkIn ? date <= checkIn : false)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Guests */}
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full p-3 border border-slate/20 rounded-lg focus:outline-none focus:border-slate"
                  >
                    {Array.from({ length: listing.guests }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>

                  {/* Price Breakdown */}
                  {checkIn && checkOut && (
                    <div className="space-y-2 pt-4 border-t border-slate/10">
                      <div className="flex justify-between text-text-base/70">
                        <span>${listing.price} × {calculateNights()} nights</span>
                        <span>${totalPrice}</span>
                      </div>
                      <div className="flex justify-between text-text-base/70">
                        <span>Service fee</span>
                        <span>${Math.round(totalPrice * 0.1)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-text-base pt-2 border-t border-slate/10">
                        <span>Total</span>
                        <span>${totalPrice + Math.round(totalPrice * 0.1)}</span>
                      </div>
                    </div>
                  )}

                  <Button onClick={handleBooking} className="w-full bg-slate hover:bg-slate/90">
                    Reserve Now
                  </Button>

                  <p className="text-xs text-text-base/60 text-center">
                    You won't be charged yet
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

