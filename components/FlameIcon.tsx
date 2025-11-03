
import React from 'react';

interface FlameIconProps {
  className?: string;
}

export const FlameIcon: React.FC<FlameIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path 
        fillRule="evenodd" 
        d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 18.75a.75.75 0 001.071 1.052 11.25 11.25 0 002.463-5.684A11.25 11.25 0 0012.963 2.286z" 
        clipRule="evenodd" 
      />
      <path 
        fillRule="evenodd" 
        d="M10.788 2.232a.75.75 0 00-1.06 1.06A11.25 11.25 0 019 18.75a.75.75 0 001.06 1.06I11.25 11.25 0 008.288 5.432 11.25 11.25 0 002.5-3.198z" 
        clipRule="evenodd" 
      />
    </svg>
  );
};
