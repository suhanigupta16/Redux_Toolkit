import React, { useEffect, useState } from "react";

const Check = () => {
  const [data, setData] = useState(null);
  const getListApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((e) => setData(e))
      .catch((e) => console.log(e, "error"));
  };
  console.log(data, "data");

  useEffect(() => {
    getListApi();
  }, []);

  // const arr =[
  //   "suhani",
  //   "gupta",
  //   {
  //     name: "Shubham",
  //     degree: "Btech",
  //   },
  //   2,
  //   3,
  //   5,
  // ];
  // console.log(arr.length, "findobject");

  const abc = {
    maggie: 2,
    chocolate: 5,
    student: {
      name: "suhani",
      age: 23,
      degree: "MCA",
    },
  };

  return (
    <div>
      Check
      <h3>title</h3>
      {data?.map((v) => {
        return (
          <div>
            <h2>{abc.student.age}</h2>
            <h3>{v.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Check;
