import React from 'react';

interface SnowmanSpinnerProps {
  message: string;
}

const SnowmanSpinner: React.FC<SnowmanSpinnerProps> = ({ message }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 transition-opacity duration-300 ease-in-out">
        <svg width="200" height="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g className="snowman-body">
            {/* Snowman Body */}
            <circle cx="12" cy="17" r="6" fill="white" stroke="#d1d5db" strokeWidth="0.5" />
            <circle cx="12" cy="9" r="4" fill="white" stroke="#d1d5db" strokeWidth="0.5" />
            
            {/* Face */}
            <circle cx="11" cy="8.5" r="0.4" fill="black" />
            <circle cx="13" cy="8.5" r="0.4" fill="black" />
            <path d="M11 10 C 12 10.5, 13 10, 13 10" stroke="black" strokeWidth="0.3" fill="none" />
            
            {/* Buttons */}
            <circle cx="12" cy="15" r="0.5" fill="black" />
            <circle cx="12" cy="17" r="0.5" fill="black" />
          </g>

          {/* Arms */}
          <path className="snowman-arm-left" d="M6 16 L2 14" stroke="#8B4513" strokeWidth="0.7" />
          <path className="snowman-arm-right" d="M18 16 L22 14" stroke="#8B4513" strokeWidth="0.7" />

        </svg>
        <p className="text-gray-600 text-2xl mt-4 font-semibold text-center px-4">
          {message}
        </p>
      </div>
       <style>{`
        @keyframes dance {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-3px) rotate(-3deg);
          }
          75% {
            transform: translateY(0px) rotate(3deg);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(20deg);
          }
          50% {
            transform: rotate(-30deg);
          }
        }
        
        .snowman-body {
          transform-origin: 12px 23px; /* Bottom center of the snowman */
          animation: dance 2s ease-in-out infinite;
        }

        .snowman-arm-left {
          transform-origin: 6px 16px; /* Shoulder joint */
          animation: wave 1.5s ease-in-out infinite;
        }

        .snowman-arm-right {
          transform-origin: 18px 16px; /* Shoulder joint */
          animation: wave 1.5s ease-in-out infinite reverse;
        }
      `}</style>
    </>
  );
};

export default SnowmanSpinner;
