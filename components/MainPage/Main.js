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

const fetchBreakfast = async () => {

    const responseBreakfast = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
    const dataBreakfast = await responseBreakfast.json();

    const randomIndex = Math.floor(Math.random() * dataBreakfast.meals.length);
    const randomRecipeId = dataBreakfast.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchMains = async () => {

    const responseBeef = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
    const dataBeef = await responseBeef.json();

    const responseChicken = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
    const dataChicken = await responseChicken.json();

    const responseLamb = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb');
    const dataLamb = await responseLamb.json();

    const responsePork = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork');
    const dataPork = await responsePork.json();

    const responsePasta = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta');
    const dataPasta = await responsePasta.json();

    const seafoodResponse = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const dataSeafood = await seafoodResponse.json();

    const recipes = [
        ...dataBeef.meals,
        ...dataChicken.meals,
        ...dataLamb.meals,
        ...dataPork.meals,
        ...dataPasta.meals,
        ...dataSeafood.meals
    ];

    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipeId = recipes[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchVegetarian = async () => {

    const responseVegetarian = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
    const dataVegetarian= await responseVegetarian.json();
    const responseVegan = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan');
    const dataVegan= await responseVegan.json();

    const recipes = [
        ...dataVegetarian.meals,
        ...dataVegan.meals
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
    <button onClick={fetchBreakfast}>Get Breakfast</button>
    <button onClick={fetchMains}>Get Main Meals</button>
    <button onClick={fetchVegetarian}>Get Main Vegetarian Meals</button>
    {recipe && <DisplayRecipe recipe={recipe} />}
    </div>
);
}

export { MainPage };