export interface Recipe {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  imageUrl?: string;
}

export interface UserPreferences {
  allergies: string[];
  dietary: string[];
}
