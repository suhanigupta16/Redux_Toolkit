import React from "react";
import NavBar from "../../components/common/webNavBar/NavBar";
import Footer from "../footer/Footer";
import styles from "../webLayout/layout.module.scss";

const HomeLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
