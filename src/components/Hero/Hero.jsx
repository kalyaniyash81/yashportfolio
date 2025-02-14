import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>
          Hi, I'm <br />
          <span className={styles.name}>Yash Kalyani</span>
        </h1>
        <p className={styles.description}>
          I'm a Software Engineer skilled in Python, Java
          and Full-Stack Development using React, Node.js, Express.js, and MongoDB.
          Reach out if you'd like to collaborate!
        </p>
        <a href="mailto:kalyaniyash81@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assets/about/myimg.webp"
        alt="Hero image of Yash"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
