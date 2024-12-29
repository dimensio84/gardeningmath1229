import React from 'react';
import { Link } from './Navigation';
import { Sprout } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Sprout className="h-6 w-6 text-green-600" />
              <span className="ml-2 text-lg font-semibold text-green-800">GardeningMath</span>
            </div>
            <p className="text-gray-600 text-sm">
              Helping gardeners plan, calculate, and grow better gardens with easy-to-use tools and expert advice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Tools</h3>
            <ul className="space-y-3">
              <li><Link href="/seed-calculator">Seed Calculator</Link></li>
              <li><Link href="/watering-schedule">Watering Schedule</Link></li>
              <li><Link href="/plant-spacing">Plant Spacing</Link></li>
              <li><Link href="/blog">Garden Tips</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} GardeningMath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}