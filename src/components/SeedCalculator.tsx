import React, { useState } from 'react';
import { Calculator } from './Calculator';

export function SeedCalculator() {
  const [area, setArea] = useState('');
  const [plantType, setPlantType] = useState('tomatoes');

  const seedingRates: Record<string, number> = {
    tomatoes: 4,
    carrots: 24,
    lettuce: 16,
    beans: 8,
  };

  const calculateSeeds = () => {
    const areaNum = parseFloat(area);
    if (isNaN(areaNum)) return 0;
    return Math.ceil(areaNum * seedingRates[plantType]);
  };

  return (
    <Calculator
      title="Seed Calculator"
      description="Calculate how many seeds you need based on your garden area"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Garden Area (m²)</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Enter area in square meters"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Plant Type</label>
          <select
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="tomatoes">Tomatoes</option>
            <option value="carrots">Carrots</option>
            <option value="lettuce">Lettuce</option>
            <option value="beans">Beans</option>
          </select>
        </div>
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-green-800">
            You need approximately <span className="font-bold">{calculateSeeds()}</span> seeds
            for your garden area.
          </p>
        </div>
      </div>
    </Calculator>
  );
}