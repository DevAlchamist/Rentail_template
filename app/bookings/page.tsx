'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users, Star, Clock, CheckCircle, XCircle } from 'lucide-react';
import { mockBookings, mockUser } from '@/lib/data';
import { toast } from 'sonner';

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingBookings = mockBookings.filter(booking => booking.status === 'upcoming');
  const completedBookings = mockBookings.filter(booking => booking.status === 'completed');
  const cancelledBookings = mockBookings.filter(booking => booking.status === 'cancelled');

  const handleCancelBooking = (bookingId: string) => {
    toast.success('Booking cancelled successfully');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-muted-gold/20 text-muted-gold';
      case 'completed':
        return 'bg-soft-green/20 text-soft-green';
      case 'cancelled':
        return 'bg-soft-red/20 text-soft-red';
      default:
        return 'bg-slate/20 text-slate';
    }
  };

  const BookingCard = ({ booking }: { booking: typeof mockBookings[0] }) => (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="flex">
        <div className="relative w-48 h-32">
          <Image
            src={booking.listingImage}
            alt={booking.listingTitle}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-text-base">{booking.listingTitle}</h3>
            <Badge className={`${getStatusColor(booking.status)} border-0`}>
              <span className="flex items-center space-x-1">
                {getStatusIcon(booking.status)}
                <span className="capitalize">{booking.status}</span>
              </span>
            </Badge>
          </div>
          
          <div className="space-y-2 text-sm text-text-base/70">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{booking.checkIn} - {booking.checkOut}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>{booking.guests} guests</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-lg font-bold text-text-base">${booking.totalPrice}</span>
              <span className="text-sm text-text-base/60"> total</span>
            </div>
            
            <div className="flex space-x-2">
              {booking.status === 'upcoming' && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCancelBooking(booking.id)}
                  className="text-soft-red hover:text-soft-red/80"
                >
                  Cancel
                </Button>
              )}
              {booking.status === 'completed' && (
                <Button variant="outline" size="sm">
                  Leave Review
                </Button>
              )}
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

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
          <h1 className="text-3xl font-bold text-text-base mb-2">My Bookings</h1>
          <p className="text-text-base/70">Manage your past and upcoming stays</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">
                Upcoming ({upcomingBookings.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedBookings.length})
              </TabsTrigger>
              <TabsTrigger value="cancelled">
                Cancelled ({cancelledBookings.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6 mt-6">
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map((booking, index) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <BookingCard booking={booking} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-24 h-24 bg-slate/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-12 w-12 text-slate/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-base mb-2">No upcoming bookings</h3>
                  <p className="text-text-base/60 mb-4">Start planning your next adventure!</p>
                  <Button className="bg-slate hover:bg-slate/90">
                    Explore Properties
                  </Button>
                </motion.div>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6 mt-6">
              {completedBookings.length > 0 ? (
                <div className="space-y-4">
                  {completedBookings.map((booking, index) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <BookingCard booking={booking} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-24 h-24 bg-slate/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-12 w-12 text-slate/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-base mb-2">No completed stays</h3>
                  <p className="text-text-base/60">Your travel history will appear here</p>
                </motion.div>
              )}
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-6 mt-6">
              {cancelledBookings.length > 0 ? (
                <div className="space-y-4">
                  {cancelledBookings.map((booking, index) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <BookingCard booking={booking} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-24 h-24 bg-slate/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="h-12 w-12 text-slate/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-base mb-2">No cancelled bookings</h3>
                  <p className="text-text-base/60">Cancelled reservations will appear here</p>
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}