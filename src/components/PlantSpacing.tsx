import React, { useState } from 'react';
import { Calculator } from './Calculator';

export function PlantSpacing() {
  const [plantType, setPlantType] = useState('tomatoes');
  const [plotWidth, setPlotWidth] = useState('');
  const [plotLength, setPlotLength] = useState('');

  const spacingGuide: Record<string, { between: number; rows: number }> = {
    tomatoes: { between: 60, rows: 90 },
    carrots: { between: 5, rows: 30 },
    lettuce: { between: 20, rows: 30 },
    peppers: { between: 45, rows: 60 },
  };

  const calculatePlants = () => {
    const width = parseFloat(plotWidth);
    const length = parseFloat(plotLength);
    if (isNaN(width) || isNaN(length)) return 0;

    const spacing = spacingGuide[plantType];
    const plantsPerRow = Math.floor((width * 100) / spacing.between);
    const numberOfRows = Math.floor((length * 100) / spacing.rows);
    return plantsPerRow * numberOfRows;
  };

  return (
    <Calculator
      title="Plant Spacing Calculator"
      description="Calculate how many plants will fit in your garden space"
    >
      <div className="space-y-4">
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
            <option value="peppers">Peppers</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Plot Width (m)</label>
            <input
              type="number"
              value={plotWidth}
              onChange={(e) => setPlotWidth(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Width in meters"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Plot Length (m)</label>
            <input
              type="number"
              value={plotLength}
              onChange={(e) => setPlotLength(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Length in meters"
            />
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-green-800">
            You can fit approximately <span className="font-bold">{calculatePlants()}</span> plants
            in your garden plot with proper spacing.
          </p>
          <p className="text-sm text-green-600 mt-2">
            Recommended spacing: {spacingGuide[plantType].between}cm between plants,{' '}
            {spacingGuide[plantType].rows}cm between rows
          </p>
        </div>
      </div>
    </Calculator>
  );
}