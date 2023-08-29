import React, { Fragment, useEffect, useState } from "react";
//import axios from "axios";
import styles from "../products/product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { getProducts } from "../../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);
  // const [products, setProducts] = useState();

  const handleAdd = (val) => {
    dispatch(addItem(val));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className={styles.products}>
        <h2 className={styles.head}>Our Featured Products</h2>
        <div className={styles.productWrapper}>
          {products?.map((val, cartindex) => (
            <Fragment key={val?.id}>
              <div className={styles.card}>
                <img src={val?.images[0]} alt="click" width="100%" />
                <div className={styles.cardDetails}>
                  <span>{val?.brand}</span>
                  <h5 className={styles?.title}>
                    ...<span className={styles?.toolTip}>{val.title}</span>
                  </h5>
                  <p>{`Stock: ${val?.stock}`}</p>
                  <p className={styles.price}>{`Price: $${val?.price}`}</p>
                </div>
                <div className={styles.addToCart}>
                  <button onClick={() => handleAdd(val)}>Add to Cart</button>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
