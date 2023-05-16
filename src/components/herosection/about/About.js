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
          Hello, I'm Devansh! With a Bachelor's degree in Electrical Engineering from BIET Jhansi and a recent 4-month training in React development from Edyoda Digital University, I'm a confident and skilled frontend web developer. My diverse educational background and training in web development have equipped me with a unique set of skills that I'm eager to apply in the tech industry. I'm passionate about creating dynamic and engaging user interfaces and constantly strive to stay up-to-date with the latest advancements in the field.
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
