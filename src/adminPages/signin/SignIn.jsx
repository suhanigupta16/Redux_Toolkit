import React, { useState } from "react";
import styles from "./signIn.module.scss";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email.length <= 0 || data.password.length <= 0) {
      setError("Please enter email and password");
      return;
    }

    const baseUrl = process.env.REACT_APP_BASE_URL;

    fetch(`${baseUrl}/auth/login`, {
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
