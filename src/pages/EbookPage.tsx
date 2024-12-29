import React from 'react';
import { EbookForm } from '../components/ebook/EbookForm';
import { EbookBenefits } from '../components/ebook/EbookBenefits';
import { SEO } from '../components/SEO';

export function EbookPage() {
  return (
    <>
      <SEO 
        title="Free Gardening Basics Ebook"
        description="Get our comprehensive guide to gardening basics. Learn essential techniques, planning tips, and expert advice to start your garden journey."
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Guide to Gardening Success
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know to start and maintain a thriving garden
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <EbookBenefits />
            <EbookForm />
          </div>
        </div>
      </div>
    </>
  );
}