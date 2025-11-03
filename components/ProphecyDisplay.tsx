
import React from 'react';

interface ProphecyDisplayProps {
  text: string;
  isError?: boolean;
}

export const ProphecyDisplay: React.FC<ProphecyDisplayProps> = ({ text, isError = false }) => {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const mainProphecy = lines.slice(0, -2);
  const mantra = lines.slice(-2);

  const baseTextColor = isError ? 'text-red-400' : 'text-gray-300';
  const highlightColor = isError ? 'text-red-500 font-bold' : 'text-amber-400';

  return (
    <div className="animate-fade-in text-center max-w-2xl mx-auto">
      <div className={`font-prophet text-2xl md:text-3xl leading-relaxed ${baseTextColor} space-y-4`}>
        {mainProphecy.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      
      <div className="border-t-2 border-gray-800 w-1/4 mx-auto my-8"></div>

      <div className={`font-prophet text-xl md:text-2xl italic ${highlightColor}`}>
        {mantra.map((line, index) => (
            <p key={`mantra-${index}`}>{line}</p>
        ))}
      </div>
    </div>
  );
};

// Add fade-in animation to tailwind config or a style tag if needed.
// For simplicity, we can add it directly in index.html, but here's a conceptual approach with a CSS-in-JS flavor if that were allowed.
// For now, let's create a custom animation in tailwind config conceptually
// In a real tailwind.config.js:
/*
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 1s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
},
*/
// Since we can't use a config file, let's use a simple approach with a style tag in index.html, or just rely on react state transitions.
// A simple class will do for now.
