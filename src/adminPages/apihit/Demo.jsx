import React, { useEffect, useState } from "react";

const Demo = () => {
  const [data, setData] = useState(null);

  const getDemoList = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((e) => setData(e))
      .catch((e) => console.log(e, "error"));
  };
  console.log(data, "data");

  useEffect(() => getDemoList(), []);
  return (
    <div>
      {data?.map((val) => {
        return <h1>{val.userId}</h1>;
      })}
    </div>
  );
};

export default Demo;
