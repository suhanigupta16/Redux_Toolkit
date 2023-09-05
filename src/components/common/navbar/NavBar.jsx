import React from "react";
import styles from "./navBar.module.scss";
import { TbCircleCaretLeft } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.icon}>
        <TbCircleCaretLeft />
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.searchbar}>
          <input type="text" placeholder="Search.." />
          <BsSearch className={styles.icon} />
        </div>
        <span>
          <BiBell />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
