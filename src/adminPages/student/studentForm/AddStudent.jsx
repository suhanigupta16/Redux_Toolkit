import React, { useEffect, useState } from "react";
import styles from "./addStudent.module.scss";
import axios from "axios";
import { initialData } from "../../../dummyData";
import gifImg from "../../../assets/gif.png";
import { ImageToBase64 } from "../../../utility/ImageToBase64";

const AddStudent = ({
  setIsOpenModal,
  userToEdit,
  edit,
  setEdit,
  formData,
  setFormData,
  editMode,
}) => {
  const [values, setValues] = useState(initialData);
  const token = localStorage.getItem("token");

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadProfileImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    setValues({
      ...values,
      image: data,
    });
  };
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      axios
        .put(`${baseUrl}/users/1`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`${baseUrl}/users/add`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    setIsOpenModal(false);
    window.location.reload();
  };
  useEffect(() => {
    setValues(userToEdit);
  }, [userToEdit]);

  return (
    <>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          <img src={values.image ? values.image : gifImg} alt="click" />
        </div>
        <label htmlFor="profileImage">
          <p>Upload</p>
          <input
            type={"file"}
            id="profileImage"
            accept="image/*"
            onChange={handleUploadProfileImage}
          />
        </label>
      </div>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.singleField}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.singleField}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.singleField}>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={values.age}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.singleField}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.singleField}>
          <label>Phone </label>
          <input
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className={styles.btn}>
          {editMode ? "Update Student" : "Create Student"}
        </button>
      </form>
    </>
  );
};

export default AddStudent;
