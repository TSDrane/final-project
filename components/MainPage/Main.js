import Btn from "../Btn/Btn";
import { useEffect, useState } from "react";

const MainPage = ()=> {
    
    const [recipeData, setRecipeData] = useState(null);

    useEffect (() => {
        
        const fetchRecipe = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
            const response = await fetch(url);
            const data = await response.json();
            setRecipeData(data.meals[0])
        };
        fetchRecipe();
    },[]);


    return (
        <>
        <div>
            <h1>Feed Me!</h1>
            <Btn text="Breakfast" />
            <Btn text="Lunch/Dinner (Non Veg)" />
            <Btn text="Lunch/Dinner (Veg)" />
            <Btn text="Desserts" />
        </div>
        <div>
            <h3>Random Recipe!</h3>
            {recipeData && (
                <>
                <h2>{recipeData.strMeal}</h2>
                <img src={recipeData.strMealThumb}/>
                <p>Ingredients:</p>
                <ul>
                    <li>
                    {recipeData.strMeasure1} {recipeData.strIngredient1}  
                    </li>
                </ul>
                <p>Method:</p>
                <p>{recipeData.strInstructions}</p> 
                </>
            )}
        </div>
        </>    
    );
};

export { MainPage }