import Link from "next/link";
import { Button } from "@mui/material";
import styles from './landing-page.module.css'

const LandingPage = () => {
    return (
        <div className={styles.landing}>
            <h1>Welcome to FeedMe!</h1>
            <p>Here you can find random recipes from all around the globe</p>
            <p>Use the button below to see a recipe!</p>
            <Link href="/main">
                <Button variant="contained">Go!</Button>
            </Link>
        </div>

    )
}

export { LandingPage }