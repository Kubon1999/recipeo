import { Ingredient } from "./ingredient";

export interface Recipe {
    id: number;
    name: string;
    preparationTimeInMinutes: number;
    description: string;
    ingredients: Ingredient[];
}
