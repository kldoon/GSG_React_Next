import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />      
      <Categories />
    </div>
  );
}
