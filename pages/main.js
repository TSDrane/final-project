
import { MainPage } from "@/components/MainPage/MainPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className={inter.className}>
            <MainPage />
        </div>
    );
}