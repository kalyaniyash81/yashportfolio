import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard 
          project={{
            title: "Wanderlust",
            imageSrc: "assets/projects/wanderlust (1).webp",
            description: "An online marketplace connecting travelers with unique accommodations, from private rooms to entire homes.",
            skills: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
            demo: "https://delta-project-8wry.onrender.com/listings",
            source: "https://github.com/kalyaniyash81/delta-project"
          }}
        />
        <ProjectCard 
          project={{
            title: "Investlink",
            imageSrc: "assets/projects/investlink.webp",
            description: "A stock trading platform using sentiment analysis and machine learning to provide accurate stock recommendations.",
            skills: ["React", "MongoDB", "Express", "Node.js", "Machine Learning"],
            demo: "https://www.investlink-demo.com",
            source: "https://github.com/kalyaniyash81/investlink"
          }}
        />
      </div>
    </section>
  );
};
