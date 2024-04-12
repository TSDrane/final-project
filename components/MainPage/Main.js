import { DisplayRandomRecipe } from "../Recipe/RandomRecipe";

const MainPage = ()=> {
    return (
        <>
            <div>
                <h1>Feed Me!</h1>
                <button>Breakfast</button>
                <button>Lunch/Dinner (Non Veg)</button>
                <button>Lunch/Dinner (Veg)</button>
                <button>Desserts</button>
            </div>
            <DisplayRandomRecipe />
        </>    
    );
};

export { MainPage }