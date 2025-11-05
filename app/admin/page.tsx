'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Users,
  Building,
  Calendar,
  DollarSign,
  Search,
  Edit,
  Trash2,
  Eye,
  Shield,
  TrendingUp,
  MapPin,
  Star,
} from 'lucide-react';
import { mockListings, mockUser, mockBookings } from '@/lib/data';
import { toast } from 'sonner';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Active Listings',
      value: '456',
      change: '+8%',
      icon: Building,
      color: 'text-green-600',
    },
    {
      title: 'Total Bookings',
      value: '789',
      change: '+15%',
      icon: Calendar,
      color: 'text-purple-600',
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+23%',
      icon: DollarSign,
      color: 'text-yellow-600',
    },
  ];

  const mockUsers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Host',
      status: 'Active',
      joinDate: '2024-01-15',
      listings: 3,
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'Guest',
      status: 'Active',
      joinDate: '2024-01-20',
      listings: 0,
    },
    {
      id: '3',
      name: 'Mike Chen',
      email: 'mike@example.com',
      role: 'Host',
      status: 'Pending',
      joinDate: '2024-02-01',
      listings: 1,
    },
  ];

  const handleDeleteUser = (userId: string) => {
    toast.success('User deleted successfully');
  };

  const handleDeleteListing = (listingId: string) => {
    toast.success('Listing deleted successfully');
  };

  const handleApproveUser = (userId: string) => {
    toast.success('User approved successfully');
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
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="h-8 w-8 text-slate" />
            <h1 className="text-3xl font-bold text-text-base">Admin Panel</h1>
          </div>
          <p className="text-text-base/70">Manage users, listings, and platform operations</p>
        </motion.div>

        {/* Stats Overview */}
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
                      <p className="text-sm text-soft-green flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`w-12 h-12 bg-slate/10 rounded-lg flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
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
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="listings">Listings</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest platform activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: 'New user registration', user: 'Sarah Johnson', time: '2 hours ago' },
                        { action: 'Listing approved', user: 'Mike Chen', time: '4 hours ago' },
                        { action: 'Booking completed', user: 'John Doe', time: '6 hours ago' },
                        { action: 'New listing submitted', user: 'Emma Wilson', time: '8 hours ago' },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-slate/10 last:border-0">
                          <div>
                            <p className="text-sm font-medium text-text-base">{activity.action}</p>
                            <p className="text-xs text-text-base/60">{activity.user}</p>
                          </div>
                          <span className="text-xs text-text-base/60">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Platform Health</CardTitle>
                    <CardDescription>System status and metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-base/70">Server Status</span>
                        <Badge className="bg-soft-green/20 text-soft-green">Online</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-base/70">Database</span>
                        <Badge className="bg-soft-green/20 text-soft-green">Healthy</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-base/70">Payment System</span>
                        <Badge className="bg-soft-green/20 text-soft-green">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-base/70">Email Service</span>
                        <Badge className="bg-soft-green/20 text-soft-green">Running</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-text-base">User Management</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate/60" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Listings</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-text-base">{user.name}</p>
                            <p className="text-sm text-text-base/60">{user.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.role === 'Host' ? 'default' : 'secondary'}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              user.status === 'Active'
                                ? 'bg-soft-green/20 text-soft-green'
                                : 'bg-muted-gold/20 text-muted-gold'
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{user.listings}</TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                            {user.status === 'Pending' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleApproveUser(user.id)}
                                className="text-soft-green hover:text-soft-green/80"
                              >
                                Approve
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-soft-red hover:text-soft-red/80"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Listings Tab */}
            <TabsContent value="listings" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-text-base">Listing Management</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate/60" />
                  <Input
                    placeholder="Search listings..."
                    className="pl-10 w-64"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockListings.slice(0, 6).map((listing) => (
                  <Card key={listing.id} className="overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={listing.images[0]}
                        alt={listing.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-soft-green/90 text-white">
                        Active
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-text-base mb-1 line-clamp-1">{listing.title}</h3>
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
                      <p className="text-xs text-text-base/60 mb-3">Host: {listing.hostName}</p>
                      <div className="flex justify-between">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
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
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-text-base">Booking Management</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate/60" />
                  <Input
                    placeholder="Search bookings..."
                    className="pl-10 w-64"
                  />
                </div>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Property</TableHead>
                      <TableHead>Guest</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-mono text-sm">#{booking.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                              <Image
                                src={booking.listingImage}
                                alt={booking.listingTitle}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-text-base line-clamp-1">{booking.listingTitle}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Guest User</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{booking.checkIn}</p>
                            <p className="text-text-base/60">to {booking.checkOut}</p>
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">${booking.totalPrice}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              booking.status === 'upcoming'
                                ? 'bg-muted-gold/20 text-muted-gold'
                                : 'bg-soft-green/20 text-soft-green'
                            }
                          >
                            {booking.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}