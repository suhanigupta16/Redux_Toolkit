import React from "react";
import styles from "./content.module.scss";
import { HiOutlineAcademicCap, HiOutlineBookmark } from "react-icons/hi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const DashBoardContent = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.box_col}>
        <div className={`${styles.box} ${styles.student}`}>
          <div>
            <HiOutlineAcademicCap />
            <p>Students</p>
          </div>
          <div className={styles.number}>
            <h1>243</h1>
          </div>
        </div>
      </div>
      <div className={styles.box_col}>
        <div className={`${styles.box} ${styles.Course}`}>
          <div>
            <HiOutlineBookmark />
            <p>Course</p>
          </div>
          <div className={styles.number}>
            <h1>13</h1>
          </div>
        </div>
      </div>
      <div className={styles.box_col}>
        <div className={`${styles.box} ${styles.payment}`}>
          <div>
            <RiMoneyDollarBoxLine />
            <p>Payments</p>
          </div>
          <div className={styles.number}>
            <h1>INR 556,000</h1>
          </div>
        </div>
      </div>

      <div className={styles.box_col}>
        <div className={`${styles.box} ${styles.user}`}>
          <div>
            <FaRegUser />
            <p>Users</p>
          </div>
          <div className={styles.number}>
            <h1>3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
