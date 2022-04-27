import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import UsersList from "../components/UsersList";
import AddUser from "../components/AddUser";

const Navigation = () => {
  return (
    <div style={styles.header}>
      <div style={styles.blockItem}>
        <Link
          to="/"
          className="nav-link active"
          aria-current="page"
          style={styles.link}
        >
          Список пользователей
        </Link>
      </div>
      <div style={styles.blockItem}>
        <Link
          to="/addUser"
          className="nav-link active"
          aria-current="page"
          style={styles.link}
        >
          Добавить пользователя
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
    </div>
  );
};

const styles = {
  header: {
    height: "60px",
    width: "100%",
    backgroundColor: "#740074",
  },
blockItem:{
  display: "inline-block"
},
  link: {
    color: "rgb(255, 255, 255)",
    paddingTop: "15px ",
  },
};
export default Navigation;
