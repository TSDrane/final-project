import { Button } from "../Btn/Btn";
import { DisplayRandomRecipe } from "../Recipe/RandomRecipe";

const MainPage = ()=> {
    return (
        <>
            <div>
                <h1>Feed Me!</h1>
                <Button text="Breakfast" />
                <Button text="Lunch/Dinner (Non Veg)" />
                <Button text="Lunch/Dinner (Veg)" />
                <Button text="Desserts" />
            </div>
            <DisplayRandomRecipe />
        </>    
    );
};

export { MainPage }