
import React from 'react';

interface WheelLogoProps {
  className?: string;
  animate?: boolean;
}

export const WheelLogo: React.FC<WheelLogoProps> = ({ className = "", animate = false }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        className={animate ? "animate-wheel-spin" : ""}
      >
        {/* First wheel - W left part */}
        <circle
          cx="15"
          cy="20"
          r="12"
          fill="none"
          stroke="#00BFA6"
          strokeWidth="3"
          className="opacity-90"
        />
        <circle cx="15" cy="20" r="4" fill="#00BFA6" />
        
        {/* Second wheel - W right part, interlocking */}
        <circle
          cx="25"
          cy="20"
          r="12"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="3"
          className="opacity-90"
        />
        <circle cx="25" cy="20" r="4" fill="#FF6B35" />
        
        {/* Interlocking visual element */}
        <path
          d="M 20 15 Q 20 10 15 15 Q 20 20 25 15 Q 20 10 20 15"
          fill="none"
          stroke="#2D3748"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};
