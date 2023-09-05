import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../webNavBar/navBar.module.scss";
import { BsCartPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartProduct = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navList}>
        <li className={styles.nav}>
          <NavLink
            to="/web"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Home
          </NavLink>
        </li>

        <li className={styles.nav}>
          <NavLink
            to="/web/Products"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Products
          </NavLink>
        </li>

        <li className={styles.nav}>
          <NavLink
            to="/web/about"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            About Us
          </NavLink>
        </li>
      </ul>

      <div className={styles.navRight}>
        <button>SignIn</button>
        <div className={styles.shopping} onClick={() => navigate("/web/cart")}>
          <BsCartPlus className={styles.icon} />
          <span className={styles.cartNumber}>{cartProduct?.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
