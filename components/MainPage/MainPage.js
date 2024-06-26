import { useState, useEffect } from 'react';
import { DisplayRecipe } from '../Recipe/DisplayRecipe';
import styles from "./main-page.module.css";
import Button from '@mui/material/Button';
import SplitButton from '../Button/SplitButton';



const MainPage = ()=> {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        
        const loadRandomRecipe = async () => {
        try {
            setLoading(true);
            const url = `https://www.themealdb.com/api/json/v1/1/random.php`
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setRecipe(data.meals[0])
            setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error); 
            setLoading(false);
        }
    };
    loadRandomRecipe();

    }, []);

const fetchBreakfast = async () => {
    try {
    setLoading(true);
    const responseBreakfast = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
    if (!responseBreakfast.ok) {
        throw new Error(`HTTP error! status: ${responseBreakfast.status}`);
    }
    const dataBreakfast = await responseBreakfast.json();

    const randomIndex = Math.floor(Math.random() * dataBreakfast.meals.length);
    const randomRecipeId = dataBreakfast.meals[randomIndex].idMeal;

    const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
    if (!recipeResponse.ok) {
        throw new Error(`HTTP error! status: ${responseBreakfast.status}`);
    }
    const recipeData = await recipeResponse.json();

    setRecipe(recipeData.meals[0]);
    setLoading(false);
    } catch (error) {
        console.log("Failed to fetch recipe: ", error);
        setLoading(false); 
    }
};

const fetchBeef = async () => {
    try {
        setLoading(true);
        const responseBeef = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
        if (!responseBeef.ok) {
            throw new Error(`HTTP error! status: ${responseBeef.status}`);
        }
        const dataBeef = await responseBeef.json();
    
        const randomIndex = Math.floor(Math.random() * dataBeef.meals.length);
        const randomRecipeId = dataBeef.meals[randomIndex].idMeal;
    
        const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
        if (!recipeResponse.ok) {
            throw new Error(`HTTP error! status: ${responseBeef.status}`);
        }
        const recipeData = await recipeResponse.json();
    
        setRecipe(recipeData.meals[0]);
        setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error);
            setLoading(false); 
        }
};

const fetchChicken = async () => {
    try {
        setLoading(true);
        const responseChicken = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
        if (!responseChicken.ok) {
            throw new Error(`HTTP error! status: ${responseChicken.status}`);
        }
        const dataChicken = await responseChicken.json();
    
        const randomIndex = Math.floor(Math.random() * dataChicken.meals.length);
        const randomRecipeId = dataChicken.meals[randomIndex].idMeal;
    
        const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
        if (!recipeResponse.ok) {
            throw new Error(`HTTP error! status: ${responseChicken.status}`);
        }
        const recipeData = await recipeResponse.json();
    
        setRecipe(recipeData.meals[0]);
        setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error);
            setLoading(false); 
        }
};

const fetchLamb = async () => {
    try {
        setLoading(true);
        const responseLamb = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb');
        if (!responseLamb.ok) {
            throw new Error(`HTTP error! status: ${responseLamb.status}`);
        }
        const dataLamb = await responseLamb.json();
    
        const randomIndex = Math.floor(Math.random() * dataLamb.meals.length);
        const randomRecipeId = dataLamb.meals[randomIndex].idMeal;
    
        const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
        if (!recipeResponse.ok) {
            throw new Error(`HTTP error! status: ${responseLamb.status}`);
        }
        const recipeData = await recipeResponse.json();
    
        setRecipe(recipeData.meals[0]);
        setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error);
            setLoading(false); 
        }
};

const fetchPork = async () => {
    try {
        setLoading(true);
        const responsePork = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork');
        if (!responsePork.ok) {
            throw new Error(`HTTP error! status: ${responsePork.status}`);
        }
        const dataPork = await responsePork.json();
    
        const randomIndex = Math.floor(Math.random() * dataPork.meals.length);
        const randomRecipeId = dataPork.meals[randomIndex].idMeal;
    
        const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
        if (!recipeResponse.ok) {
            throw new Error(`HTTP error! status: ${responsePork.status}`);
        }
        const recipeData = await recipeResponse.json();
    
        setRecipe(recipeData.meals[0]);
        setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error);
            setLoading(false); 
        }
};

