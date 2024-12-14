'use client'

import { CircleDot } from 'lucide-react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  steps: ProcessStep[];
}

export default function ServiceProcess({ title, steps }: ServiceProcessProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <CircleDot size={24} />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}