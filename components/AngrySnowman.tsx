import React, { useEffect, useState, useRef } from 'react';

interface AngrySnowmanProps {
  show: boolean;
  onHide: () => void;
}

const messages = [
  "Hey! No peeking!",
  "It's not time yet!",
  "Patience, young grasshopper.",
  "You'll get coal for that!",
  "Santa's watching...",
  "Trying to get on the naughty list?",
];

const AngrySnowman: React.FC<AngrySnowmanProps> = ({ show, onHide }) => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [isExiting, setIsExiting] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (show) {
      setIsExiting(false);
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
      
      audioRef.current?.play().catch(e => console.error("Error playing snowman audio:", e));

      const timer = setTimeout(() => {
        handleHide();
      }, 3000); // Auto-hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [show]);

  const handleHide = () => {
    setIsExiting(true);
    setTimeout(onHide, 500); // Match animation duration
  };

  if (!show && !isExiting) {
    return null;
  }

  const animationClass = show && !isExiting ? 'animate-slide-in-up' : 'animate-slide-out-down';

  return (
    <>
      <audio
        ref={audioRef}
        src="https://upload.wikimedia.org/wikipedia/commons/4/45/Joulupukki_-_Santa_Claus_-_Ho_ho_ho.ogg"
        preload="auto"
      />
      <div 
        className={`fixed bottom-4 right-4 z-50 flex flex-col items-center ${animationClass}`}
      >
          <div 
              className="relative bg-white text-gray-800 p-3 rounded-lg shadow-xl text-center mb-2"
              style={{ fontFamily: "'Gaegu', cursive", minWidth: '180px' }}
          >
              <p className="text-xl font-bold">{currentMessage}</p>
              <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
              {/* Body */}
              <circle cx="12" cy="17" r="6" />
              <circle cx="12" cy="9" r="4" />
              
              {/* Eyes */}
              <circle cx="11" cy="8.5" r="0.5" fill="black" />
              <circle cx="13" cy="8.5" r="0.5" fill="black" />
              
              {/* Angry Eyebrows */}
              <path d="M10 7 L11.5 7.5" stroke="black" strokeWidth="0.5" fill="none" />
              <path d="M14 7 L12.5 7.5" stroke="black" strokeWidth="0.5" fill="none" />
              
              {/* Frown */}
              <path d="M11 10.5 Q 12 9.5, 13 10.5" stroke="black" strokeWidth="0.5" fill="none" />
              
              {/* Buttons */}
              <circle cx="12" cy="15" r="0.5" fill="black" />
              <circle cx="12" cy="17" r="0.5" fill="black" />
              <circle cx="12" cy="19" r="0.5" fill="black" />

              {/* Arms */}
              <path className="snowman-arm-left" d="M6 16 L2 14" stroke="#8B4513" strokeWidth="0.7" />
              <path className="snowman-arm-right" d="M18 16 L22 14" stroke="#8B4513" strokeWidth="0.7" />
          </svg>
      </div>
      <style>{`
        @keyframes shake-arms {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            75% { transform: rotate(-15deg); }
            100% { transform: rotate(0deg); }
        }

        .snowman-arm-left {
            transform-origin: 6px 16px; /* The point where the arm meets the body */
            animation: shake-arms 0.3s ease-in-out infinite;
        }
        .snowman-arm-right {
            transform-origin: 18px 16px; /* The point where the arm meets the body */
            animation: shake-arms 0.3s ease-in-out infinite reverse;
        }
      
        @keyframes slide-in-up {
            0% { transform: translateY(100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-out-down {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-slide-in-up {
            animation: slide-in-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-slide-out-down {
            animation: slide-out-down 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
        }
      `}</style>
    </>
  );
};

export default AngrySnowman;