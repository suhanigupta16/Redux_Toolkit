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

  const onEditUser = (item) => {
    setEditMode(true);
    setUserToEdit(item);
  };

  const token = localStorage.getItem("token");
  const onDeleteUser = (item) => {
    const del = window.confirm("Are you sure you want to delete" + item.name);
    if (del) {
      console.log(item);
      axios
        .delete("https://dummyjson.com/users/1", {
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

  useEffect(() => {
    console.log("userToEdit", userToEdit);
  }, [userToEdit]);

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
