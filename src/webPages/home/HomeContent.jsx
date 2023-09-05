import React from "react";
import styles from "../home/home.module.scss";

const Home = () => {
  return (
    <>
      <section className={styles.homeWrapper}>
        <div className={styles.bannerDetails}>
          <div className={styles.text}>
            <span>Trade in Offer!!</span>
            <h1>Super Value Deals</h1>
            <h2 className={styles.text}>On all Products</h2>
            <p>Save more today</p>
            <button className={styles.buttonLink}> Shop now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
