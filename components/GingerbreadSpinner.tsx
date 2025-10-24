import React from 'react';

interface GingerbreadSpinnerProps {
  message: string;
}

const GingerbreadSpinner: React.FC<GingerbreadSpinnerProps> = ({ message }) => {
  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50"
        aria-live="assertive"
        role="status"
      >
        <div className="relative w-64 h-64 rounded-full bg-sky-400 overflow-hidden shadow-2xl border-4 border-white/80">
          {/* Snow Ground */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/4 bg-white"
            style={{ borderRadius: '0 0 100% 100% / 0 0 50% 50%' }}
          ></div>
          
          {/* Falling Snowflakes */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="snowflake-spinner"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 4 + 3}s`, // 3s to 7s
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() * 0.5 + 0.4})`,
              }}
            >
              ❄
            </div>
          ))}
          
          {/* Dancing Gingerbread Man */}
          <div className="gingerbread-man absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-40 h-40">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
              {/* Head */}
              <circle cx="12" cy="7" r="4" fill="#A0522D" stroke="#663300" strokeWidth="0.5"/>
              {/* Body */}
              <path d="M9 11 H 15 V 19 L 13 21 H 11 L 9 19 V 11 Z" fill="#A0522D" stroke="#663300" strokeWidth="0.5"/>
              {/* Arms */}
              <rect x="4" y="12" width="16" height="2.5" rx="1.25" fill="#A0522D" stroke="#663300" strokeWidth="0.5"/>
              {/* Legs */}
              <rect x="9.5" y="18" width="2" height="5" rx="1" fill="#A0522D" stroke="#663300" strokeWidth="0.5"/>
              <rect x="12.5" y="18" width="2" height="5" rx="1" fill="#A0522D" stroke="#663300" strokeWidth="0.5"/>
              {/* Icing */}
              <circle cx="11" cy="6" r="0.5" fill="white" />
              <circle cx="13" cy="6" r="0.5" fill="white" />
              <path d="M11 8 Q 12 8.5 13 8" stroke="white" strokeWidth="0.5" fill="none" />
              {/* Buttons */}
              <circle cx="12" cy="13" r="0.7" fill="#e6007e" />
              <circle cx="12" cy="16" r="0.7" fill="#32cd32" />
            </svg>
          </div>
        </div>
        <p className="text-white text-xl mt-4 font-semibold text-center px-4" style={{ fontFamily: "'Gaegu', cursive" }}>
            {message}
        </p>
      </div>
      <style>{`
        @keyframes gingerbread-dance {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(-10deg);
          }
          75% {
            transform: translateY(-4px) rotate(10deg);
          }
        }
        
        .gingerbread-man {
          transform-origin: bottom center;
          animation: gingerbread-dance 1.2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        .snowflake-spinner {
          color: #fff;
          font-size: 1.2rem;
          position: absolute;
          top: -10%;
          animation-name: fall-spinner;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          opacity: 0.9;
        }

        @keyframes fall-spinner {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(5px, 280px) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default GingerbreadSpinner;