const fetchPasta = async () => {
    try {
        setLoading(true);
        const responsePasta = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta');
        if (!responsePasta.ok) {
            throw new Error(`HTTP error! status: ${responsePasta.status}`);
        }
        const dataPasta = await responsePasta.json();
    
        const randomIndex = Math.floor(Math.random() * dataPasta.meals.length);
        const randomRecipeId = dataPasta.meals[randomIndex].idMeal;
    
        const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
        if (!recipeResponse.ok) {
            throw new Error(`HTTP error! status: ${responsePasta.status}`);
        }
        const recipeData = await recipeResponse.json();
    
        setRecipe(recipeData.meals[0]);
        setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error);
            setLoading(false); 
        }
};

const fetchSeafood = async () => {
    try {
        setLoading(true);
        const responseSeafood = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        if (!responseSeafood.ok) {
            throw new Error(`HTTP error! status: ${responseSeafood.status}`);
        }
        const dataSeafood = await responseSeafood.json();
    
        const randomIndex = Math.floor(Math.random() * dataSeafood.meals.length);
        const randomRecipeId = dataSeafood.meals[randomIndex].idMeal;
    
        const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
        if (!recipeResponse.ok) {
            throw new Error(`HTTP error! status: ${responseSeafood.status}`);
        }
        const recipeData = await recipeResponse.json();
    
        setRecipe(recipeData.meals[0]);
        setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error);
            setLoading(false); 
        }
};

const fetchVegetarian = async () => {
    try {
        setLoading(true);
        const responseVegetarian = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
        if (!responseVegetarian.ok) {
            throw new Error(`HTTP error! status: ${responseVegetarian.status}`);
        }
        const dataVegetarian = await responseVegetarian.json();
    
        const randomIndex = Math.floor(Math.random() * dataVegetarian.meals.length);
        const randomRecipeId = dataVegetarian.meals[randomIndex].idMeal;
    
        const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
        if (!recipeResponse.ok) {
            throw new Error(`HTTP error! status: ${responseVegetarian.status}`);
        }
        const recipeData = await recipeResponse.json();
    
        setRecipe(recipeData.meals[0]);
        setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error);
            setLoading(false); 
        }
};

const fetchDessert = async () => {
    try {
        setLoading(true);
        const responseDessert = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
        if (!responseDessert.ok) {
            throw new Error(`HTTP error! status: ${responseDessert.status}`);
        }
        const dataDessert = await responseDessert.json();
    
        const randomIndex = Math.floor(Math.random() * dataDessert.meals.length);
        const randomRecipeId = dataDessert.meals[randomIndex].idMeal;
    
        const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`);
        if (!recipeResponse.ok) {
            throw new Error(`HTTP error! status: ${responseDessert.status}`);
        }
        const recipeData = await recipeResponse.json();
    
        setRecipe(recipeData.meals[0]);
        setLoading(false);
        } catch (error) {
            console.log("Failed to fetch recipe: ", error);
            setLoading(false); 
        }
};

const mealCategories = ["Beef Mains","Chicken Mains","Lamb Mains","Pork Mains","Pasta Mains","Seafood Mains","Vegetarian Mains"];
const mealCategoryFetchFunctions = [
    fetchBeef,
    fetchChicken,
    fetchLamb,
    fetchPork,
    fetchPasta,
    fetchSeafood,
    fetchVegetarian
];

const resetView = () => {
    window.scrollTo ({
        top:0,
        behaviour: "smooth"
    });
};

return (
    <div>
        <div className={styles.head}>
        <h1 className={styles.feedMe}>FeedMe</h1>
        <Button className={styles.recipeButtons} variant="contained" onClick={()=> {fetchBreakfast(); resetView();}}>Breakfast</Button>
        <SplitButton mealCategories={mealCategories} mealCategoryFetchFunctions={mealCategoryFetchFunctions} />
        <Button className={styles.recipeButtons} variant="contained" onClick={()=> {fetchDessert(); resetView();}}>Desserts</Button>
        </div>
        <div className={styles.content}>
        {loading ? (
            <p className={styles.loading}>🔎 Finding Recipe...</p>
        ):(
            recipe && <DisplayRecipe recipe={recipe} />
        )}
        </div>
    </div>
);
}

export { MainPage };