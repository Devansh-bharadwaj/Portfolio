import React from 'react';
import styles from './Resume.module.css';
// import { GrPrevious, GrNext } from 'react-icons/gr';

function Resume() {
  return (
    <div className={styles.main}>
        <div className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titles}>
                    <h2 className={styles.title}>
                        <span>Education</span>
                    </h2>
                    <div className={styles.subtitle}>
                        <span>Studied at</span>
                    </div>
                </div>
                <div className={styles.contentItem}>
                    <div className={styles.myContent}>
                        <div className={styles.myContentOuter}>
                            <div className={styles.contentStage}>
                                <div className={styles.contentStageItem}>
                                    <div>
                                        <div className={styles.date}>
                                            <span>2022-2023</span>
                                        </div>
                                        <div className={styles.name}>
                                        EdYoda (zekeLabs Technologies Private Limited)
                                        </div>
                                        <div className={styles.singlePostText}>
                                            <div>
                                                <p>
                                                    I completed a<strong> React developer 
                                                    </strong> training.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.contentStageItem}>
                                    <div>
                                        <div className={styles.date}>
                                            <span>2017-2021</span>
                                        </div>
                                        <div className={styles.name}>
                                            Bundelkhand Institute of <br />
                                            Engineering & Technology, <br/>
                                            Jhansi
                                        </div>
                                        <div className={styles.singlePostText}>
                                            <div>
                                                <p>
                                                    I completed my graduation in <strong>
                                                        Bachelor of Technology in Electrical Engineering
                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.navs}>
                        <span className={styles.prev}>
                            <GrPrevious />
                        </span>
                        <span className={styles.next}>
                            <GrNext />
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume