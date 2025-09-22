"use client";

import { Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#" },
    { name: "Safety & Trust", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" }
  ],
  travelers: [
    { name: "Find Guides", href: "#guides" },
    { name: "Popular Tours", href: "#tours" },
    { name: "Gift Cards", href: "#" },
    { name: "Travel Insurance", href: "#" },
    { name: "Help Center", href: "#" }
  ],
  guides: [
    { name: "Become a Guide", href: "#" },
    { name: "Guide Resources", href: "#" },
    { name: "Guide Community", href: "#" },
    { name: "Earnings Calculator", href: "#" },
    { name: "Success Stories", href: "#" }
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#faq" },
    { name: "Booking Help", href: "#" },
    { name: "Cancellation Policy", href: "#" },
    { name: "Report an Issue", href: "#" }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  Your Local Guide
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Connecting travelers with passionate local guides for authentic cultural experiences that support communities worldwide.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-red-500 mr-2" />
                  Made with love for travelers
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">For Travelers</h4>
                  <ul className="space-y-3">
                    {footerLinks.travelers.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">For Guides</h4>
                  <ul className="space-y-3">
                    {footerLinks.guides.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter & Contact */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Stay Connected</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Get travel tips, guide spotlights, and special offers delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1"
                  />
                  <Button size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  support@localwanderer.com
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  +1 (555) 123-TOUR
                </div>
                <div className="flex items-start text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>123 Travel Street<br />Adventure City, AC 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Local Wanderer. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}