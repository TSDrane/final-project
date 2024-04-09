import { useEffect, useState } from "react";

const DisplayRandomRecipe = ()=> {

    const [recipeData, setRecipeData] = useState(null);

    useEffect (() => {
        
        const fetchRecipe = async () => {
            try {
                const url = `https://www.themealdb.com/api/json/v1/1/random.php`
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
                        {ingredient} - {measurement}
                    </li>
                );
            }
        }

        return ingredients;
        
    };

    const renderInstructions = () => {
        if (!recipeData) return null;
        return recipeData.strInstructions.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
        ));
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
                {renderInstructions()}
            </>
            )}
        </div> 
    )
}

export { DisplayRandomRecipe }