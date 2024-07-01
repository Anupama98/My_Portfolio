import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anupama</h1>
        <p className={styles.description}>
          I'm a full-stack developer With 5 years of experience in web development, I have a strong command over both front-end and back-end technologies, 
          allowing me to build complete and scalable applications.
        </p>
        <a href="mailto:anupama.imella@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};