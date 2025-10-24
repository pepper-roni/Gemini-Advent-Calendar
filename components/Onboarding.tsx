import React, { useState } from 'react';
import { UserPreferences } from '../types';
import SnowmanSpinner from './SnowmanSpinner';

interface OnboardingProps {
  onComplete: (preferences: UserPreferences) => Promise<void>;
}

const ALLERGY_OPTIONS = ['Peanuts', 'Tree Nuts', 'Dairy', 'Gluten', 'Soy', 'Eggs'];
const DIETARY_OPTIONS = ['Vegan', 'Vegetarian', 'Low Sugar'];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [selectedAllergies, setSelectedAllergies] = useState<Set<string>>(new Set());
  const [otherAllergy, setOtherAllergy] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  const handleAllergyToggle = (allergy: string) => {
    setSelectedAllergies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(allergy)) {
        newSet.delete(allergy);
      } else {
        newSet.add(allergy);
      }
      return newSet;
    });
  };

  const handleDietaryToggle = (diet: string) => {
    setSelectedDietary(prev => {
      const newSet = new Set(prev);
      if (newSet.has(diet)) {
        newSet.delete(diet);
      } else {
        newSet.add(diet);
      }
      return newSet;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const allAllergies = Array.from(selectedAllergies);
    if (otherAllergy.trim()) {
      allAllergies.push(otherAllergy.trim());
    }

    await onComplete({
      allergies: allAllergies,
      dietary: Array.from(selectedDietary),
    });
    // The parent component will unmount this component upon completion
  };

  const Checkbox = ({ label, isChecked, onToggle }: { label: string, isChecked: boolean, onToggle: () => void }) => (
    <label 
      onClick={onToggle}
      className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-teal-50 transition-colors">
      <div className={`w-6 h-6 rounded border-2 ${isChecked ? 'bg-teal-500 border-teal-500' : 'border-gray-300'} flex items-center justify-center`}>
        {isChecked && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
      </div>
      <span className="text-xl text-gray-700">{label}</span>
    </label>
  );

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4" style={{ fontFamily: "'Gaegu', cursive" }}>
      <div className="max-w-3xl w-full bg-white rounded-xl p-8 md:p-12 text-center animate-fade-in">
        {isLoading ? (
          <SnowmanSpinner message="Finding the best recipes for you..." />
        ) : (
          <>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">Welcome!</h1>
            <p className="text-2xl text-gray-600 mb-8">Let's bake something delicious, just for you.</p>

            <form onSubmit={handleSubmit} className="space-y-10 text-left">
              <div>
                <h2 className="text-3xl font-bold text-red-600 mb-4">Any Allergies?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {ALLERGY_OPTIONS.map(allergy => (
                    <Checkbox 
                      key={allergy}
                      label={allergy}
                      isChecked={selectedAllergies.has(allergy)}
                      onToggle={() => handleAllergyToggle(allergy)}
                    />
                  ))}
                </div>
                <input
                  type="text"
                  value={otherAllergy}
                  onChange={(e) => setOtherAllergy(e.target.value)}
                  placeholder="Other (e.g., sesame)"
                  className="mt-4 w-full px-4 py-2 text-xl border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-red-600 mb-4">Dietary Preferences?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {DIETARY_OPTIONS.map(diet => (
                    <Checkbox
                      key={diet}
                      label={diet}
                      isChecked={selectedDietary.has(diet)}
                      onToggle={() => handleDietaryToggle(diet)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit"
                  className="bg-red-500 text-white font-bold text-3xl px-12 py-4 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Save & Start Baking!
                </button>
              </div>
            </form>
          </>
        )}
      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Onboarding;