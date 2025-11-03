
import React from 'react';
import { FlameIcon } from './FlameIcon';

interface SummonButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const SummonButton: React.FC<SummonButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full max-w-xs mx-auto flex items-center justify-center px-8 py-4 bg-amber-600 text-black font-bold text-lg rounded-md shadow-lg shadow-amber-900/40 transform transition-all duration-300 ease-in-out hover:bg-amber-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-50 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none disabled:scale-100"
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Summoning...
        </>
      ) : (
        <>
          <FlameIcon className="w-6 h-6 mr-3" />
          Summon the Flame
        </>
      )}
    </button>
  );
};
