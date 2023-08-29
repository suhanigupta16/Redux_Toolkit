import React from "react";
import NavBar from "../components/common/navbar/NavBar";
import SideBar from "../components/common/sidebar/SideBar";
import styles from "./layout.module.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <NavBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
