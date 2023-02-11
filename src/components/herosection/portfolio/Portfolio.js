import React from "react";
import styles from "./Portfolio.module.css";
import shoppingzone from "./shoppingzone.png";
import admindash from "./admindash.png";
import pharmacy from './pharmacy.png';
import note from './note.png';
import spotify from './spotify.png';
import { BsLink45Deg } from "react-icons/bs";

function Portfolio() {
  return (
    <div>
      <div className={styles.section} id='portfolio'>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              <span>Portfolio</span>
            </h2>
            <div className={styles.subtitle}>
              <span>Latest works</span>
            </div>
          </div>
          <div className={styles.boxItems}>
            <div
              className={styles.boxCol}
              style={{ left: "0", top: "0", position: "absolute" }}
            >
              <div className={styles.boxItem}>
                <div className={styles.image}>
                  <a href="https://shoppingzone23.netlify.app" target="_blank">
                    <img
                      decoding="async"
                      src={shoppingzone}
                      alt="shoppingzone"
                    />
                    <span className={styles.info}>
                      <span className={styles.centralize}>
                        <span className={styles.verticalCenter}>
                          <BsLink45Deg className={styles.icon} />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className={styles.desc}>
                  <div className={styles.category}>Web development</div>
                  <a
                    href="https://shoppingzone23.netlify.app"
                    className={styles.name}
                    target="_blank"
                  >
                    shoppingzone
                  </a>
                </div>
              </div>
            </div>
            <div
              className={styles.boxCol}  id={styles.item2}
            >
              <div className={styles.boxItem}>
                <div className={styles.image}>
                  <a
                    href="https://devansh-bharadwaj.github.io/EdyodaReactFinal/"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      src={admindash}
                      alt="admindashboard"
                    />
                    <span className={styles.info}>
                      <span className={styles.centralize}>
                        <span className={styles.verticalCenter}>
                          <BsLink45Deg className={styles.icon} />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className={styles.desc}>
                  <div className={styles.category}>Web development</div>
                  <a
                    href="https://devansh-bharadwaj.github.io/EdyodaReactFinal/"
                    className={styles.name}
                    target="_blank"
                  >
                    Admin dashboard
                  </a>
                </div>
              </div>
            </div>
            <div
              className={styles.boxCol}  id={styles.item3}
            >
              <div className={styles.boxItem}>
                <div className={styles.image}>
                  <a
                    href="https://devansh-bharadwaj.github.io/pharmacyProducts/"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      src={pharmacy}
                      alt="pharmacy"
                    />
                    <span className={styles.info}>
                      <span className={styles.centralize}>
                        <span className={styles.verticalCenter}>
                          <BsLink45Deg className={styles.icon} />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className={styles.desc}>
                  <div className={styles.category}>Web development</div>
                  <a
                    href="https://devansh-bharadwaj.github.io/pharmacyProducts/"
                    className={styles.name}
                    target="_blank"
                  >
                    Pharmacy webApp
                  </a>
                </div>
              </div>
            </div>
            <div
              className={styles.boxCol} id={styles.item4}
            >
              <div className={styles.boxItem}>
                <div className={styles.image}>
                  <a
                    href="https://devansh-bharadwaj.github.io/Magic-Note/"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      src={note}
                      alt="note"
                    />
                    <span className={styles.info}>
                      <span className={styles.centralize}>
                        <span className={styles.verticalCenter}>
                          <BsLink45Deg className={styles.icon} />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className={styles.desc}>
                  <div className={styles.category}>Web development</div>
                  <a
                    href="https://devansh-bharadwaj.github.io/Magic-Note/"
                    className={styles.name}
                    target="_blank"
                  >
                    Magic notes
                  </a>
                </div>
              </div>
            </div>
            <div
              className={styles.boxCol} id={styles.item5}
            >
              <div className={styles.boxItem}>
                <div className={styles.image}>
                  <a
                    href="https://devansh-bharadwaj.github.io/spotify-clone/"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      src={spotify}
                      alt="spotify"
                    />
                    <span className={styles.info}>
                      <span className={styles.centralize}>
                        <span className={styles.verticalCenter}>
                          <BsLink45Deg className={styles.icon} />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className={styles.desc}>
                  <div className={styles.category}>Web development</div>
                  <a
                    href="https://devansh-bharadwaj.github.io/spotify-clone/"
                    className={styles.name}
                    target="_blank"
                  >
                    Spotify clone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
