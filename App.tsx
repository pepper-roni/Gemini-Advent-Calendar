import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import Header from './components/Header';
import CalendarDoor from './components/CalendarDoor';
import RecipeModal from './components/RecipeModal';
import LoadingSpinner from './components/LoadingSpinner';
import GingerbreadSpinner from './components/GingerbreadSpinner';
import AngrySnowman from './components/AngrySnowman';
import ShoppingList from './components/ShoppingList';
import Onboarding from './components/Onboarding';
import { Tree, Gift, Snowflake, CandyCane } from './components/Illustrations';
import { generateAllDessertRecipes, generateRecipeImage } from './services/geminiService';
import { Recipe, UserPreferences } from './types';

const illustrations = [<Tree />, <Gift />, <Snowflake />, <CandyCane />];
const colors = [
  { bg: 'bg-red-200', border: 'border-red-400', text: 'text-red-800' },
  { bg: 'bg-teal-200', border: 'border-teal-400', text: 'text-teal-800' },
  { bg: 'bg-white', border: 'border-gray-300', text: 'text-gray-700' },
  { bg: 'bg-red-200', border: 'border-red-400', text: 'text-red-800' },
];
const giftWrapStyles: React.CSSProperties[] = [
    { backgroundColor: '#d1404d', backgroundImage: 'linear-gradient(135deg, #d1404d 25%, #a83232 25%, #a83232 50%, #d1404d 50%, #d1404d 75%, #a83232 75%, #a83232 100%)', backgroundSize: '40px 40px' },
    { backgroundColor: '#5da4a3', backgroundImage: 'radial-gradient(#ffffff 15%, transparent 16%)', backgroundSize: '30px 30px' },
    { backgroundColor: '#e66465', backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)' , backgroundSize: '30px 30px'},
    { backgroundColor: '#e8e8e8', backgroundImage: 'repeating-linear-gradient(45deg, #d1404d, #d1404d 10px, #e8e8e8 10px, #e8e8e8 20px)' },
    { backgroundColor: '#a8d8ea', backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 3px), radial-gradient(circle at center, #ffffff 1px, transparent 2px)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' },
    { backgroundColor: '#4a785e', backgroundImage: 'linear-gradient(45deg, #609a78 25%, transparent 25%), linear-gradient(-45deg, #609a78 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #609a78 75%), linear-gradient(-45deg, transparent 75%, #609a78 75%)', backgroundSize: '20px 20px' },
];

type View = 'calendar' | 'shoppingList';

const App: React.FC = () => {
  const [recipesCache, setRecipesCache] = useState<Map<number, Recipe>>(new Map());
  const [openedDays, setOpenedDays] = useState<Set<number>>(new Set());
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showAngrySnowman, setShowAngrySnowman] = useState(false);
  const [view, setView] = useState<View>('calendar');
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const devMode = false; // Set to true to unlock all doors for testing
  const [nextUnlockedDay, setNextUnlockedDay] = useState(devMode ? 25 : 1);

  const initializeApp = useCallback(async (preferences: UserPreferences) => {
    try {
      // Use preferences to generate a unique key for storing recipes
      const storageKey = `adventCalendarRecipes_${JSON.stringify(preferences)}`;
      const storedRecipesJson = localStorage.getItem(storageKey);
      let recipes: Recipe[];

      if (storedRecipesJson) {
        recipes = JSON.parse(storedRecipesJson);
        if (!Array.isArray(recipes) || recipes.length !== 24) {
          console.warn("Stored recipes are invalid for current preferences. Fetching new ones.");
          recipes = await generateAllDessertRecipes(preferences);
          localStorage.setItem(storageKey, JSON.stringify(recipes));
        }
      } else {
        recipes = await generateAllDessertRecipes(preferences);
        localStorage.setItem(storageKey, JSON.stringify(recipes));
      }
      
      const recipeMap = new Map<number, Recipe>();
      recipes.forEach((recipe, index) => {
        recipeMap.set(index + 1, recipe);
      });
      setRecipesCache(recipeMap);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred during setup.');
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Check for onboarding status on initial mount
  useEffect(() => {
    const onboardingComplete = localStorage.getItem('hasCompletedOnboarding') === 'true';
    if (onboardingComplete) {
      const storedPrefs = localStorage.getItem('userPreferences');
      const preferences = storedPrefs ? JSON.parse(storedPrefs) : { allergies: [], dietary: [] };
      setLoadingMessage("Gathering your saved recipes..."); // Show a quick message for returning users
      initializeApp(preferences).finally(() => setLoadingMessage(''));
    } else {
      setShowOnboarding(true);
    }
  }, [initializeApp]);
  
  // Attempt to play background music on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Lower volume for background music
      audio.play().catch(e => console.warn("Background music couldn't play automatically:", e));
    }
  }, []);

  const handleOnboardingComplete = async (preferences: UserPreferences) => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    localStorage.setItem('hasCompletedOnboarding', 'true');
    await initializeApp(preferences);
    setShowOnboarding(false);
  };
  
  const shuffledDays = useMemo(() => {
    const days = Array.from({ length: 24 }, (_, i) => i + 1);
    for (let i = days.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [days[i], days[j]] = [days[j], days[i]];
    }
    return days;
  }, []);

  const doorDesigns = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      illustration: illustrations[i % illustrations.length],
      colors: colors[i % colors.length],
      giftWrapStyle: giftWrapStyles[i % giftWrapStyles.length],
    }));
  }, []);
  
  const handleDoorClick = useCallback(async (day: number) => {
    const recipe = recipesCache.get(day);

    if (!recipe) {
      setError('Could not find the recipe for this day. Something went wrong during initialization.');
      return;
    }

    let finalRecipe = recipe;

    // Generate image only if it doesn't exist in the cache
    if (!recipe.imageUrl) {
      setLoadingMessage('Baking your festive image...');
      try {
        const imageUrl = await generateRecipeImage(recipe.recipeName);
        finalRecipe = { ...recipe, imageUrl };

        // Update state
        const updatedCache = new Map(recipesCache);
        updatedCache.set(day, finalRecipe);
        setRecipesCache(updatedCache);

        // Update localStorage with the new image URL
        const storedPrefs = localStorage.getItem('userPreferences');
        const preferences = storedPrefs ? JSON.parse(storedPrefs) : { allergies: [], dietary: [] };
        const storageKey = `adventCalendarRecipes_${JSON.stringify(preferences)}`;
        const recipesArray = Array.from(updatedCache.values());
        localStorage.setItem(storageKey, JSON.stringify(recipesArray));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred while generating the image.');
        setLoadingMessage('');
        return;
      } finally {
        setLoadingMessage('');
      }
    }

    setCurrentRecipe(finalRecipe);
    setIsModalOpen(true);
    setOpenedDays(prev => new Set(prev).add(day));

    if (day === nextUnlockedDay) {
      setNextUnlockedDay(day + 1);
    }
  }, [recipesCache, nextUnlockedDay]);

  const handleLockedDoorClick = () => {
    if (!showAngrySnowman) {
      setShowAngrySnowman(true);
    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentRecipe(null);
  };
  
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMutedState = !isMuted;
    audio.muted = newMutedState;
    setIsMuted(newMutedState);

    // If audio is paused (e.g., by browser policy), try playing it again on first unmute.
    if (audio.paused) {
      audio.play().catch(e => console.warn("Could not play audio on user interaction:", e));
    }
  };

  const allRecipes = useMemo(() => Array.from(recipesCache.values()), [recipesCache]);
  
  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="bg-stone-100 min-h-screen">
      <audio 
        ref={audioRef} 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Jingle_Bells_instrumental_lower.mp3" 
        loop 
        preload="auto" 
        muted
      />
      <main className="container mx-auto px-4 py-8 relative">
        <button
            onClick={toggleMute}
            className="fixed top-4 right-4 z-50 p-2 bg-white/50 rounded-full text-gray-700 hover:bg-white/80 transition-colors shadow-md backdrop-blur-sm"
            aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
            {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
            )}
        </button>
        <Header />

        <nav className="flex justify-center mb-8 gap-4" style={{ fontFamily: "'Gaegu', cursive" }}>
          <button
            onClick={() => setView('calendar')}
            className={`px-6 py-2 rounded-full text-2xl font-bold transition-colors duration-200 ${
              view === 'calendar' ? 'bg-red-500 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-red-100'
            }`}
          >
            Advent Calendar
          </button>
          <button
            onClick={() => setView('shoppingList')}
            className={`px-6 py-2 rounded-full text-2xl font-bold transition-colors duration-200 ${
              view === 'shoppingList' ? 'bg-red-500 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-red-100'
            }`}
            disabled={allRecipes.length < 24}
          >
            Shopping List
          </button>
        </nav>

        {error && (
          <div className="text-center mb-8 p-4 bg-red-100 text-red-700 rounded-lg max-w-md mx-auto" style={{ fontFamily: "'Gaegu', cursive" }}>
            <p className="font-bold text-xl">Oops, a snowball fight in the kitchen!</p>
            <p>{error}</p>
            <button onClick={() => setError(null)} className="mt-2 font-bold underline">Dismiss</button>
          </div>
        )}
        
        {!isInitialized && !loadingMessage && !error && (
            <div className="text-center text-gray-500">Initializing calendar...</div>
        )}

        {view === 'calendar' && isInitialized && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {shuffledDays.map((day) => (
              <CalendarDoor
                key={day}
                day={day}
                isLocked={day > nextUnlockedDay}
                isOpened={openedDays.has(day)}
                imageUrl={recipesCache.get(day)?.imageUrl}
                design={doorDesigns[day - 1]}
                onClick={handleDoorClick}
                onLockedClick={handleLockedDoorClick}
              />
            ))}
          </div>
        )}

        {view === 'shoppingList' && allRecipes.length === 24 && (
          <ShoppingList recipes={allRecipes} />
        )}

        <footer className="text-center mt-12 text-gray-500">
          <p>Crafted with Gemini. Happy Holidays!</p>
        </footer>
      </main>

      {loadingMessage && (
        loadingMessage.startsWith('Baking') ?
        <GingerbreadSpinner message={loadingMessage} /> :
        <LoadingSpinner message={loadingMessage} />
      )}
      <AngrySnowman show={showAngrySnowman} onHide={() => setShowAngrySnowman(false)} />
      <RecipeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        recipe={currentRecipe}
      />
    </div>
  );
};

export default App;