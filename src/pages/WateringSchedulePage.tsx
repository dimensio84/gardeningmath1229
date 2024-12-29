import React from 'react';
import { WateringSchedule } from '../components/WateringSchedule';
import { Droplet, HelpCircle } from 'lucide-react';

export function WateringSchedulePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Droplet className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Watering Schedule Calculator</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Proper watering is crucial for plant health and growth. Our Watering Schedule Calculator helps
          you determine the optimal watering frequency based on your plant type, soil conditions, and
          seasonal factors. Get personalized recommendations to keep your garden thriving without
          overwatering or underwatering.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <WateringSchedule />
      </div>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use the Watering Schedule Calculator</h2>
          <div className="prose prose-blue max-w-none">
            <ol className="space-y-4">
              <li>
                <strong>Select Your Plant Type:</strong> Choose between vegetables, flowers, or herbs. Each
                plant type has different water requirements based on their root systems and growth patterns.
              </li>
              <li>
                <strong>Identify Your Soil Type:</strong> Select your soil type (sandy, loam, or clay).
                Different soils retain water differently, affecting how often you need to water.
              </li>
              <li>
                <strong>Choose the Season:</strong> Select the current season. The calculator adjusts
                recommendations based on typical weather patterns and evaporation rates.
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Your Watering Schedule</h2>
          <p className="text-gray-600 mb-4">
            The calculator provides a recommended watering frequency in days. This schedule takes into account:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Water retention characteristics of your soil type</li>
            <li>Seasonal weather patterns and evaporation rates</li>
            <li>Specific water needs of different plant types</li>
            <li>Root depth and water absorption patterns</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Should I adjust the schedule during rain?</h3>
              <p className="text-gray-600">
                Yes, adjust your watering schedule based on rainfall. Skip watering if you've received
                significant rain, and resume the schedule when the soil begins to dry.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How do I know if I'm overwatering?</h3>
              <p className="text-gray-600">
                Signs of overwatering include yellowing leaves, soft or mushy stems, mold growth, and
                consistently wet soil. If you notice these signs, increase the days between watering.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What's the best time to water?</h3>
              <p className="text-gray-600">
                Water early in the morning to reduce evaporation and allow plants to dry before evening,
                which helps prevent fungal diseases. Avoid watering during the heat of the day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How deep should I water?</h3>
              <p className="text-gray-600">
                Water deeply enough to reach the root zone (usually 6-12 inches deep). This encourages
                deeper root growth and makes plants more drought-resistant.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What if my plants still look thirsty?</h3>
              <p className="text-gray-600">
                Individual plants may need more or less water based on factors like sun exposure and
                container size. Adjust the frequency based on your observations while using the calculator
                as a starting point.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}