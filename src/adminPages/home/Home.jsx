import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/layout";
import DashBoardContent from "../../components/common/dashboardcontent/DashBoardContent";
import { getListApi } from "../../api/common";
import styles from "./home.module.scss";

const Home = () => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    try {
      const response = await getListApi();
      setProducts(response?.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log("products", products);

  const handleAdd = () => {
    console.log("i ran");
    fetch("https://dummyjson.com/products/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "check if"));
  };

  const handleDelete = () => {
    fetch("https://dummyjson.com/products/2", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "check if"));
  };

  return (
    <DashboardLayout>
      <DashBoardContent />
      <div className={styles.header}>
        <h2>Product List</h2>

        <button onClick={handleAdd}>hell yeah</button>
      </div>

      <div className={styles.productsWrapper}>
        {products?.map((val) => (
          <div key={val.id} className={styles.card}>
            <div>
              <img src={val.image} alt="" />
            </div>
            <div className={styles.description}>
              <h5>{val.title}</h5>
              <h6>{`Brand:${val.brand}`}</h6>
              <h6>{`Category:${val.category}`}</h6>
              <h6>{`Description:${val.description}`}</h6>
              <h6>{`Price:${val.price}`}</h6>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Home;
