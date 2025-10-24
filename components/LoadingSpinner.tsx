import React from 'react';

interface LoadingSpinnerProps {
  message: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50 overflow-hidden"
        aria-live="assertive"
        role="status"
      >
        <div className="relative w-full h-full">
          {[...Array(200)].map((_, i) => ( // More snowflakes for a fuller effect
            <div
              key={i}
              className="snowflake"
              // FIX: Cast style object to React.CSSProperties to allow for CSS custom properties like '--max-opacity'.
              style={{
                left: `${Math.random() * 100}vw`,
                animationDuration: `${Math.random() * 5 + 3}s`, // Faster fall: 3s to 8s
                animationDelay: `${Math.random() * 5}s`,
                '--max-opacity': Math.random() * 0.5 + 0.5,
                // Use the individual 'scale' property which won't be overridden by the animation
                scale: `${Math.random() * 0.5 + 0.5}`,
              } as React.CSSProperties}
            >
              ❄
            </div>
          ))}
        </div>
        <p className="text-white text-xl mt-4 font-semibold absolute bottom-1/4 text-center px-4 animate-pulse">
            {message}
        </p>
      </div>
      <style>{`
        .snowflake {
          color: #fff;
          font-size: 2rem;
          position: absolute;
          top: -10%; /* Start well above the viewport to hide the spawn-in */
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          opacity: 0; /* Start transparent to avoid flash before animation begins */
        }

        @keyframes fall {
          0% {
            opacity: 0;
            translate: 0 0vh;
            rotate: 0deg;
          }
          20% {
            /* Fade in to the random opacity set by the custom property */
            opacity: var(--max-opacity, 0.8);
          }
          80% {
            /* Hold the opacity for most of the duration */
            opacity: var(--max-opacity, 0.8);
          }
          100% {
            opacity: 0;
            /* 
              Animate individual transform properties.
              This prevents the 'scale' set in the inline style from being overridden.
              The snowflake translates 115vh, ensuring it's completely off-screen before looping.
            */
            translate: 0 115vh;
            rotate: 360deg;
          }
        }
      `}</style>
    </>
  );
};

export default LoadingSpinner;