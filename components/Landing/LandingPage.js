import Link from "next/link";
import { Button } from "@mui/material";
import styles from './landing-page.module.css'

const LandingPage = () => {
    return (
        <div className={styles.landing}>
            <h1>Welcome to FeedMe!</h1>
                <p>Explore an array of diverse recipes 
                sourced from every corner of the globe. 
                Whether you crave the spice of Indian curry, 
                the comfort of Italian pasta, or the freshness of Japanese sushi, 
                FeedMe has you covered.
                </p>
                <p>Click the button below to embark on your gastronomic journey 
                and discover your next favorite recipe!</p>
            <Link href="/main">
                <Button variant="contained">Go!</Button>
            </Link>
        </div>

    )
}

export { LandingPage }