import React, { useState } from "react";
import UserItem from "./UserItem";
import { useSelector } from "react-redux";

const UsersList = () => {
  const users = useSelector((store) => store.users); //данные из редакса (все юзеры)

  const [value, setValue] = useState("");
  const [filterPaid, setFilterPaid] = useState("");

  const filterUsers = users.filter((user) => {
    //фильтрация по инпуту и по селектору по оплате
    const statusPaid = user.pay_status ? "paid" : "no pai";

    return (
      user.username.toLowerCase().includes(value.toLowerCase()) &&
      statusPaid.includes(filterPaid.toLowerCase())
    );
  });

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        className="form-control"
        id="inputPassword2"
        placeholder="Поиск пользователя по полю USERNAME"
        onChange={(event) => setValue(event.target.value)}
        style={styles.search}
      />
      <select
        style={styles.choice}
        className="form-select"
        aria-label="Default select example"
        onChange={(event) => setFilterPaid(event.target.value)}
      >
        <option value="">Статус оплаты (all users)</option>
        <option value="paid">Paid</option>
        <option value="no pai">No paid</option>
      </select>
      <table
        className="table table-hover"
        style={{
          marginTop: "20px",
        }}
      >
        <thead className="table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">username</th>
            <th scope="col">first_name</th>
            <th scope="col">last_name</th>
            <th scope="col" style={{ paddingLeft: "50px" }}>
              email
            </th>
            <th scope="col" style={{ paddingLeft: "30px" }}>
              status
            </th>
            <th scope="col" style={{ paddingLeft: "230px" }}>
              profile_link
            </th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              username={user.username}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              pay_status={user.pay_status}
              profile_link={user.profile_link}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "60px",
    display: "block",
    marginRight: "auto",
  },
  search: {
    width: "40%",
    display: "inline-block",
  },
  choice: {
    width: "20%",
    display: "inline-block",
    marginLeft: "5px",
  },
};
export default UsersList;
