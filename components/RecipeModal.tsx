import React from 'react';
import { Recipe } from '../types';

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: Recipe | null;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ isOpen, onClose, recipe }) => {
  if (!isOpen || !recipe) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-stone-50 text-gray-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-slide-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{ fontFamily: "'Gaegu', cursive" }}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-gray-800 text-4xl z-10"
          aria-label="Close recipe modal"
        >
          &times;
        </button>
        
        {recipe.imageUrl && (
          <img 
            src={recipe.imageUrl} 
            alt={recipe.recipeName}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        )}

        <div className="p-6 md:p-8">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            {recipe.recipeName}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Ingredients</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-snug">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
        .animate-slide-up {
            animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default RecipeModal;