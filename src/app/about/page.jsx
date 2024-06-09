import Image from "next/image";

import styles from "./About.module.css";

export const metadata = {
  title: "About page",
  description: "Next.js starter app About page",
};

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.aboutHeading}>About Agency</h2>
        <h1 className={styles.aboutTitle}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.aboutDesc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision. We're world's. Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1 className={styles.boxHeading}>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.boxHeading}>234 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.boxHeading}>5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image className={styles.aboutImg} src="/about.png" alt="about" fill />
      </div>
    </div>
  );
}

export default AboutPage;
