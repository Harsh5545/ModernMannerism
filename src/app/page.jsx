import Image from "next/image";
import styles from "./home.module.css";
import Hero from "./Home/Hero";
import CardComponent from "./Home/CardComponent";

const Home = () => {

  return (
    <div >

        <Hero/>
        <CardComponent/>
      {/* <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brand" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="hero" unoptimized={true} fill className={styles.heroImg} />
      </div> */}
    </div>
  );
};

export default Home;