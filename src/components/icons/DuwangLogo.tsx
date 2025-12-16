import React from 'react';

export interface DuwangLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const DuwangLogo: React.FC<DuwangLogoProps> = ({ 
  size = 32, 
  className = '', 
  showText = false 
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer circle */}
        <circle cx="16" cy="16" r="15" stroke="url(#gradientDuwang)" strokeWidth="1.5" />
        
        {/* Inner geometric shape - stylized D */}
        <g fill="url(#gradientDuwang)">
          {/* Vertical line left */}
          <rect x="8" y="6" width="2" height="20" rx="1" />
          
          {/* Top curve */}
          <path d="M 10 6 Q 18 6 18 12 Q 18 16 14 16 L 10 16" fillOpacity="0.8" />
          
          {/* Bottom curve */}
          <path d="M 10 16 Q 18 16 18 22 Q 18 26 10 26" fillOpacity="0.8" />
          
          {/* Accent dot */}
          <circle cx="24" cy="16" r="2" opacity="0.6" />
        </g>

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradientDuwang" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Duwang
        </span>
      )}
    </div>
  );
};
