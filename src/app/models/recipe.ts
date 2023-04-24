export class Recipe {
    id: number = 0;
    title: string = "";
    image: string = "";
    servings: number = 0;
    readyInMinutes: number = 0;
    sourceUrl: string = "";
    pricePerServing: number = 0;
    extendedIngredients: Ingredients[] = [];
}

export class Ingredients {
    aisle: string = "";
    amount: number = 0;
    image: string = "";
    name: string = "";
    id: number = 0;
}

export class Random {
    recipes: Recipe[] = [];
}