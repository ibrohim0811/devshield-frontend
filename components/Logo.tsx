// components/Logo.tsx
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* DevGuard Logo Symbol */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        <path
          d="M 25,20 L 55,20 C 72,20 80,32 80,48 C 80,64 72,76 55,76 L 38,76 L 48,62 L 53,62 C 63,62 67,56 67,48 C 67,40 63,34 53,34 L 38,34 L 38,20 Z"
          fill="url(#silver-grad)"
        />
        <path
          d="M 50,88 C 65,75 88,52 88,38 L 78,50 C 78,60 60,78 50,88 Z"
          fill="url(#blue-grad)"
        />
        <defs>
          <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0052FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* DEVGUARD Text */}
      {showText && (
        <span className="font-sans font-extrabold text-xl tracking-wider flex items-center">
          <span className="text-slate-300">DEV</span>
          <span className="text-[#0052FF] drop-shadow-[0_0_12px_rgba(0,82,255,0.4)]">GUARD</span>
        </span>
      )}
    </div>
  );
};