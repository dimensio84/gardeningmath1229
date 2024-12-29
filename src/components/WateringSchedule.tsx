import React, { useState } from 'react';
import { Calculator } from './Calculator';
import { Droplets } from 'lucide-react';

export function WateringSchedule() {
  const [plantType, setPlantType] = useState('vegetables');
  const [soilType, setSoilType] = useState('loam');
  const [season, setSeason] = useState('summer');

  const getWateringFrequency = () => {
    const baseFrequency = {
      vegetables: { sandy: 2, loam: 3, clay: 4 },
      flowers: { sandy: 2, loam: 3, clay: 4 },
      herbs: { sandy: 3, loam: 4, clay: 5 },
    }[plantType][soilType];

    const seasonMultiplier = { summer: 1, spring: 1.5, autumn: 2, winter: 3 };
    return baseFrequency * seasonMultiplier[season];
  };

  return (
    <Calculator
      title="Watering Schedule Calculator"
      description="Get personalized watering recommendations for your garden"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Plant Type</label>
          <select
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="vegetables">Vegetables</option>
            <option value="flowers">Flowers</option>
            <option value="herbs">Herbs</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Soil Type</label>
          <select
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="sandy">Sandy</option>
            <option value="loam">Loam</option>
            <option value="clay">Clay</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Season</label>
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="summer">Summer</option>
            <option value="spring">Spring</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
        </div>
        <div className="bg-blue-50 p-4 rounded-md flex items-center">
          <Droplets className="h-5 w-5 text-blue-500 mr-2" />
          <p className="text-blue-800">
            Water your plants every <span className="font-bold">{getWateringFrequency()}</span> days
          </p>
        </div>
      </div>
    </Calculator>
  );
}