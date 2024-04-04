import Btn from "../Btn/Btn";
export default function Page() {
    return (
        <div>
            <h1>Feed Me!</h1>
            <Btn text="Breakfast" />
            <Btn text="Lunch/Dinner (Non Veg)" />
            <Btn text="Lunch/Dinner (Veg)" />
            <Btn text="Desserts" />
        </div>
    
    );
};