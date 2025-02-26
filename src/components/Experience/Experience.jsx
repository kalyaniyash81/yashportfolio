import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/html.png" alt="HTML" />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/css.png" alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp\skills\JavaScript-logo.png" alt="JavaScript" style={{height:"75px",width:"75px"}}/>
            </div>
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/react.png" alt="React" />
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/node.png" alt="Node.js" />
            </div>
            <p>Node.js</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/exp.png" alt="Express.js" style={{height:"75px",width:"75px"}}/>
            </div>
            <p>Express.js</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/mongodb.png" alt="MongoDB" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/restful.png" alt="MySQL" style={{height:"75px",width:"75px"}}/>
            </div>
            <p>Restful Api</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/git.png" alt="Git" style={{height:"75px",width:"75px"}} />
            </div>
            <p>Git&Github</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/java.png" alt="MySQL" />
            </div>
            <p>Java</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/Python-logo-notext.svg.png" alt="MySQL" />
            </div>
            <p>Python</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assetsp/skills/sql.webp" alt="MySQL" style={{height:"75px",width:"75px"}}/>
            </div>
            <p>MySql</p>
          </div>
        </div>
      </div>
    </section>
  );
};
