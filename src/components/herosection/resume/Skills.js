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
                <span>HTML</span>
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
                <span>CSS</span>
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
                <span>Javascript</span>
              </div>
              <div className={styles.singlePostText}>
                <div></div>
              </div>
              <div className={styles.progress}>
                <div className={styles.percentage} style={{ width: "75%" }}>
                  <span className={styles.percent}>
                    <span>75%</span>
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
                    <span>70%</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.name}>
                <span>MongoDb</span>
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
            <li>
              <div className={styles.name}>
                <span>Express</span>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
