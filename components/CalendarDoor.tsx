import React from 'react';

interface CalendarDoorProps {
  day: number;
  isLocked: boolean;
  isOpened: boolean;
  imageUrl?: string;
  design: {
    illustration: React.ReactNode;
    colors: {
      bg: string;
      border: string;
      text: string;
    };
    giftWrapStyle: React.CSSProperties;
  };
  onClick: (day: number) => void;
  onLockedClick: () => void;
}

const CalendarDoor: React.FC<CalendarDoorProps> = ({
  day,
  isLocked,
  isOpened,
  imageUrl,
  design,
  onClick,
  onLockedClick,
}) => {
  const handleClick = () => {
    if (isLocked) {
      onLockedClick();
    } else {
      onClick(day);
    }
  };

  const doorClasses = [
    'relative aspect-square w-full h-full rounded-lg shadow-lg group perspective-1000',
    isLocked ? 'cursor-not-allowed' : 'cursor-pointer',
  ].join(' ');

  const doorFrontClasses = [
    'absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-2 rounded-lg border-4',
    design.colors.border,
  ].join(' ');
  
  const doorBackClasses = [
    'absolute w-full h-full backface-hidden rounded-lg bg-stone-200 transform-gpu rotate-y-180',
    design.colors.border,
    'border-4'
  ].join(' ');

  return (
    <div className="p-1">
      <div className={doorClasses} onClick={handleClick}>
        <div 
            className={`transition-transform duration-700 w-full h-full`}
            style={{ transformStyle: 'preserve-3d', transform: isOpened ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
            {/* Front of the door */}
            <div 
              className={doorFrontClasses}
              style={design.giftWrapStyle}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`bg-white bg-opacity-80 rounded-full w-14 h-14 flex items-center justify-center shadow-md backdrop-blur-sm transition-transform duration-200 ease-in-out ${!isLocked ? 'group-hover:scale-110' : ''}`}>
                        <span
                            className={`text-4xl font-bold text-gray-700`}
                            style={{ fontFamily: "'Gaegu', cursive" }}
                        >
                            {day}
                        </span>
                    </div>
                </div>
            </div>

            {/* Back of the door */}
            <div className={doorBackClasses}>
                {imageUrl ? (
                    <img src={imageUrl} alt={`Dessert for day ${day}`} className="w-full h-full object-cover rounded-md" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md">
                       <p className="text-gray-400" style={{ fontFamily: "'Gaegu', cursive" }}>Surprise!</p>
                    </div>
                )}
            </div>
        </div>
      </div>
      <style>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .perspective-1000 { perspective: 1000px; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default CalendarDoor;