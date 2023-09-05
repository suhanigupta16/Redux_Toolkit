import React, { Fragment, useEffect, useState } from "react";
import styles from "./student.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { initialData } from "../../../dummyData";
import axios from "axios";

const StudentContent = ({
  setIsOpenModal,
  onDeleteUser,
  onEditUser,
  setUserToEdit,
  setEditMode,
}) => {
  const token = localStorage.getItem("token");
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setUserToEdit(initialData);
    setIsOpenModal(true);
    setEditMode(false);
  };
  const handleEdit = (item) => {
    setIsOpenModal(true);
    onEditUser(item);
  };
  const handleDelete = (item) => {
    onDeleteUser(item);
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res?.data?.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.studentWrapper}>
      <div className={styles.header}>
        <h3>Student List</h3>
        <div className={styles.headerRight}>
          <button type="button" onClick={handleAdd}>
            Add New Student
          </button>
        </div>
      </div>
      <hr />
      <div className={styles.stdDetails}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th></th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={styles.wrap}>
            {data?.map((item, index) => (
              <Fragment key={index}>
                <tr>
                  <td>
                    <img src={item.image} alt="click" />
                  </td>
                  <td className={styles.check}>{item.firstName}</td>
                  <td className={styles.check}>{item.lastName}</td>
                  <td className={styles.check}>{item.age}</td>
                  <td className={styles.check}>{item.email}</td>
                  <td className={styles.check}>{item.phone}</td>
                  <td>
                    <div className={styles.icon}>
                      <BsPencil onClick={() => handleEdit(item)} />
                      <AiOutlineDelete onClick={() => handleDelete(item)} />
                    </div>
                  </td>
                  <td></td>
                </tr>
                &nbsp;
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentContent;
