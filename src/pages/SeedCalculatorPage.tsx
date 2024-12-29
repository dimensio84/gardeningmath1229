import React from 'react';
import { SeedCalculator } from '../components/SeedCalculator';
import { Flower2, HelpCircle } from 'lucide-react';

export function SeedCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Flower2 className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Seed Calculator</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Planning your garden starts with knowing exactly how many seeds you need. Our Seed Calculator 
          helps you determine the optimal number of seeds based on your garden area and plant type. 
          Whether you're growing tomatoes, carrots, lettuce, or beans, this tool will help you avoid 
          waste while ensuring you have enough plants for a bountiful harvest.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <SeedCalculator />
      </div>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use the Seed Calculator</h2>
          <div className="prose prose-green max-w-none">
            <ol className="space-y-4">
              <li>
                <strong>Measure Your Garden Area:</strong> First, measure your garden plot's width and length 
                in meters. Multiply these numbers to get your total area in square meters.
              </li>
              <li>
                <strong>Select Your Plant Type:</strong> Choose the type of plant you want to grow from 
                the dropdown menu. The Seed Calculator will automatically adjust the seeding rate based on 
                your selection.
              </li>
              <li>
                <strong>Review Results:</strong> The calculator will instantly show you the recommended 
                number of seeds needed for your garden area, taking into account proper spacing and 
                typical germination rates.
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding the Results</h2>
          <p className="text-gray-600 mb-4">
            The Seed Calculator provides recommendations based on optimal spacing requirements and typical 
            germination rates for each plant type. The numbers include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Extra seeds to account for germination failure</li>
            <li>Proper spacing between plants for optimal growth</li>
            <li>Consideration of plant size at maturity</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Why do I need more seeds than plants?</h3>
              <p className="text-gray-600">
                The Seed Calculator recommends extra seeds to account for germination rates and potential 
                losses. Not all seeds will successfully germinate, and some seedlings may not survive to 
                maturity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How accurate are the calculations?</h3>
              <p className="text-gray-600">
                The Seed Calculator uses standard spacing guidelines and typical germination rates. Your 
                actual needs may vary based on specific varieties, local conditions, and growing methods.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What if my garden shape is irregular?</h3>
              <p className="text-gray-600">
                For irregular shapes, break your garden into rectangular sections, calculate each separately, 
                and add the results together. This will give you a close approximation of your total seed needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Should I order extra seeds?</h3>
              <p className="text-gray-600">
                It's always good practice to order a few extra seeds beyond the calculator's recommendation. 
                This provides insurance against unexpected losses and allows for succession planting throughout 
                the season.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}