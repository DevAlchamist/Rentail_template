'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  DollarSign,
  Users,
  Home,
  Building,
  Upload,
  MapPin,
  Star,
} from 'lucide-react';
import { mockListings, mockUser, categories } from '@/lib/data';
import { toast } from 'sonner';

export default function HostDashboard() {
  const [activeTab, setActiveTab] = useState('listings');
  const [showAddListing, setShowAddListing] = useState(false);
  const [newListing, setNewListing] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    category: '',
    bedrooms: '',
    bathrooms: '',
    guests: '',
    amenities: [] as string[],
  });

  // Filter listings to show only user's listings (mock - show first 3)
  const userListings = mockListings.slice(0, 3);

  const handleAddListing = () => {
    // Validate form
    if (!newListing.title || !newListing.location || !newListing.price) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Listing added successfully!');
    setShowAddListing(false);
    setNewListing({
      title: '',
      description: '',
      location: '',
      price: '',
      category: '',
      bedrooms: '',
      bathrooms: '',
      guests: '',
      amenities: [],
    });
  };

  const handleDeleteListing = (id: string) => {
    toast.success('Listing deleted successfully');
  };

  const mockBookings = [
    {
      id: '1',
      listing: 'Cozy Mountain Cabin',
      guest: 'Sarah Johnson',
      checkIn: '2024-02-15',
      checkOut: '2024-02-18',
      amount: 750,
      status: 'confirmed',
    },
    {
      id: '2',
      listing: 'Downtown Loft',
      guest: 'Mike Chen',
      checkIn: '2024-02-20',
      checkOut: '2024-02-22',
      amount: 360,
      status: 'pending',
    },
  ];

  const stats = [
    {
      title: 'Total Bookings',
      value: '24',
      change: '+12%',
      icon: Calendar,
    },
    {
      title: 'Monthly Revenue',
      value: '$3,420',
      change: '+8%',
      icon: DollarSign,
    },
    {
      title: 'Active Listings',
      value: '3',
      change: '0%',
      icon: Building,
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
    },
  ];

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
          <h1 className="text-3xl font-bold text-text-base mb-2">Host Dashboard</h1>
          <p className="text-text-base/70">Manage your listings and bookings</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-base/60">{stat.title}</p>
                      <p className="text-2xl font-bold text-text-base">{stat.value}</p>
                      <p className="text-sm text-soft-green">{stat.change} from last month</p>
                    </div>
                    <div className="w-12 h-12 bg-slate/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-slate" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Listings Tab */}
            <TabsContent value="listings" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-text-base">Your Properties</h2>
                <Button
                  onClick={() => setShowAddListing(true)}
                  className="bg-slate hover:bg-slate/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Listing
                </Button>
              </div>

              {showAddListing && (
                <Card className="border-slate/20">
                  <CardHeader>
                    <CardTitle>Add New Listing</CardTitle>
                    <CardDescription>Create a new property listing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Property Title *</Label>
                        <Input
                          id="title"
                          placeholder="Beautiful lakeside cabin"
                          value={newListing.title}
                          onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location *</Label>
                        <Input
                          id="location"
                          placeholder="Aspen, Colorado"
                          value={newListing.location}
                          onChange={(e) => setNewListing({ ...newListing, location: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your property..."
                        value={newListing.description}
                        onChange={(e) => setNewListing({ ...newListing, description: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="price">Price per night *</Label>
                        <Input
                          id="price"
                          type="number"
                          placeholder="150"
                          value={newListing.price}
                          onChange={(e) => setNewListing({ ...newListing, price: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select value={newListing.category} onValueChange={(value) => setNewListing({ ...newListing, category: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.filter(cat => cat !== 'All').map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          placeholder="2"
                          value={newListing.bedrooms}
                          onChange={(e) => setNewListing({ ...newListing, bedrooms: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Max Guests</Label>
                        <Input
                          id="guests"
                          type="number"
                          placeholder="4"
                          value={newListing.guests}
                          onChange={(e) => setNewListing({ ...newListing, guests: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Property Images</Label>
                      <div className="border-2 border-dashed border-slate/30 rounded-lg p-8 text-center">
                        <Upload className="h-8 w-8 text-slate/60 mx-auto mb-2" />
                        <p className="text-text-base/60">Drag and drop images here, or click to browse</p>
                        <Button variant="outline" className="mt-2">
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => setShowAddListing(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleAddListing}
                        className="bg-slate hover:bg-slate/90"
                      >
                        Add Listing
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userListings.map((listing) => (
                  <Card key={listing.id} className="overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={listing.images[0]}
                        alt={listing.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-soft-green text-white">
                        Active
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-text-base mb-1">{listing.title}</h3>
                      <p className="text-sm text-text-base/60 mb-2 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {listing.location}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-text-base">${listing.price}/night</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-muted-gold text-muted-gold" />
                          <span className="text-sm text-text-base/70">{listing.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-1">
                          <Link href={`/listings/${listing.id}`}>
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </Link>
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteListing(listing.id)}
                          className="text-soft-red hover:text-soft-red/80"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-6">
              <h2 className="text-xl font-semibold text-text-base">Recent Bookings</h2>
              
              <div className="space-y-4">
                {mockBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-slate/10 rounded-lg flex items-center justify-center">
                            <Home className="h-6 w-6 text-slate" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-text-base">{booking.listing}</h3>
                            <p className="text-sm text-text-base/60">Guest: {booking.guest}</p>
                            <p className="text-sm text-text-base/60">
                              {booking.checkIn} - {booking.checkOut}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-text-base">${booking.amount}</p>
                          <Badge
                            variant={booking.status === 'confirmed' ? 'default' : 'secondary'}
                            className={booking.status === 'confirmed' ? 'bg-soft-green' : ''}
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-xl font-semibold text-text-base">Account Settings</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your profile details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell guests about yourself..." />
                  </div>
                  <Button className="bg-slate hover:bg-slate/90">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}