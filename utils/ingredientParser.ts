import { Recipe } from '../types';

interface ParsedIngredient {
  quantity: number;
  unit: string;
  name: string;
}

interface ConsolidatedIngredient {
  name: string;
  unit: string;
  totalQuantity: number;
}

const KNOWN_UNITS: Record<string, string> = {
  cup: 'cup', cups: 'cup',
  oz: 'oz', ounce: 'oz', ounces: 'oz',
  tbsp: 'tbsp', tablespoon: 'tbsp', tablespoons: 'tbsp',
  tsp: 'tsp', teaspoon: 'tsp', teaspoons: 'tsp',
  g: 'g', gram: 'g', grams: 'g',
  lb: 'lb', lbs: 'lb', pound: 'lb', pounds: 'lb',
  ml: 'ml',
};

// Parses numbers and fractions like "1/2" or "1 1/2"
const parseQuantity = (quantityStr: string): number | null => {
  if (!quantityStr) return null;
  
  if (quantityStr.includes('/')) {
    const parts = quantityStr.split(' ');
    let total = 0;
    if (parts.length > 1) { // Handles "1 1/2"
      total += parseFloat(parts[0]);
      quantityStr = parts[1];
    }
    const fracParts = quantityStr.split('/');
    if (fracParts.length === 2) {
      const num = parseFloat(fracParts[0]);
      const den = parseFloat(fracParts[1]);
      if (den !== 0) {
        total += num / den;
        return total;
      }
    }
    return null; // Invalid fraction
  }
  
  const num = parseFloat(quantityStr);
  return isNaN(num) ? null : num;
};

const parseIngredient = (ingredientStr: string): ParsedIngredient | null => {
  const words = ingredientStr.trim().split(/\s+/);
  if (words.length < 1) return null;

  let quantity: number | null = null;
  let quantityWordCount = 0;

  // Check for "1 1/2" style quantities first
  if (words.length > 1) {
    quantity = parseQuantity(`${words[0]} ${words[1]}`);
    if (quantity !== null) {
      quantityWordCount = 2;
    }
  }

  // If not a mixed fraction, check for a single word quantity
  if (quantity === null) {
    quantity = parseQuantity(words[0]);
    if (quantity !== null) {
      quantityWordCount = 1;
    }
  }

  if (quantity === null || quantityWordCount === 0) {
    return null; // Cannot determine quantity, treat as an "other" item
  }

  let unit: string | null = null;
  let nameStartIndex = quantityWordCount;

  if (words.length > quantityWordCount) {
    const nextWord = words[quantityWordCount].toLowerCase();
    if (KNOWN_UNITS[nextWord]) {
      unit = KNOWN_UNITS[nextWord];
      nameStartIndex++;
    }
  }
  
  // If no unit is found (e.g., "2 eggs"), we'll use a generic unit
  if (!unit) {
    unit = 'item(s)';
  }
  
  let name = words
    .slice(nameStartIndex)
    .join(' ')
    .replace(/^of\s+/, '') // Remove leading "of"
    .trim()
    .toLowerCase();
    
  if (!name) return null;

  return { quantity, unit, name };
};

export const consolidateIngredientsForWeek = (
  recipes: Recipe[]
): { consolidatedList: ConsolidatedIngredient[], otherItems: string[] } => {
  const consolidatedMap = new Map<string, ConsolidatedIngredient>();
  const otherItems: string[] = [];
  
  const allIngredients = recipes.flatMap(r => r.ingredients);

  for (const ingredientStr of allIngredients) {
    const parsed = parseIngredient(ingredientStr);

    if (parsed) {
      const key = `${parsed.name}_${parsed.unit}`;
      const existing = consolidatedMap.get(key);
      if (existing) {
        existing.totalQuantity += parsed.quantity;
      } else {
        consolidatedMap.set(key, {
          name: parsed.name,
          unit: parsed.unit,
          totalQuantity: parsed.quantity,
        });
      }
    } else {
      otherItems.push(ingredientStr);
    }
  }

  const consolidatedList = Array.from(consolidatedMap.values())
    .sort((a, b) => a.name.localeCompare(b.name));
    
  return { consolidatedList, otherItems };
};
