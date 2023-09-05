import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./adminPages/dashboard";
import SignIn from "./adminPages/signin/SignIn";
import Course from "./adminPages/course/Course";
import Student from "./adminPages/student/Student";
import Payment from "./adminPages/payment/Payment";
import Record from "./adminPages/record/Record";
import Setting from "./adminPages/setting/Setting";
import Home from "./adminPages/home/Home";
import SignUp from "./adminPages/signup/SignUp";
import { useContext, useEffect } from "react";
import { UserContext } from "./context";
import PrivateRoute from "./components/common/privateRoute";
import HomeLayout from "../src/webPages/webLayout/Layout";
import HomeContent from "./webPages/home/HomeContent";
import Products from "./webPages/products/Products";
import Cart from "./webPages/cart/Cart";
import About from "./webPages/about/About";

function App() {
  const { setLoginToken } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoginToken(token);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          />
          <Route path="home" element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route
            path="web"
            element={
              <HomeLayout>
                <HomeContent />
              </HomeLayout>
            }
          />
          <Route
            path="student"
            element={
              <PrivateRoute>
                <Student />
              </PrivateRoute>
            }
          />
          <Route path="payment" element={<Payment />} />
          <Route path="record" element={<Record />} />
          <Route path="setting" element={<Setting />} />
          <Route path="web/about" element={<About />} />

          <Route
            path="web/cart"
            element={
              <HomeLayout>
                <Cart />
              </HomeLayout>
            }
          />

          <Route
            path="web/Products"
            element={
              <HomeLayout>
                <Products />
              </HomeLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
