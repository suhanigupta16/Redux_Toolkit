import React from "react";
import styles from "../footer/footer.module.scss";
import { FaLinkedin } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <h3>Contact Us</h3>
          <p>Email:abcd2000@gmail.com</p>
          <p>Phone: +345678844</p>
          <p>Address: Big Bazar</p>
        </div>

        <div className={styles.footerContent}>
          <h3>Quick Links</h3>
          <ul className={styles.list}>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>

        <div className={styles.footerContent}>
          <h3>Follow Us</h3>
          <ul className={styles.socialIcons}>
            <li>
              <FaLinkedin className={styles.icon} />
            </li>
            <li>
              <AiFillInstagram className={styles.icon} />
            </li>
            <li>
              <AiFillFacebook className={styles.icon} />
            </li>
            <li>
              <AiFillTwitterSquare className={styles.icon} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
