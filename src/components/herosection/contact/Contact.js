import React from "react";
import styles from "./Contact.module.css";
import { GrNext } from "react-icons/gr";

function Contact() {
  return (
    <div>
      <div className={styles.section} id="contact">
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              <span>Contact</span>
            </h2>
            <div className={styles.subtitle}>
              <span>Let's talk</span>
            </div>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.screenReaderResponse}>
              <p role="status" aria-live="polite" aria-atomic="true"></p>
              <ul></ul>
            </div>
            <form action="https://formspree.io/f/xdovezvq" method="post">
              <div className={styles.groupVal}>
                <div className={styles.label}>
                  <p>
                    Full Name<strong>*</strong>
                  </p>
                </div>
                <p>
                  <span className={styles.formControlWrap}>
                    <input
                      name="name"
                      size="40"
                      type="text"
                      placeholder="e.g.:Devansh"
                      required
                    />
                  </span>
                </p>
              </div>
              <div className={styles.groupVal}>
                <div className={styles.label}>
                  <p>
                    Email address<strong>*</strong>
                  </p>
                </div>
                <p>
                  <span className={styles.formControlWrap}>
                    <input
                      action="https://formspree.io/f/xdovezvq"
                      method="post"
                      name="email"
                      size="40"
                      type="email"
                      placeholder="example@gmail.com"
                      required
                    />
                  </span>
                </p>
              </div>
              <div className={styles.groupVal}>
                <div className={styles.label}>
                  <p>
                    Message<strong>*</strong>
                  </p>
                </div>
                <p>
                  <span className={styles.formControlWrap}>
                    <textarea
                      action="https://formspree.io/f/xdovezvq"
                      method="post"
                      name="message"
                      cols="40"
                      rows="10"
                      area-required="true"
                      type="text"
                      placeholder="To Write"
                      required
                    />
                  </span>
                </p>
              </div>
              <div className={styles.groupBts}>
                <p>
                  <button type="submit" className={styles.btn}>
                    <span>
                      Send message <GrNext className={styles.icon} />
                    </span>
                  </button>
                </p>
              </div>
            </form>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.name}>Devansh</div>
            <div className={styles.subname}>Get every single solution</div>
            <div className={styles.infoList}>
              <ul>
                <li>
                  <strong>
                    <span> Age: </span>
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
            <div className={styles.author}>Devansh</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
