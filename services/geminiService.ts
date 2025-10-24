import { GoogleGenAI } from "@google/genai";
import { Recipe, UserPreferences } from '../types';
import { fallbackRecipes, FallbackRecipe } from '../data/fallbackRecipes';

const geminiClient = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to map the fallback data structure to our app's Recipe type
const mapFallbackToRecipe = (fallback: FallbackRecipe): Recipe => {
  let flatIngredients: string[] = [];

  // Check if ingredients is a nested object (like for Bûche de Noël)
  if (typeof fallback.ingredients === 'object' && !Array.isArray(fallback.ingredients) && fallback.ingredients !== null) {
    for (const key in fallback.ingredients) {
      // Add a non-ingredient string as a subheading
      flatIngredients.push(`For the ${key}:`); 
      flatIngredients.push(...(fallback.ingredients as Record<string, string[]>)[key]);
    }
  } else {
    flatIngredients = fallback.ingredients as string[];
  }

  return {
    recipeName: fallback.title,
    ingredients: flatIngredients,
    instructions: fallback.instructions,
  };
};

export const generateAllDessertRecipes = async (preferences: UserPreferences): Promise<Recipe[]> => {
  try {
    const NUM_BATCHES = 5;
    const BATCH_SIZE = 5;
    const allRecipesData = [];

    const recipeSchema = {
        type: 'object', properties: {
          recipeName: { type: 'string' },
          ingredients: { type: 'array', items: { type: 'string' } },
          instructions: { type: 'array', items: { type: 'string' } },
        }, required: ['recipeName', 'ingredients', 'instructions'],
    };

    for (let i = 0; i < NUM_BATCHES; i++) {
      let prompt = `Generate a list of ${BATCH_SIZE} unique and festive dessert recipes for a Christmas advent calendar.`;

      if (preferences.dietary.length > 0) {
        prompt += ` All recipes must be ${preferences.dietary.join(' and ')}.`;
      }
      if (preferences.allergies.length > 0) {
        prompt += ` The recipes must be completely free of the following ingredients: ${preferences.allergies.join(', ')}.`;
      }
      
      const response = await geminiClient.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: { type: 'array', items: recipeSchema },
        },
      });

      const jsonString = response.text;
      try {
        const recipesData = JSON.parse(jsonString);
        if (!Array.isArray(recipesData)) {
          console.warn(`Batch ${i + 1} did not return a valid array. Skipping.`);
          continue;
        }
        allRecipesData.push(...recipesData);
      } catch (parseError) {
        console.error(`Failed to parse JSON for batch ${i + 1}:`, parseError, "Received string:", jsonString);
        continue;
      }

      if (i < NUM_BATCHES - 1) {
        await delay(1000); // 1-second delay
      }
    }

    const allRecipes: Recipe[] = [];
    const uniqueRecipeNames = new Set<string>();
    for (const recipe of allRecipesData) {
      if (recipe && recipe.recipeName && !uniqueRecipeNames.has(recipe.recipeName)) {
        uniqueRecipeNames.add(recipe.recipeName);
        allRecipes.push(recipe);
      }
    }

    if (allRecipes.length < 24) {
      throw new Error(`Failed to generate 24 unique recipes. Only got ${allRecipes.length}. Please try again.`);
    }

    return allRecipes.slice(0, 24);

  } catch (error) {
    const errorMessage = String(error);

    // If a rate limit error occurs, it's an expected condition. Log a warning and use the fallback.
    if (errorMessage.includes('429') || errorMessage.includes('RESOURCE_EXHAUSTED')) {
       console.warn("API rate limit hit. Using fallback recipe data.", error);
       return fallbackRecipes.map(mapFallbackToRecipe).slice(0, 24);
    }

    // For any other type of error, log it as a critical error and throw so the UI can display a message.
    console.error("Error generating all recipes:", error);
    throw new Error("Failed to generate the dessert recipes for the calendar. Please try refreshing the page.");
  }
};


// Image generation remains unchanged, using Gemini's Imagen model.
export const generateRecipeImage = async (recipeName: string): Promise<string> => {
  try {
    const prompt = `A festive, delicious-looking dessert: ${recipeName}. The image should be in the beautiful, whimsical art style of Studio Ghibli, with a cozy, holiday-themed background.`;
    
    const response = await geminiClient.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '1:1',
        },
    });

    if (!response.generatedImages || response.generatedImages.length === 0 || !response.generatedImages[0].image.imageBytes) {
      throw new Error("No image was generated.");
    }

    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
    return `data:image/jpeg;base64,${base64ImageBytes}`;

  } catch (error) {
    console.error("Error generating recipe image:", error);
    throw new Error("Failed to generate a dessert image.");
  }
};