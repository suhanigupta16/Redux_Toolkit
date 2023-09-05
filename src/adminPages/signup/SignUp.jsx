import React from "react";
import styles from "./signup.module.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
        <form>
          <div className={styles.header}>
            <h2>CRUD OPERATIONS</h2>
            <h4>SIGN UP</h4>
            <p>Enter Credentials to Register</p>
          </div>
          <div className={styles.singleField}>
            <label for="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.singleField}>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.singleField}>
            <label for="pass">Password</label>
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="Enter your password"
            />
          </div>
          <div className={styles.singleField}>
            <label for="pass">Confirm Password</label>
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="Confirm password"
            />
          </div>
          <Link to="/signin" className={styles.link}>
            <div className={styles.btn}>
              <button type="submit">SIGN UP</button>
            </div>
          </Link>
          <div className={styles.pass}>
            <p>
              Already have an account ?
              <Link to="/signin" className={styles.text}>
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
