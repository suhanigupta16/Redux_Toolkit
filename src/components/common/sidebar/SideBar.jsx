import React from "react";

import styles from "./sideBar.module.scss";
import profile from "./images/profile.jpg";
import {
  HiOutlineHome,
  HiOutlineBookmark,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { RiFileChartLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/signin");
  };
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidehead}>
        <h3>CRUD OPERATIONS</h3>
      </div>
      <div className={styles.sideimg}>
        <img src={profile} alt="click" />
        <h4>Karthi Madesh</h4>
        <span>Admin</span>
      </div>
      <div className={styles.sidenavs}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              <HiOutlineHome className={styles.icon} />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/course"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              <HiOutlineBookmark className={styles.icon} />
              Course
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/student"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              <HiOutlineAcademicCap className={styles.icon} />
              Student
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payment"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              <RiMoneyDollarBoxLine className={styles.icon} />
              Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/record"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              <RiFileChartLine className={styles.icon} />
              Record
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/setting"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              <LuSettings2 className={styles.icon} />
              Setting
            </NavLink>
          </li>
          <li className={styles.log} onClick={handleLogOut}>
            Logout
            <FiLogOut className={styles.logout} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
