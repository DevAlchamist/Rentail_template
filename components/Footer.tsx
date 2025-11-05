import Link from 'next/link';
import { Home, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate/5 border-t border-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-slate to-muted-gold rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate">StayEase</span>
            </div>
            <p className="text-text-base/70 text-sm">
              Discover unique places to stay around the world with StayEase.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate/60 hover:text-slate cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate/60 hover:text-slate cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate/60 hover:text-slate cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-slate/60 hover:text-slate cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-text-base mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-text-base/70">
              <li>
                <Link href="/help" className="hover:text-slate transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-slate transition-colors">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="hover:text-slate transition-colors">
                  Cancellation Options
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-text-base mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm text-text-base/70">
              <li>
                <Link href="/host" className="hover:text-slate transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="/host-resources" className="hover:text-slate transition-colors">
                  Host Resources
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-slate transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="/hosting-responsibly" className="hover:text-slate transition-colors">
                  Hosting Responsibly
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-text-base mb-4">About</h3>
            <ul className="space-y-2 text-sm text-text-base/70">
              <li>
                <Link href="/about" className="hover:text-slate transition-colors">
                  About StayEase
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="hover:text-slate transition-colors">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-slate transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-slate transition-colors">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-base/60">
            © 2024 StayEase. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-text-base/60 hover:text-slate transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-text-base/60 hover:text-slate transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-text-base/60 hover:text-slate transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}