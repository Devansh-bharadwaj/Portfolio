import React from "react";
import styles from "./Experience.module.css";
// import { GrPrevious, GrNext } from 'react-icons/gr';

function Experience() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              <span>Experience</span>
            </h2>
            <div className={styles.subtitle}>
              <span>Working with</span>
            </div>
          </div>
          <div className={styles.contentItem}>
            <div className={styles.myContent}>
              <div className={styles.myContentOuter}>
                <div className={styles.contentStage}>
                  <div className={styles.contentStageItem}>
                    <div>
                      <div className={styles.date}>
                        <span>Present</span>
                      </div>
                      <div className={styles.name}>
                        CoFynd Infotech<br></br> Pvt. Ltd.
                      </div>
                      <div className={styles.singlePostText}>
                        <div>
                          <p>
                            As a <strong>web developer</strong>, I create and
                            maintain my company's websites to ensure their
                            functionality, aesthetics, and user experience are
                            optimal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
