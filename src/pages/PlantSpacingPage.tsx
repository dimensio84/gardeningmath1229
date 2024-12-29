import React from 'react';
import { PlantSpacing } from '../components/PlantSpacing';
import { Ruler, HelpCircle } from 'lucide-react';

export function PlantSpacingPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Ruler className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Plant Spacing Calculator</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Proper plant spacing is essential for healthy growth and maximum yield. Our Plant Spacing Calculator 
          helps you determine how many plants will fit in your garden space while maintaining optimal 
          distances between plants. Get accurate calculations based on specific plant requirements and 
          maximize your garden's potential.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <PlantSpacing />
      </div>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use the Plant Spacing Calculator</h2>
          <div className="prose prose-green max-w-none">
            <ol className="space-y-4">
              <li>
                <strong>Select Your Plant Type:</strong> Choose the type of plant you want to grow. Each 
                plant has specific spacing requirements for optimal growth.
              </li>
              <li>
                <strong>Enter Plot Dimensions:</strong> Measure and input your garden plot's width and 
                length in meters. The calculator will determine how many plants can fit while maintaining 
                proper spacing.
              </li>
              <li>
                <strong>Review Results:</strong> The calculator will show you the total number of plants 
                that can fit in your space, along with the recommended spacing between plants and rows.
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Plant Spacing</h2>
          <p className="text-gray-600 mb-4">
            The Plant Spacing Calculator considers several important factors:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Plant size at maturity</li>
            <li>Root system spread</li>
            <li>Air circulation needs</li>
            <li>Access for maintenance and harvesting</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Why is proper spacing important?</h3>
              <p className="text-gray-600">
                Proper spacing ensures plants have adequate room for root development, reduces competition 
                for nutrients and water, improves air circulation (reducing disease risk), and makes 
                maintenance easier.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can I plant more densely than recommended?</h3>
              <p className="text-gray-600">
                While it's possible to plant more densely, this often leads to reduced yields, increased 
                disease risk, and competition between plants. The recommended spacing is optimized for 
                healthy growth and maximum production.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What about companion planting?</h3>
              <p className="text-gray-600">
                When companion planting, use the spacing requirements for the larger plant as your guide. 
                Smaller companion plants can often be tucked in between, as long as they don't overcrowd 
                the main crop.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Should I adjust spacing for container gardens?</h3>
              <p className="text-gray-600">
                Container gardens may require slightly different spacing due to limited soil volume and 
                root space. Consider reducing the recommended spacing by about 15-20% for container growing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What about vertical growing?</h3>
              <p className="text-gray-600">
                For plants grown vertically (like tomatoes or cucumbers), you can often reduce row spacing 
                while maintaining the recommended spacing between plants in the same row.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}