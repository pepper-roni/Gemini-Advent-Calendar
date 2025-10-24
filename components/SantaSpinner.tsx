import React from 'react';

interface SantaSpinnerProps {
  message: string;
}

const SantaSpinner: React.FC<SantaSpinnerProps> = ({ message }) => {
  return (
    <>
      <div 
        className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center z-50 overflow-hidden"
        aria-live="assertive"
        role="status"
      >
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="sleigh-container">
          <div className="sleigh-wobble">
            <svg width="250" height="150" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.3))' }}>
              {/* Reindeer */}
              <g fill="#A0522D" stroke="#663300" strokeWidth="2">
                <path d="M10 60 L20 50 L30 60 V70 H25 L20 65 L15 70 H10 Z" />
                <path d="M15 50 L12 40 M25 50 L28 40" strokeWidth="1.5" />
                <path d="M50 60 L60 50 L70 60 V70 H65 L60 65 L55 70 H50 Z" />
                <path d="M55 50 L52 40 M65 50 L68 40" strokeWidth="1.5" />
              </g>
              {/* Harness */}
              <path d="M30 65 C 40 70, 45 70, 50 65" stroke="#D2B48C" strokeWidth="1.5" fill="none" />
              <path d="M70 65 C 85 70, 100 70, 120 65" stroke="#D2B48C" strokeWidth="1.5" fill="none" />

              {/* Sleigh */}
              <g>
                <path d="M120 60 C 130 50, 180 50, 200 65 L 230 80 C 240 85, 240 95, 230 100 L 150 110 C 140 112, 130 105, 125 95 Z" fill="#d1404d" stroke="#8B0000" strokeWidth="2" />
                <path d="M120 95 L 230 105" fill="none" stroke="#DAA520" strokeWidth="3" />
              </g>
              {/* Santa */}
              <g>
                <circle cx="160" cy="65" r="10" fill="#FFDDC1" stroke="black" strokeWidth="0.5" />
                <path d="M150 75 C 160 90, 170 90, 180 75 Z" fill="#d1404d" stroke="#8B0000" strokeWidth="1"/>
                <path d="M150 55 C 155 50, 165 50, 170 55 L 160 62 Z" fill="#d1404d" stroke="#8B0000" strokeWidth="1"/>
                 <circle cx="160" cy="52" r="3" fill="white" />
              </g>
            </svg>
          </div>
        </div>
        
        <p className="text-white text-2xl mt-8 font-semibold text-center px-4 absolute bottom-1/4 animate-pulse" style={{ fontFamily: "'Gaegu', cursive" }}>
            {message}
        </p>
      </div>
      <style>{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 2s infinite ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .sleigh-container {
          position: absolute;
          animation: fly-across 10s linear infinite;
        }
        .sleigh-wobble {
          animation: bobbing 2s ease-in-out infinite;
        }
        @keyframes fly-across {
          from { left: -300px; }
          to { left: 100vw; }
        }
        @keyframes bobbing {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </>
  );
};

export default SantaSpinner;