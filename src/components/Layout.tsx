import React, { useState } from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { Link } from './Navigation';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <nav className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-green-800">GardeningMath</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-4">
              <Link href="/">Home</Link>
              <Link href="/seed-calculator">Seed Calculator</Link>
              <Link href="/watering-schedule">Watering Schedule</Link>
              <Link href="/plant-spacing">Plant Spacing</Link>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2">Home</Link>
              <Link href="/seed-calculator" className="block px-3 py-2">Seed Calculator</Link>
              <Link href="/watering-schedule" className="block px-3 py-2">Watering Schedule</Link>
              <Link href="/plant-spacing" className="block px-3 py-2">Plant Spacing</Link>
            </div>
          </div>
        )}
      </nav>
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}