import React, { useState, useMemo } from 'react';
import { Recipe } from '../types';
import { consolidateIngredientsForWeek } from '../utils/ingredientParser';

interface ShoppingListProps {
  recipes: Recipe[];
}

const WEEKS = [
  { label: 'Week 1 (Dec 1-7)', start: 0, end: 7 },
  { label: 'Week 2 (Dec 8-14)', start: 7, end: 14 },
  { label: 'Week 3 (Dec 15-21)', start: 14, end: 21 },
  { label: 'Week 4 (Dec 22-24)', start: 21, end: 24 },
];

const ShoppingList: React.FC<ShoppingListProps> = ({ recipes }) => {
  const [selectedWeek, setSelectedWeek] = useState(0);

  const weeklyShoppingLists = useMemo(() => {
    return WEEKS.map(week => {
      const weekRecipes = recipes.slice(week.start, week.end);
      return consolidateIngredientsForWeek(weekRecipes);
    });
  }, [recipes]);

  const { consolidatedList, otherItems } = weeklyShoppingLists[selectedWeek];

  const formatQuantity = (quantity: number) => {
    // Show up to 2 decimal places, but remove trailing .00 or .#0
    return parseFloat(quantity.toFixed(2));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg" style={{ fontFamily: "'Gaegu', cursive" }}>
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-teal-800 mb-6">
        Weekly Shopping List
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {WEEKS.map((week, index) => (
          <button
            key={week.label}
            onClick={() => setSelectedWeek(index)}
            className={`px-4 py-2 rounded-full text-lg font-bold transition-all duration-200 transform ${
              selectedWeek === index
                ? 'bg-teal-600 text-white shadow-md scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-teal-100'
            }`}
          >
            {week.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-lg">
        <div>
          <h3 className="text-3xl font-bold text-red-600 mb-4 border-b-2 border-red-200 pb-2">
            Ingredients
          </h3>
          {consolidatedList.length > 0 ? (
            <ul className="space-y-3">
              {consolidatedList.map((item) => (
                <li key={item.name + item.unit} className="flex items-start">
                  <input type="checkbox" className="mt-1.5 mr-3 h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                  <label>
                    <span className="font-bold text-gray-800">{formatQuantity(item.totalQuantity)} {item.unit}</span>
                    <span className="text-gray-600"> {item.name}</span>
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No items to show for this week.</p>
          )}
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-red-600 mb-4 border-b-2 border-red-200 pb-2">
            Other Items
          </h3>
          {otherItems.length > 0 ? (
            <ul className="space-y-3">
              {otherItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <input type="checkbox" className="mt-1.5 mr-3 h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                  <label className="text-gray-600 capitalize">{item}</label>
                </li>
              ))}
            </ul>
          ) : (
             <p className="text-gray-500">No other items for this week.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
