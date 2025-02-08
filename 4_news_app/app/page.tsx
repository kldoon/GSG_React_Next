import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Header from "@/components/header/Header";
import LatestNews from "@/components/latest-news/LatestNews";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <LatestNews />
    </div>
  );
}
