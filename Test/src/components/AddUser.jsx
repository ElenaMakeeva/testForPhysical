import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdd } from "../store/actions";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [pay_status, setPay_status] = useState("");
  const [email, setEmail] = useState("");
  const [profile_link, setProfile_link] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CreateUser = (e) => {
    e.preventDefault();
    if (!username) {
      return alert("Заполните поле USERNAME");
    } else {
      const user = {
        id: Math.random().toString(36).slice(-5),
        username,
        first_name,
        last_name,
        pay_status,
        email,
        profile_link,
      };

      dispatch(userAdd(user)); //отправляем в редах на добавление юзера
      setUsername("");
      setFirst_name("");
      setLast_name("");
      setPay_status("");
      setEmail("");
      setProfile_link("");
    }
    navigate(`/`);
  };
  return (
    <div style={styles.wrapper}>
      <form style={{ width: "60%" }}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="next"
          className="form-control"
          id="floatingInput"
          placeholder="username"
          style={styles.indents}
        />
        <input
          onChange={(e) => setFirst_name(e.target.value)}
          value={first_name}
          type="next"
          className="form-control"
          id="floatingInput"
          placeholder="Name"
          style={styles.indents}
        />
        <input
          onChange={(e) => setLast_name(e.target.value)}
          value={last_name}
          type="next"
          className="form-control"
          id="floatingInput"
          placeholder="Last Name"
          style={styles.indents}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="next"
          className="form-control"
          id="floatingInput"
          placeholder="email"
          style={styles.indents}
        />
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => setPay_status(Boolean(e.target.value))}
          style={styles.indents}
        >
          <option defaultValue>Выберете статус оплаты</option>
          <option value="paid">paid</option>
          <option value="">no paid</option>
        </select>
        <input
          onChange={(e) => setProfile_link(e.target.value)}
          value={profile_link}
          type="next"
          className="form-control"
          id="floatingInput"
          placeholder="profile_link"
          style={styles.indents}
        />
        <button
          onClick={CreateUser}
          type="submit"
          className="btn btn-outline-dark"
          // style={{ marginTop: "10px", marginLeft: "40%" }}
          style={styles.button}
        >
          Записать
        </button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    marginTop: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  indents: {
    marginBottom: "10px",
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
};
export default AddUser;
