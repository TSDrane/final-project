import { useState, useEffect } from 'react';
import { DisplayRecipe } from '../Recipe/DisplayRecipe';
import styles from "./main-page.module.css";
import Button from '@mui/material/Button';
import SplitButton from '../Button/SplitButton';



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

const fetchBeef = async () => {

    const responseBeef = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
    const dataBeef= await responseBeef.json();

    const randomIndex = Math.floor(Math.random() * dataBeef.meals.length);
    const randomRecipeId = dataBeef.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchChicken = async () => {

    const responseChicken = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
    const dataChicken= await responseChicken.json();

    const randomIndex = Math.floor(Math.random() * dataChicken.meals.length);
    const randomRecipeId = dataChicken.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchLamb = async () => {

    const responseLamb = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb');
    const dataLamb= await responseLamb.json();

    const randomIndex = Math.floor(Math.random() * dataLamb.meals.length);
    const randomRecipeId = dataLamb.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchPork = async () => {

    const responsePork = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork');
    const dataPork= await responsePork.json();

    const randomIndex = Math.floor(Math.random() * dataPork.meals.length);
    const randomRecipeId = dataPork.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchPasta = async () => {

    const responsePasta = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta');
    const dataPasta= await responsePasta.json();

    const randomIndex = Math.floor(Math.random() * dataPasta.meals.length);
    const randomRecipeId = dataPasta.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchSeafood = async () => {

    const responseSeafood = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const dataSeafood= await responseSeafood.json();

    const randomIndex = Math.floor(Math.random() * dataSeafood.meals.length);
    const randomRecipeId = dataSeafood.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchVegetarian = async () => {

    const responseVegetarian = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
    const dataVegetarian= await responseVegetarian.json();

    const randomIndex = Math.floor(Math.random() * dataVegetarian.meals.length);
    const randomRecipeId = dataVegetarian.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const fetchDessert = async () => {

    const responseDessert = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
    const dataDessert = await responseDessert.json();

    const randomIndex = Math.floor(Math.random() * dataDessert.meals.length);
    const randomRecipeId = dataDessert.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
};

const mealCategory = ["Beef","Chicken","Lamb","Pork","Pasta","Seafood","Vegetarian"];
const mealCategoryFetchFunctions = [
    fetchBeef,
    fetchChicken,
    fetchLamb,
    fetchPork,
    fetchPasta,
    fetchSeafood,
    fetchVegetarian
];

return (
    <div>
        <h1>Random Global Recipe!</h1>
        <div className={styles.recipeButtons}>
        <Button variant="contained" onClick={fetchBreakfast}>Breakfast</Button>
        <Button variant="contained" onClick={fetchMains}>Main Meals</Button>
        <Button variant="contained" onClick={fetchVegetarian}>Vegetarian Meals</Button>
        <Button variant="contained" onClick={fetchDessert}>Desserts</Button>
        </div>
        <SplitButton mealCategory={mealCategory} mealCategoryFetchFunctions={mealCategoryFetchFunctions} />
        {recipe && <DisplayRecipe recipe={recipe} />}
    </div>
);
}

export { MainPage };