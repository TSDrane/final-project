import Page from "@/components/MainPage/TestPage";
import Btn from "@/components/Btn/Btn";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Page />
      <Btn />
      <Btn />
      <Btn />
    </main>
  );
}
