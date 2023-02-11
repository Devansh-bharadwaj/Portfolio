import React from "react";
import styles from "./Home.module.css";
import dp from "./mypic.jpg";
import Typewriter from "typewriter-effect";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.backgroundBg}>
        <div className={styles.backgroundCircle}>
          <div className={styles.backgroundImg}>
            <img src={dp} alt="dp" />
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.section}>
          <div className={styles.content}>
            <div className={styles.titles}>
              <h2 className={styles.title}>
                <span>Devansh</span>
              </h2>
              <div className={styles.subtitle}>
                <span>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("React Developer!")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Frontend Developer!")
                        .start();
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={styles.hText}>
              <p>
                Hello! I am a quick learner of diffrent technologies and have a
                good knowledge in the field of web development.
              </p>
            </div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={styles.contactBtn}
            >
              <span className={styles.animatedBtn}>
                <span>
                  CONTACT ME <IoIosArrowForward />
                </span>
              </span>
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={styles.downBtn}
            >
              <AiOutlineDown className={styles.iconDown} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
