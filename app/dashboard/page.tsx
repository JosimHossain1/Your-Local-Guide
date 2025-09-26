"use client";

import { useState } from "react";
import {
  Menu,
  Home,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const bookings = [
    { id: 1, user: "Sarah Khan", tour: "Dhaka Heritage Tour", date: "25 Sep 2025", status: "Confirmed" },
    { id: 2, user: "John Doe", tour: "Cox’s Bazar Beach", date: "20 Sep 2025", status: "Pending" },
    { id: 3, user: "Ayesha", tour: "Sundarban Adventure", date: "15 Sep 2025", status: "Cancelled" },
  ];

  return (
    <div className="flex h-screen bg-muted/20">
      {/* Sidebar */}
      <aside
        className={`bg-background border-r p-4 flex flex-col transition-all duration-300 
        ${open ? "w-64" : "w-20"} hidden md:flex`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          {open && <h1 className="font-bold text-lg">Tour Dashboard</h1>}
          <Button size="icon" variant="ghost" onClick={() => setOpen(!open)}>
            <Menu />
          </Button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 space-y-3">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Home className="h-5 w-5" />
            {open && "Home"}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Users className="h-5 w-5" />
            {open && "Users"}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Calendar className="h-5 w-5" />
            {open && "Bookings"}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <BarChart3 className="h-5 w-5" />
            {open && "Analytics"}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-5 w-5" />
            {open && "Settings"}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-red-500 mt-auto">
            <LogOut className="h-5 w-5" />
            {open && "Logout"}
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between border-b bg-background px-4 py-3">
          <h2 className="font-bold text-xl">Welcome Back, Josim!</h2>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
              <AvatarFallback>JH</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,250</p>
              <p className="text-sm text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">150</p>
              <p className="text-sm text-muted-foreground">+5 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">320</p>
              <p className="text-sm text-muted-foreground">+18 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">৳4,50,000</p>
              <p className="text-sm text-muted-foreground">+25% from last month</p>
            </CardContent>
          </Card>
        </section>

        {/* Recent Bookings Table */}
        <section className="px-6 pb-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Tour</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((b) => (
                    <TableRow key={b.id}>
                      <TableCell>{b.user}</TableCell>
                      <TableCell>{b.tour}</TableCell>
                      <TableCell>{b.date}</TableCell>
                      <TableCell>{b.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
