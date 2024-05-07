import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div>
      <div className={styles.section} id="resume">
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              <span>Skills</span>
            </h2>
          </div>
        </div>
        <div className={styles.skills}>
          <ul>
            <li>
              <div className={styles.name}>
                <span>HTML5/CSS3</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "90%" }}>
                  <span className={styles.percent}>
                    <span>90%</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.name}>
                <span>Tailwind CSS</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "80%" }}>
                  <span className={styles.percent}>
                    <span>80%</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.name}>
                <span>Sass/Less</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "65%" }}>
                  <span className={styles.percent}>
                    <span>65%</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.name}>
                <span>Javascript</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "75%" }}>
                  <span className={styles.percent}>
                    <span>85%</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.name}>
                <span>jQuery</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "70%" }}>
                  <span className={styles.percent}>
                    <span>70%</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.name}>
                <span>React.js</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "70%" }}>
                  <span className={styles.percent}>
                    <span>87%</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.name}>
                <span>NextJS</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "60%" }}>
                  <span className={styles.percent}>
                    <span>60%</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.name}>
                <span>NodeJs</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "60%" }}>
                  <span className={styles.percent}>
                    <span>60%</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
