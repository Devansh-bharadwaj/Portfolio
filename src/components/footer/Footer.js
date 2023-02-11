import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div>
        <div className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.text}>Design and developed by Devansh.</div>
                <div className={styles.socials}>
                    <a href="https://www.facebook.com/profile.php?id=100004446435120" target="_blank">
                        <FaFacebookF className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/sketch_with_deva/" target="_blank">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/devansh-bharadwaj/" target="_blank">
                        <FaLinkedinIn className={styles.icon} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer