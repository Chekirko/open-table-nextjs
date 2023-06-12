import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-lime-500 font-bold text-7xl">Hello! Let's go!</h1>
    </main>
  );
}
