import React, { useState } from "react";
import styles from "./signIn.module.scss";
import { useNavigate } from "react-router-dom";
//import axios from "axios";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  //  const ValidateEmailAddress = (emailString) => {
  //   if (!emailString) setError("Please enter email");
  //   var atSymbol = emailString.indexOf("@");
  //   if (atSymbol < 1) setError("Please enter email");
  //   var dot = emailString.indexOf(".");
  //   if (dot <= atSymbol + 2) setError("Email is not valid");
  //   if (dot === emailString.length - 1) setError("Email is not valid");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email.length <= 0 || data.password.length <= 0) {
      setError("Please enter email and password");

      return;
    }

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => setUserData(res))
      .catch((err) => console.log(err, "find"));

    if (userData?.token) {
      const saveUser = JSON.stringify(userData);
      localStorage.setItem("token", userData?.token);
      localStorage.setItem("user", saveUser);
      navigate("/dashboard");
    }
  };

  const f = localStorage.getItem("token");
  console.log("🚀 ~ file: SignIn.jsx:70 ~ f:", f);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
        <form>
          <div className={styles.header}>
            <h1>CRUD OPERATIONS</h1>
            <h3>SIGN IN</h3>
            <p>Enter your credentials to access your account</p>
          </div>

          <div className={styles.singleField}>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.singleField}>
            <label for="pass">Password</label>
            <input
              type="password"
              id="pass"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{error ? error : null}</p>

          <div className={styles.btn}>
            <button type="submit" onClick={handleSubmit}>
              SIGN IN
            </button>
          </div>

          <div className={styles.pass}>
            <p>
              Forgot your password ?<span>Reset Password</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
