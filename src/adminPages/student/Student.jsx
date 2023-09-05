import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/layout";
import StudentContent from "./studentTable/StudentContent";
import AddStudent from "./studentForm/AddStudent";
import styles from "./studentTable/student.module.scss";
import { FaWindowClose } from "react-icons/fa";
import { initialData } from "../../dummyData";
import axios from "axios";

const Student = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userToEdit, setUserToEdit] = useState(initialData);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("token");

  const onEditUser = (item) => {
    setEditMode(true);
    setUserToEdit(item);
  };

  const onDeleteUser = (item) => {
    const del = window.confirm("Are you sure you want to delete" + item.name);
    if (del) {
      axios
        .delete(`${baseUrl}/users/1`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {}, [userToEdit]);

  return (
    <DashboardLayout>
      <div className={`${styles.modal} ${isOpenModal ? styles.isOpen : ""}`}>
        <div className={styles.modalContent}>
          <div className={styles.close}>
            <FaWindowClose onClick={() => setIsOpenModal(false)} />
          </div>
          <AddStudent
            setIsOpenModal={setIsOpenModal}
            editMode={editMode}
            userToEdit={userToEdit}
          />
        </div>
      </div>
      <StudentContent
        setIsOpenModal={setIsOpenModal}
        onEditUser={onEditUser}
        setUserToEdit={setUserToEdit}
        setEditMode={setEditMode}
        onDeleteUser={onDeleteUser}
      />
    </DashboardLayout>
  );
};

export default Student;
