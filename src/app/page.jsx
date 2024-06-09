import Image from "next/image";

import styles from "./Home.module.css";

const Home = () => {
  // throw new Error("An error occurred");
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.textHeading}>Creative Thoughts Agency.</h1>
          <p className={styles.textDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </p>
          <div className={styles.textBtnContainer}>
            <button className={styles.textBtns}>Learn More</button>
            <button className={styles.textBtns}>Contact</button>
          </div>
          <div className={styles.brandContainer}>
            <Image
              className={styles.brandImg}
              src="/brands.png"
              alt="brands"
              fill
            />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.gif" alt="hero" fill />
        </div>
      </div>
    </div>
  );
};

export default Home;
