import { useEffect, useState } from "react";

const DisplayRandomRecipe = ()=> {

    const [recipeData, setRecipeData] = useState(null);

    useEffect (() => {
        
        const fetchRecipe = async () => {
            try {
                const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setRecipeData(data.meals[0])
            } catch (error) {
                console.log("Failed to fetch recipe: ", error); 
            }
        };

        fetchRecipe();

    }, []);

    const renderIngredients = () => {
        const ingredients = [];
        for (let i=1; i <= 20; i++){
            const ingredient = recipeData[`strIngredient${i}`];
            const measurement = recipeData[`strMeasure${i}`];
            if (ingredient && measurement) {
                ingredients.push(
                    <li key={i}>
                        {measurement} {ingredient}
                    </li>
                );
            }
        }

        return ingredients;
        
    };
    
    return (    
        <div>
            <h3>Random Recipe!</h3>
            {recipeData && (
                <>
                <h2>{recipeData.strMeal}</h2>
                <img src={recipeData.strMealThumb} alt={recipeData.strMeal} />
                <p>Ingredients:</p>
                <ul>
                    {renderIngredients()}  
                </ul>
                <p>Method:</p>
                <p>{recipeData.strInstructions}</p>
            </>
            )}
        </div> 
    )
}

export { DisplayRandomRecipe }