import styles from "./display-recipe.module.css"
import { Button } from "@mui/material";

const DisplayRecipe = ({ recipe }) => {

    const renderIngredients = () => {
        const ingredients = [];
        for (let i=1; i <= 20; i++){
            const ingredient = recipe[`strIngredient${i}`];
            const measurement = recipe[`strMeasure${i}`];
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
        if (!recipe) return null;
        return recipe.strInstructions.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
        ));
    };

    const openVideo = () =>{
        window.open(`${recipe.strYoutube}`, "_blank");
    }

    return (
        <div>
            <h2>{recipe.strMeal}</h2>
            <h4>🌏 {recipe.strArea} {recipe.strCategory} Recipe</h4>
            <img className={styles.recipeImage} src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className={styles.ingrAndInstr}>
                <h3>Ingredients</h3>
                <ul className={styles.ingredientList}>
                {renderIngredients()}
                </ul>
                <h3>Instructions</h3>
                {recipe.strYoutube && (
                    <Button className={styles.openVideo} variant="contained" onClick={openVideo}>Show me how</Button>
                )}
                <p>{renderInstructions()}</p>
            </div>
        </div>
    );
}

export { DisplayRecipe };