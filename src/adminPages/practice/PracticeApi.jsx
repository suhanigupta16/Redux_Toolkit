import React, { useEffect, useState } from "react";

const PracticeApi = () => {
  const [products, setProducts] = useState(null);
  const getApi = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((e) => setProducts(e))
      .catch((e) => console.log(e, "error"));
  };
  console.log(products, "products");

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      {products?.map((val) => {
        return (
          <>
            <h2>{val.name}</h2>
          </>
        );
      })}
    </div>
  );
};

export default PracticeApi;
