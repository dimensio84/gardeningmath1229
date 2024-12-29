import React from 'react';

interface CalculatorProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function Calculator({ title, description, children }: CalculatorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm md:text-base text-gray-600 mb-6">{description}</p>
      {children}
    </div>
  );
}