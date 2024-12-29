import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Complete guide to starting your first garden',
  'Soil preparation and maintenance tips',
  'Season-by-season planting calendar',
  'Common plant problems and solutions',
  'Water and fertilization guidelines',
  'Companion planting charts'
];

export function EbookBenefits() {
  return (
    <div>
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=800&q=80"
          alt="Gardening Guide Preview"
          className="rounded-lg shadow-lg"
        />
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        What You'll Learn:
      </h2>
      
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}