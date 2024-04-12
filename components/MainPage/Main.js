import { useState, useEffect } from 'react';
import { DisplayRecipe } from '../Recipe/DisplayRecipe';


const MainPage = ()=> {
    const [recipe, setRecipe] = useState(null);

    useEffect (() => {
        
        const loadRecipe = async () => {
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/random.php`
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setRecipe(data.meals[0])
        } catch (error) {
            console.log("Failed to fetch recipe: ", error); 
        }
    };
    loadRecipe();

    }, []);

const fetchRandomRecipe = async () => {
    
    const responseBeef = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
    const dataBeef = await responseBeef.json();

    const responseChicken = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
    const dataChicken = await responseChicken.json();

    const recipes = [
        ...dataBeef.meals,
        ...dataChicken.meals
    ];

    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipeId = recipes[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

return (
    <div>
    <h1>Random Global Recipe!</h1>
    <button onClick={fetchRandomRecipe}>Get Main Meals</button>
    {recipe && <DisplayRecipe recipe={recipe} />}
    </div>
);
}

export { MainPage };