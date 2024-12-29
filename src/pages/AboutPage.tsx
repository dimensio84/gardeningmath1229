import React from 'react';
import { Users, Mail, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About GardeningMath</h1>
        <p className="text-lg text-gray-600">
          Empowering gardeners with smart tools and calculations for better growing
        </p>
      </header>

      <section className="prose prose-green max-w-none">
        <p className="text-gray-600 leading-relaxed">
          GardeningMath was created by a team of passionate gardeners and developers who believed that 
          gardening could be made more accessible and successful through smart planning tools. Our 
          mission is to help both novice and experienced gardeners optimize their garden spaces and 
          achieve better results through precise calculations and expert guidance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Our Team</h3>
            <p className="text-gray-600 text-sm">
              Experienced gardeners and developers working together to create useful tools
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              Making gardening more accessible through smart planning and calculations
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm">
              We're always happy to hear from our community of gardeners
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          What started as a simple seed calculator has grown into a comprehensive suite of gardening 
          tools. We understand that successful gardening requires careful planning, precise calculations, 
          and good timing. Our tools are designed to take the guesswork out of gardening, helping you 
          make data-driven decisions for better results.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Accuracy in calculations and recommendations</li>
          <li>Simplicity in design and user experience</li>
          <li>Sustainability in gardening practices</li>
          <li>Community-driven development and feedback</li>
          <li>Continuous improvement and updates</li>
        </ul>
      </section>
    </div>
  );
}