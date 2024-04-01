import Page from "@/components/MainPage/Main";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Page />
    </div>
  );
}
