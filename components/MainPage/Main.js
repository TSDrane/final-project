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
            {recipeData && <h1>{recipeData.strMeal}</h1>}
        </div>
        </>    
    );
};

export { MainPage }