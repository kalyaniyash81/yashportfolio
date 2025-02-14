import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="assetsp/about/myimg.webp"
          alt="Yash sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="assetsp/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Experienced in building responsive and interactive web applications using  
                React.js, HTML, CSS, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assetsp/about/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Proficient in developing scalable backend systems and RESTful APIs  
                using Node.js, Express.js, MongoDB, and MySQL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assetsp\about\da.webp" alt="Data icon" style={{width:"70px",height:"70px"}} />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                Skilled in data collection, analysis, and visualization using Python, Pandas,  
                NumPy, and Machine Learning techniques to drive insights.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
