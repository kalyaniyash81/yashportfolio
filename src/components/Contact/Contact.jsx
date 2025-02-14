import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assetsp/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:kalyaniyash81@gmail.com">kalyaniyash81@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="assetsp/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/yash-kalyani-729056235/" target="_blank" rel="noopener noreferrer">
            Yash Kalyani
          </a>
        </li>
        <li className={styles.link}>
          <img src="assetsp/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/kalyaniyash81" target="_blank" rel="noopener noreferrer">
            kalyaniyash81
          </a>
        </li>
      </ul>
    </footer>
  );
};
