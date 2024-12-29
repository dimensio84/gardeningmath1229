import React from 'react';
import { Flower2, Droplet, Ruler, BookOpen } from 'lucide-react';
import { BlogSection } from '../components/BlogSection';
import { Link } from '../components/Navigation';

function ToolCard({ icon: Icon, title, description, href }: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-full">
        <Icon className="h-8 w-8 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

export function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Garden Planning Tools</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Calculate, plan, and optimize your garden with our easy-to-use tools
        </p>
      </header>

      {/* Ebook CTA */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 md:p-8 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Free Gardening Basics Ebook
            </h2>
            <p className="text-gray-600 mb-4">
              Get our comprehensive guide to starting and maintaining your garden. Perfect for beginners!
            </p>
            <Link href="/free-ebook">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Get Your Free Guide
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=800&q=80"
              alt="Gardening Guide Preview"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <ToolCard
          icon={Flower2}
          title="Seed Calculator"
          description="Calculate how many seeds you need based on your garden area"
          href="/seed-calculator"
        />
        <ToolCard
          icon={Droplet}
          title="Watering Schedule"
          description="Get personalized watering recommendations for your garden"
          href="/watering-schedule"
        />
        <ToolCard
          icon={Ruler}
          title="Plant Spacing"
          description="Calculate optimal spacing and plant capacity for your garden"
          href="/plant-spacing"
        />
      </div>

      <BlogSection />
    </div>
  );
}