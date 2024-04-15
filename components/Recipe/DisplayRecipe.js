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
        <div className={styles.content}>
            <h2 className={styles.recipeTitle}>{recipe.strMeal}</h2>
            <h3>🌏 {recipe.strArea} {recipe.strCategory} Recipe</h3>
            <img className={styles.recipeImage} src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className={styles.ingrAndInstr}>
                <h2>Ingredients</h2>
                <ul className={styles.ingredientList}>
                {renderIngredients()}
                </ul>
                <h2>Instructions</h2>
                {recipe.strYoutube && (
                    <Button className={styles.openVideo} variant="contained" onClick={openVideo}>Show me</Button>
                )}
                <p className={styles.instructions}>{renderInstructions()}</p>
            </div>
        </div>
    );
}

export { DisplayRecipe };