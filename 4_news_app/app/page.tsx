import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import LatestNews from "@/components/latest-news/LatestNews";
import Categories from "@/components/categories/Categories";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <LatestNews />
      <Categories />
    </div>
  );
}
