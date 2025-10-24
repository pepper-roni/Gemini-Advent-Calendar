import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 mb-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800" style={{ fontFamily: "'Gaegu', cursive" }}>
        A Very Gemini Christmas
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-600 mt-2" style={{ fontFamily: "'Gaegu', cursive" }}>
        24 Days of Sweet Recipes
      </h2>
    </header>
  );
};

export default Header;