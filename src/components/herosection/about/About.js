import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.section}  id='about'>
      <div className={styles.content}>
        <div className={styles.titles}>
          <h2 className={styles.title}>
            <span>About me</span>
          </h2>
          <div className={styles.subtitle}>
            <span>My Story</span>
          </div>
        </div>
        <div className={styles.about}>
          <p>
            Hi! My name is Devansh. I completed B.Tech in Electrical Engineering
            from BIET Jhansi. And recently, I completed a 4 months training of
            React developer from Edyoda Digital University. Now, I am pretty
            confidant to work with frontend technologies.
          </p>
        </div>
      </div>
      <div className={styles.infoList}>
        <ul>
          <li>
            <strong>
              <span>Age: </span>
            </strong>
            <span>24</span>
          </li>
          <li>
            <strong>
              <span>Residance: </span>
            </strong>
            <span>India</span>
          </li>
          <li>
            <strong>
              <span>Freelance: </span>
            </strong>
            <span>Available</span>
          </li>
          <li>
            <strong>
              <span>Address: </span>
            </strong>
            <span>Kasganj, Uttar Pradesh</span>
          </li>
          <li>
            <strong>
              <span>Phone: </span>
            </strong>
            <span>+919149117878</span>
          </li>
          <li>
            <strong>
              <span>Email: </span>
            </strong>
            <span>devanshbharadwaj1@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
