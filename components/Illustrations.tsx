import React from 'react';

// Common props to ensure SVGs scale correctly
const svgProps = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Tree: React.FC = () => (
  <svg {...svgProps} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L6 12h12L12 2z" stroke="none" fill="currentColor"/>
    <path d="M8 9l-3 6h14l-3-6" stroke="none" fill="currentColor"/>
    <path d="M10 16l-2 4h8l-2-4" stroke="none" fill="currentColor"/>
    <line x1="12" y1="20" x2="12" y2="22" />
  </svg>
);

export const Gift: React.FC = () => (
  <svg {...svgProps} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="18" height="12" rx="2" stroke="none" fill="currentColor"/>
    <path d="M12 4v16" />
    <path d="M3 14h18" />
    <path d="M12 4a4 4 0 00-4 4h8a4 4 0 00-4-4z" />
  </svg>
);

export const Snowflake: React.FC = () => (
  <svg {...svgProps} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M12 12l8 4.6M12 12l-8 4.6M12 12l8-4.6M12 12l-8-4.6M5.1 7.5l3.8 2.2M15.1 14.3l3.8 2.2M5.1 16.5l3.8-2.2M15.1 9.7l3.8-2.2" />
  </svg>
);

export const CandyCane: React.FC = () => (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6a4 4 0 10-8 0v12h4"/>
        <path d="M8 8h4"/>
        <path d="M8 12h4"/>
        <path d="M8 16h4"/>
    </svg>
);
